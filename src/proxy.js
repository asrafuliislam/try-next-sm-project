import { NextResponse } from "next/server";

export function proxy(request) {
    const {pathname} = request.nextUrl;
    if (!pathname.startsWith("/api/feedback")) {
        return NextResponse.json({
            stats: 404
        })
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/api/:path*"],
};