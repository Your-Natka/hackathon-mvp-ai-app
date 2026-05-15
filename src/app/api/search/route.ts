import { NextRequest, NextResponse } from "next/server";
import { searchDocs } from "@/lib/search-docs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const query = body.query;

    if (!query) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    const results = await searchDocs(query);

    return NextResponse.json({
      ok: true,
      results,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
