import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, name } = body;

  if (!email || !name) {
    return new Response(JSON.stringify({ error: 'Email and name are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  const user = await prisma.user.create({
    data: { email, name },
    select: { id: true, email: true, name: true },
  });

  return Response.json(user, { status: 201 });
}
