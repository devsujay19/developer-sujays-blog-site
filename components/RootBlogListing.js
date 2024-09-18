"use client";

import { blogData } from "@/data/constants";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import redirection from "./reuseableFunctions/redirection";

export default function RootBlogListing() {
    return (
        <main className='px-10'>
            <article className='border-t border-slate-600 pt-12 pb-12'>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-400">
                            <time dateTime={blogData.blogPosts.post1.writtenOn}>{blogData.blogPosts.post1.writtenOn}</time>
                        </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-[22px] font-bold leading-8 tracking-tight cursor-pointer">
                                    <span
                                        onClick={() => {
                                            redirection(`/blogs/${blogData.blogPosts.post1.slug}`, "_self");
                                        }}
                                        className="text-gray-100"
                                    >
                                        {blogData.blogPosts.post1.title}
                                    </span>
                                </h2>
                                <div className="flex uppercase flex-wrap">

                                    {blogData.blogPosts.post1.tags.map((tag) => (
                                        <p
                                            onClick={() => {
                                                window.open(`/tags/?tag=${tag}`, "_self");
                                            }}
                                            key={tag}
                                            className="mr-3 text-sm font-medium uppercase text-[#1fff9e] hover:text-green-400 cursor-pointer"
                                        >
                                            {tag}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="prose max-w-none text-gray-400">
                                {blogData.blogPosts.post1.summary}
                            </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                            <span
                                onClick={() => {
                                    redirection(`/blogs/${blogData.blogPosts.post1.slug}`, "_self");
                                }}
                                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                aria-label={`Read more: "${blogData.blogPosts.post1.title}"`}
                            >
                                <Button className="normal-case rounded-base py-2 bg-[#1fff9e] text-black transition duration-150 hover:bg-transparent hover:text-[#1fff9e] border border-[#1fff9e] active:bg-[#1fff9e6e] active:text-black">
                                    Read more &rarr;
                                </Button>
                            </span>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}