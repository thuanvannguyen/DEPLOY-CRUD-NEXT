import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/untils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    // Ensure database connection
    await connectToDb();

    // Fetch posts from the database
    const posts = await Post.find();

    // Return the posts as JSON
    return NextResponse.json(posts);
  } catch (err) {
    console.error("Failed to fetch posts:", err);

    // Return an error response with status code 500
    return NextResponse.json(
      { message: "Failed to fetch posts!" },
      { status: 500 }
    );
  }
};
