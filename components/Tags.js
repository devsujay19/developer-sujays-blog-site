"use client";

import React from 'react';
import tagData from '@/data/utils/tagData.json';

const allTags = Object.entries(tagData); // Get all tag entries

export default function Tags() {
  return (
    <main>
      {allTags.map(([tagName, count], index) => (
        <p
          key={index}
          className="flex cursor-pointer mr-3 text-sm font-semibold uppercase text-[#1fff9e] duration-150 hover:text-green-400 font-[Comfortaa]"
        >
          <span onClick={() => {
            window.open(`/tags/?tag=${tagName}`, "_self");
          }}>
            {tagName}
          </span>
          <span className="ml-[12px] text-gray-50">({count})</span>
        </p>
      ))}
    </main>
  );
}
