import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const secret = process.env.REVIEWS_TOKEN;

    if (password === secret) {
      return NextResponse.json({ authenticated: true });
    } else {
      return NextResponse.json(
        { message: 'Incorrect password' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}
