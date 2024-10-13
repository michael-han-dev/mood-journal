import { analyze } from "@/utils/ai";
import { getUserFromClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const PATCH = async (request, context) => {
    try {
        // Await the params from context
        const { params } = context;
        
        // Ensure request body is awaited properly
        const { content } = await request.json();
        
        // Get user from Clerk
        const user = await getUserFromClerkID();
        
        // Update the journal entry
        const updatedEntry = await prisma.journalEntry.update({
            where: {
                userId_id: {
                    userId: user.id,
                    id: params.id, // Ensure params is accessed correctly
                },
            },
            data: {
                content,
            },
        });
        
        // Analyze the updated content
        const analysis = await analyze(updatedEntry.content);
        
        // Upsert analysis data
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
