"use client";

import { Tooltip } from '@material-tailwind/react';
import Image from 'next/image';
import "@/css/no-scrollbar.css";
import { developerData, socialLinks } from '@/data/constants';
import { developerData as varDeveloperData } from "@/data/variables";
import PageTitle from '@/components/PageTitle';

export default function About() {

  const bioParagraphs = varDeveloperData.bio.map((paragraph) => (
    <p className='mb-8' key={paragraph.paragraph}>{paragraph.paragraph}</p>
  ));

  return (
    <main className='min-h-screen'>
      <div className="bg-transparent px-5 pb-[-200px] justify-between">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 py-20">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-semibold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              <PageTitle>About</PageTitle>
            </h1>
          </div>
          <div className="items-start xl:grid xl:grid-cols-3 lg:px-[30px]">
            <div className="flex flex-col items-center pt-8">

              <Image
                src={varDeveloperData.avatar}
                alt="avatar"
                style={{ userSelect: "none", pointerEvents: "one" }}
                width={192}
                height={192}
                className="rounded-full"
              />
              <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{developerData.name}</h3>
              <div className="text-gray-500 dark:text-gray-400">{varDeveloperData.occupation}</div>
              <div className="text-gray-500 dark:text-gray-400">
                <a className='hover:text-[#1fff9e]' href={`mailto:${developerData.email}`}>{developerData.email}</a>
              </div>
              <div className="flex space-x-3 pt-6">
                <Tooltip placement="left-start" className="bg-gray-900 border-[1px] border-[#1fff9e] rounded-md text-[#1fff9e]"
                  content={socialLinks.email.platform}
                  animate={{
                    mount: { scale: 1, x: 0 },
                    unmount: { scale: 0, x: 25 },
                  }}
                >
                  <a class="text-sm text-gray-500 transition hover:text-[#1fff9e]" target="_blank" rel="noopener noreferrer" href={`mailto:${developerData.email}`}><
                    span class="sr-only">{socialLinks.email.platform}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current  hover:text-[#1fff9e] text-gray-200 h-8 w-8">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </a>
                </Tooltip>
                <Tooltip placement="top" className="bg-gray-900 border-[1px] border-[#1fff9e] rounded-md text-[#1fff9e]"
                  content={socialLinks.github.platform}
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href={developerData.github}>
                    <span class="sr-only">{socialLinks.github.platform}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current text-gray-200 hover:text-[#1fff9e] h-8 w-8">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                    </svg>
                  </a>
                </Tooltip>
                <Tooltip placement="right-start" className="bg-gray-900 border-[1px] border-[#1fff9e] rounded-md text-[#1fff9e]"
                  content={socialLinks.x.platform}
                  animate={{
                    mount: { scale: 1, x: 0 },
                    unmount: { scale: 0, x: -25 },
                  }}
                >
                  <a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href={developerData.twitter}>
                    <span class="sr-only">{socialLinks.x.platform}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current text-gray-200 hover:text-[#1fff9e] h-8 w-8">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                    </svg>
                  </a>
                </Tooltip>
              </div>
            </div>
            <div className="prose text-left xl:text-left lg:text-left md:text-center sm:text-center max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
              {bioParagraphs}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}