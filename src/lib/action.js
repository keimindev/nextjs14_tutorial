"use server";

import { revalidatePath } from "next/cache";
import { ConnectToDB } from "./connectToDB"
import { Post, User } from "./models";

const sayHello = async () => {
    "use server"

    console.log("hello")
}

export const addPost = async (formData) => {
   const { title, desc, slug, userId} = Object.fromEntries(formData);

  try {
    ConnectToDB();
    const newPost = new Post({
        title,
        desc,
        slug,
        userId
    });

    await newPost.save();
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error)
    return { error: "something went wrong!"}
  }

}

export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);
  
    try {
        ConnectToDB();
      await Post.findByIdAndDelete(id);
      console.log("deleted from db");
      revalidatePath("/blog");
      revalidatePath("/admin");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  