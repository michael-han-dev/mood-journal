import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define public routes (previously specified in publicRoutes array)
const isPublicRoute = createRouteMatcher(['/', '/sign-in', '/sign-up', '/new-user'])

export default clerkMiddleware(async (auth, req) => {
    // If it's not a public route, protect it
    if (!isPublicRoute(req)) {
        await auth.protect()
    }
})

export const config = {
    matcher: [
      // Skip Next.js internals and all static files, unless found in search params
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Always run for API routes
      '/(api|trpc)(.*)',
    ],
  }
