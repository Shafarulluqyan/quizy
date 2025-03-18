"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sayHi = async () => {
    setLoading(true); // Set loading ke true sebelum fetch
    try {
      // Tambahkan delay 2 detik untuk mensimulasikan loading
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await fetch("http://localhost:3000/api/characters");
      const data = await response.json();
      setCharacters(data.characters);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false); // Set loading ke false setelah fetch selesai
    }
  };

  useEffect(() => {
    sayHi();
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      {/* navbar */}
      <Navbar />

      <div className="flex flex-col h-screen text-white w-3/4 items-center justify-center">
        <h1 className="text-4xl mb-5">Welcome to Quizy</h1>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link href="/characters">See Characters</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
