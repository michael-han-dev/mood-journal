import { analyze } from "@/utils/ai"
import { getUserFromClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { NextRequest, NextResponse } from "next/server"

export const PATCH = async (request, {params}) => {
    const {content} = await request.json()
    const user = await getUserFromClerkID()
    const updatedEntry = await prisma.journalEntry.update({
        where:{
            userId_id:{
                userId: user.id,
                id: params.id,
            },
        },
        data: {
            content,
        }
    })
    const analysis = await analyze(updatedEntry.content)
    await prisma.analysis.upsert({
        where:{
            entryId: updatedEntry.id,
        },
        data:{
            entryId: updatedEntry.id,
            ...analysis,
        },
        update: analysis || {},
    })

    return NextResponse.json({data: updatedEntry})
}