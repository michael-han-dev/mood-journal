
import { prisma } from './db'
import { auth } from '@clerk/nextjs/server'

export const getUserFromClerkID = async () => {
  const { userId } = await auth()
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId as string,
    },
  })

  return user
}

export const syncNewUser = async (clerkUser: User) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      clerkId: clerkUser.id,
    },
  })
}