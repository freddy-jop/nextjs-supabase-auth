import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
  } catch (error) {
    console.log(error);
    return new NextResponse("Erreur de traitement", { status: 500 });
  }
}
