// const users = [
//   {
//     id: 1,
//     name: "user_1"
//   },
//   {
//     id: 2,
//     name: "user_2"
//   }
// ];

// const posts = [
//   {
//     id: 1,
//     title: "post 1",
//     userId: 1
//   },
//   {
//     id: 2,
//     title: "post 2",
//     userId: 2
//   },
// ]

// // Tao thanh cac cai promise
// export const getPosts = async () => { //Listing
//   return posts;
// }

// export const getPost = async (slug) => {
//   // console.log(slug);
//   return posts.filter((value)=> value.id === parseInt(slug));
   
// }

import { Post } from "./models";
import { connectToDb } from "./untils";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find(); 
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

