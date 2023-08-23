import { type NextRequest, NextResponse } from 'next/server'

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next()
  const { nextUrl } = req

  // TODO: will implement login session
  const hasSession = true
  const isPublicPath = ['/auth/signin', '/auth/signup'].includes(
    nextUrl.pathname,
  )

  if (isPublicPath && hasSession) {
    nextUrl.pathname = '/'
    return NextResponse.redirect(nextUrl)
  }

  if (!isPublicPath && !hasSession) {
    return NextResponse.redirect(
      new URL(
        `/auth/signin?${new URLSearchParams({ next: nextUrl.pathname })}`,
        nextUrl,
      ),
    )
  }

  return res
}

export const config = {
  matcher: ['/', '/auth/signin', '/auth/signup'],
}
