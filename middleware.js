import { NextResponse } from "next/server";

const isLoggedIn = false;

function middleware(request) {
  if (!isLoggedIn && request.url === "http://localhost:3000/profile") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}
export default middleware;
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/profile",
// };
