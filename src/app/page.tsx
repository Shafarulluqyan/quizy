"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const sayHi = async () => {
    const response = await fetch("http://localhost:3000/api/hai");
    const data = await response.json();
    setMessage(data.message);
    console.log(data, "<<response");
  };

  useEffect(() => {
    sayHi();
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      {/* navbar */}
      <div className="flex p-5 w-3/4  font-bold justify-between">
        <Link href="/">Logo</Link>
        <Link href="/quiz" className="">
          Quiz
        </Link>
      </div>
      <div className="flex flex-col h-screen w-3/4  pt-12">
        <h1 className="flex justify-center mb-4 text-3xl font-extrabold">
          Welcome to Quizy
        </h1>
        {/* card */}
        <div className="flex h-screen p-4">
          <div className="grid grid-cols-4 gap-4 w-full">
            <h1 className="">Card 1: {message} </h1>
            <h1 className="">Card 2</h1>
            <h1 className="">Card 3</h1>
            <h1 className="">Card 4</h1>
            <h1 className="">Card 5</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
