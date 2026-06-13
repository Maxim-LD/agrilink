import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('agrilink_token')?.value;

  // Paths that require authentication
  const protectedPaths = ['/aggregator', '/buyer', '/dealer'];
  
  // Paths that are explicitly public (onboarding flows)
  const publicPaths = ['/aggregator/onboarding', '/buyer/onboarding', '/dealer/onboarding'];

  const { pathname } = request.nextUrl;

  const isProtected = protectedPaths.some((p) => pathname.startsWith(p));
  const isPublic = publicPaths.some((p) => pathname.startsWith(p));

  if (isProtected && !isPublic && !token) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
