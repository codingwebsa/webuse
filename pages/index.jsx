import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import HomeComponent from "../components/Home";
import Websites from "../components/Websites";
import { getDocs } from "firebase/firestore";
import { colRef } from "../firebase";

export default function Home() {
  const [websites, setWebsites] = useState([]);
  function Hello() {
    getDocs(colRef).then((snap) => {
      let websites = [];
      snap.docs.forEach((doc) => {
        websites.push({ ...doc.data(), id: doc.id });
      });
      setWebsites(websites);
    });
  }
  useEffect(() => {
    Hello();
  }, []);
  return (
    <>
      <Head>
        <title>Web Use</title>
      </Head>
      <div className="pb-8">
        <HomeComponent />
        <Websites data={websites} />
        <span className="bg-gradient-to-br from-[#ff9966] to-[#ff5e62] w-12 h-12 fixed drop-shadow-xl right-4 bottom-4 flex justify-center items-center rounded-xl cursor-pointer">
          <Link href="/create">
            <Image
              src="/plus.png"
              width={30}
              height={30}
              className="invert"
              alt="plus"
            />
          </Link>
        </span>
      </div>
    </>
  );
}
