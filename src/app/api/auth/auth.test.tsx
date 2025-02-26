import { NextRequest } from 'next/server';
import { POST } from './route';

jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn((data, { status } = {}) => ({
      json: async () => data,
      status: status ?? 200,
    })),
  },
}));

describe('POST /api/auth', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = {
      ...OLD_ENV,
      REVIEWS_TOKEN: 'test_secret',
      TEST_PASSWORD: 'test_secret',
      WRONG_PASSWORD: 'wrong_password',
    };
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  it('should return 400 if password is missing', async () => {
    const req = new Request('http://localhost/api/auth', {
      method: 'POST',
      body: JSON.stringify({}),
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await POST(req as unknown as NextRequest);
    const resBody = await res.json();

    expect(res.status).toBe(400);
    expect(resBody).toEqual({ message: 'Missing password.' });
  });

  it('should return 401 if password is incorrect', async () => {
    const req = new Request('http://localhost/api/auth', {
      method: 'POST',
      body: JSON.stringify({ password: process.env.WRONG_PASSWORD }),
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await POST(req as unknown as NextRequest);
    const resBody = await res.json();

    expect(res.status).toBe(401);
    expect(resBody).toEqual({ message: 'Incorrect password' });
  });

  it('should return authenticated if password is correct', async () => {
    const req = new Request('http://localhost/api/auth', {
      method: 'POST',
      body: JSON.stringify({ password: process.env.TEST_PASSWORD }),
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await POST(req as unknown as NextRequest);
    const resBody = await res.json();

    expect(res.status).toBe(200);
    expect(resBody).toEqual({ authenticated: true });
  });

  it('should return 500 on internal server error', async () => {
    process.env.REVIEWS_TOKEN = undefined;

    const req = new Request('http://localhost/api/auth', {
      method: 'POST',
      body: JSON.stringify({ password: process.env.TEST_PASSWORD }),
      headers: { 'Content-Type': 'application/json' },
    });

    const res = await POST(req as unknown as NextRequest);
    const resBody = await res.json();

    expect(res.status).toBe(500);
    expect(resBody).toHaveProperty('message', 'Internal Server Error');
  });
});
