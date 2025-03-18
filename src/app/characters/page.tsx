"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async () => {
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
    fetchCharacters();
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      {/* navbar */}
      <Navbar />

      {error && <h1 className="text-2xl text-red-500">Error</h1>}
      {loading && <h1 className="text-2xl text-blue-500">Loading...</h1>}
      {!loading && !error && (
        <div className="flex flex-col h-screen w-3/4  pt-12">
          <h1 className="flex justify-center mb-4 text-3xl font-extrabold">
            Welcome to Quizy
          </h1>
          {/* card */}
          <div className="flex h-screen p-4">
            <div className="grid grid-cols-4 gap-4 w-full">
              {characters.map((character) => (
                <div key={character.id} className="hover:scale-105 rounded-xl">
                  <Link href={`/characters/${character.id}`}>
                    <Image
                      src={character.avatar}
                      alt={character.name}
                      height={550}
                      width={550}
                      className="rounded-3xl"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
