import { NextRequest, NextResponse } from 'next/server';
import { timingSafeEqual } from 'crypto';

const encoder = new TextEncoder();

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const secret = process.env.REVIEWS_TOKEN;

    if (!password || !secret) {
      return NextResponse.json(
        { message: 'Missing password.' },
        { status: 400 }
      );
    }

    const providedBuffer = encoder.encode(password);
    const secretBuffer = encoder.encode(secret);

    if (providedBuffer.length !== secretBuffer.length) {
      return NextResponse.json(
        { message: 'Incorrect password' },
        { status: 401 }
      );
    }

    if (timingSafeEqual(providedBuffer, secretBuffer)) {
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
