// import prisma from '@/app/libs/prismadb'
import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  console.log('body', body)
  // const { email } = body // <- if body is an object
  const email = body // if body is a primitive type

  const user = await prisma.user.create({
    data: {
      email,
    }
  })

  return NextResponse.json(user)
}