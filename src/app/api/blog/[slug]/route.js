import { ConnectToDB } from "@/lib/connectToDB"
import { Post } from "@/lib/models"
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {

    const { slug } = params;

    try {
        ConnectToDB()
        const post = await Post.findOne({slug})
        return NextResponse.json(post);
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch posts!");
    }
}

export const DELETE = async (request, {params}) => {

    const { slug } = params;

    try {
        ConnectToDB()
        await Post.deleteOne({slug})
        return NextResponse.json("post delete");
    } catch (error) {
        console.log(error)
        throw new Error("Failed to delete posts!");
    }
}