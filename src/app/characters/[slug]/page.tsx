"use client";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/characters");
      const data = await response.json();
      console.log(data, "<<data");
      setCharacters(data.characters);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Navbar />
      <div className="flex w-3/4 mt-5 ">
        {error && <h1 className="text-2xl text-red-500">Error</h1>}
        {loading && <h1 className="text-2xl">Loading...</h1>}
        {!loading && !error && (
          <div>
            {characters.map((character) => (
              <div>my name is: {character.name}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
