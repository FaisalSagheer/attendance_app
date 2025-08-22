
"use client";

import { doc } from "firebase/firestore";
import { db } from "../lib/firebase/config";

function Dashboard() {

  // const {setTheme} = useTheme()
  // useEffect(() => {
  //   setTheme("light")
  // }, [])

  // const router = useRouter();
  // const handleSignout = () => {
  //   // signOut()
  //   localStorage.clear();
  //   router.push("/login");
  // };

  return (
    <>
    Page
    </>
  );
}

export default Dashboard;

export async function GET(req) {
  const result = doc(db,"grades")
}