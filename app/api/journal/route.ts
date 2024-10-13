import { analyze } from "@/utils/ai"
import { getUserFromClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const POST = async () => {
    try {
        const user = await getUserFromClerkID();
        const entry = await prisma.journalEntry.create({
            data: {
                userId: user.id,
                content: 'Write about your day here!',
            },
        });

        const analysis = await analyze(entry.content);

        const savedAnalysis = await prisma.analysis.create({
            data: {
                entryId: entry.id,
                ...analysis,
            },
        });

        revalidatePath('/journal');

        return NextResponse.json({ entry, analysis: savedAnalysis });
    } catch (error) {
        console.error('Error in POST route:', error);
        return NextResponse.error();
    }
};
