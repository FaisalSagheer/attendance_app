import Link from "next/link";
import { Button } from "./components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <h1 className="text-2xl py-20">404 - Page Not Found</h1>
      <Button variant={"destructive"} size={"xl"}>
        <Link href="/dashboard">Return Home</Link>
      </Button>
    </div>
  );
}
