import { NextResponse } from "next/server";
import { BASE_URL } from "@/app/data";

export async function GET() {
  return NextResponse.redirect(`${BASE_URL}/rss`);
}
