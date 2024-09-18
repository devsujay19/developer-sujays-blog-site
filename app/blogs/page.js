import React from "react";
import BlogListing from "@/components/BlogListing";
import { blogData } from "@/data/constants";
import PageTitle from "@/components/PageTitle";

export default async function Blogs() {
  const blogPosts = Object.values(blogData.blogPosts);
  return (
    <main className="min-h-screen pt-[20px] pb-[200px]">
      <div className="divide-y divide-gray-700 py-20">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl pl-10 font-semibold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <PageTitle>Blogs</PageTitle>
          </h1>
          <p className="text-neutral-500 pl-10">Checkout the blogs I've written so far in this mean time...</p>
        </div>
        <div>
          {blogPosts.map((blogPost) => (
            <BlogListing key={blogPost.slug} blogPost={blogPost} />
          ))}
        </div>
      </div>
      <p className="text-center text-[#9ca3af] text-sm">More blogs are coming soon;<br />Stay tuned...</p>
    </main>
  );
};