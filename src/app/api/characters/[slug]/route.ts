import characters from '@/data/characters.json';
import quotes from '@/data/quotes.json';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    console.log(params.slug, "<<< params.slug");

    // Cari karakter berdasarkan slug (tidak perlu await karena synchronous)
    const character = characters.data.find((item) => item.slug === params.slug);

    // Jika karakter tidak ditemukan, kembalikan respons 404
    if (!character) {
      return new NextResponse('Character not found', { status: 404 });
    }

    // Cari quotes yang terkait dengan karakter (tidak perlu await karena synchronous)
    const character_quotes = quotes.data.filter(
      (item) => item.character_id === character.id,
    );

    // Kembalikan data karakter dan quotes
    return NextResponse.json({
      character,
      character_quotes: character_quotes.length > 0 ? character_quotes : null,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}