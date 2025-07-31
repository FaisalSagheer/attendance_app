import { NextResponse } from "next/server";

const isLoggedIn = true;

function middleware(request) {
  if (!isLoggedIn && request.url === "http://localhost:3000/dashboard") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}
export default middleware;
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/profile",
// };
