import { type NextRequest, NextResponse } from 'next/server'

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next()
  const url = req.nextUrl

  // TODO: will implement login session
  const session = true
  const isPublicPath = ['/auth/signin', '/auth/signup'].includes(url.pathname)

  if (isPublicPath && session) {
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  if (!isPublicPath && !session) {
    url.pathname = '/auth/signin'
    return NextResponse.redirect(url)
  }

  return res
}

export const config = {
  matchers: ['/((?!api/|_next/|_vercel|favicon.ico|sitemap.xml).*)'],
}
