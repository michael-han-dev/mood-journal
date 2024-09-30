import { getUserFromClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"

const getEntries = async () => {
    const user = await getUserFromClerkID
    const entries = await prisma.journalEntry.findMany({
        where:{
            userId: user.id,
        },
        orderBy: {
            createdAt: 'desc',
        },

    })
    return entries
}

const JournalPage = () => {
    const entries = await getEntries()
    console.log('entries', entries)
    return <div>journal</div>
}

export default JournalPage