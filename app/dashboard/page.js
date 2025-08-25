
"use client";

import { doc } from "firebase/firestore";
import { db } from "../lib/firebase/config";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";

function Dashboard() {

  // const {setTheme} = useTheme()
  // useEffect(() => {
  //   setTheme("light")
  // }, [])

  const router = useRouter();
  const handleSignout = () => {
    // signOut()
    localStorage.clear();
    router.push("/login");
  };

  return (
    <>
    <Button onClick={handleSignout}>signOut</Button>
    Page
    </>
  );
}

export default Dashboard;

// export async function GET(req) {
//   const result = doc(db,"grades")
// }