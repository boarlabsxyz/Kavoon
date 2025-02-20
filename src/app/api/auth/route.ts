import { NextRequest, NextResponse } from 'next/server';
import { timingSafeEqual } from 'crypto';

const encoder = new TextEncoder();

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const secret = process.env.REVIEWS_TOKEN;

    if (!password) {
      return NextResponse.json(
        { message: 'Missing password.' },
        { status: 400 }
      );
    }

    if (!secret) {
      return NextResponse.json(
        { message: 'Internal Server Error' },
        { status: 500 }
      );
    }

    const providedBuffer = encoder.encode(password);
    const secretBuffer = encoder.encode(secret);

    const maxLength = Math.max(providedBuffer.length, secretBuffer.length);
    const paddedProvided = new Uint8Array(maxLength);
    const paddedSecret = new Uint8Array(maxLength);

    paddedProvided.set(providedBuffer);
    paddedSecret.set(secretBuffer);

    if (timingSafeEqual(paddedProvided, paddedSecret)) {
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
