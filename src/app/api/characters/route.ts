import characters from "@/data/characters.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ characters: characters.data });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
