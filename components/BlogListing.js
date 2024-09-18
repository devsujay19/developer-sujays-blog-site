"use client";

import React from 'react';
import BlogPageRedirectionATagComponent from './BlogRedirectionAComponent';
import "@/css/no-scrollbar.css";
import { Button } from '@material-tailwind/react';

const BlogListing = ({ blogPost }) => {
  const { title, summary, writtenOn, slug, tags } = blogPost;

  return (
    <main className='px-10 max-h-screen'>
      <article className='px-10 pt-12 pb-12'>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-400">
              <time dateTime={writtenOn}>{writtenOn}</time>
            </dd>
          </dl>
          <div className="space-y-5 xl:col-span-3">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  <BlogPageRedirectionATagComponent
                    href={`/blogs/${slug}`}
                    className="text-gray-100"
                  >
                    {title}
                  </BlogPageRedirectionATagComponent>
                </h2>
                <div className="flex uppercase flex-wrap">
                  {tags.map((tag) => (
                    <BlogPageRedirectionATagComponent
                      key={tag}
                      href={`/tags/?tag=${tag}`} // Assuming tags route exists
                      className="mr-3 text-sm font-medium uppercase text-[#1fff9e] hover:text-green-400"
                    >
                      {tag}
                    </BlogPageRedirectionATagComponent>
                  ))}
                </div>
              </div>
              <div className="prose max-w-none text-gray-400">
                {summary}
              </div>
            </div>
            <div className="text-base font-medium leading-6">

              <BlogPageRedirectionATagComponent
                href={`/blogs/${slug}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read more: "${title}"`}
              >
                <Button className="normal-case py-3 rounded-full border border-[#1fff9e] bg-[#060606] hover:bg-[#1fff9e] hover:text-[#060606] transition duration-150" onClick={() => {
                  redirection("/blogs/", "_self");
                }}>Read more &rarr;</Button>
              </BlogPageRedirectionATagComponent>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogListing;
