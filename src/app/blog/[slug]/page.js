import { getPost } from '@/lib/data';
import React from 'react'

const BlogDetail = async ({ params }) => {
  const { slug } = params;
  const postDetail = await getPost(slug);

  return (
    <h1>{postDetail.title}</h1>
  )
}

export default BlogDetail