import { appCookies, paths } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // debugLog(`middleware-------------${Date.now()}`)
  const pathname = req.nextUrl.pathname;
  const hasAccessToken = req.cookies.has(appCookies.accessToken);
  if (pathname.includes("api")) {
    return NextResponse.next();
  } else if (
    pathname.startsWith('/admin') &&
    !adminAuthPaths.map((item) => pathname.startsWith(item)).includes(true)
  ) {
    if (!hasAccessToken)
      return NextResponse.redirect(new URL(paths.adminLogin, req.url));
  }
}

const adminAuthPaths = [paths.adminLogin, paths.adminRegister, paths.forgotPassword];