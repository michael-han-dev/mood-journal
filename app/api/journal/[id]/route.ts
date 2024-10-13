import { analyze } from "@/utils/ai";
import { getUserFromClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const PATCH = async (request, context) => {
    try {
        const { params } = context;       
        const { content } = await request.json(); 
        const user = await getUserFromClerkID();       
        const updatedEntry = await prisma.journalEntry.update({
            where: {
                userId_id: {
                    userId: user.id,
                    id: params.id,
                },
            },
            data: {
                content,
            },
        });
        
        const analysis = await analyze(updatedEntry.content);
        
        if (analysis) {
            await prisma.analysis.upsert({
                where: {
                    entryId: updatedEntry.id,
                },
                create: {
                    entryId: updatedEntry.id,
                    ...analysis,
                },
                update: analysis || {},
            });
        }

        
        return NextResponse.json({ data: updatedEntry });
    } catch (error) {
        console.error("Error updating journal entry:", error);
        return NextResponse.error();
    }
};
