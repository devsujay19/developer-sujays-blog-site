"use client";

import { blogData, siteMetaData } from "@/data/constants";
import { Button } from "@material-tailwind/react";
import PageTitle from "@/components/PageTitle";
import "@/css/no-scrollbar.css";
import "@/css/style.css";
import RootBlogListing from "@/components/RootBlogListing";
import redirection from "@/components/reuseableFunctions/redirection";

export default function Home() {
  const blogPosts = Object.values(blogData.blogPosts);

  return (
    <main className="min-h-screen items-center justify-center pt-[100px] pb-[200px]">

      <div className="space-y-2 pb-8 pt-6 px-10 md:space-y-5">
        <h1 className="text-3xl font-semibold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          <PageTitle>Featured</PageTitle>
        </h1>
        <p className="text-neutral-500">A {siteMetaData.type} developed with {siteMetaData.literalTechStack.join(" and ")}</p>

      </div>

      <RootBlogListing blogPosts={blogPosts} />
      <div className="mx-auto px-auto text-center">
        <Button className="normal-case py-3 rounded-full border border-[#1fff9e] bg-[#060606] hover:bg-[#1fff9e] hover:text-[#060606] transition duration-150" onClick={() => {
          redirection("/blogs", "_self");
        }}>Read more &rarr;</Button>
      </div>
    </main>
  );
};