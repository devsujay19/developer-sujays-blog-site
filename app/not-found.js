"use client";

import { Button } from "@material-tailwind/react";

export default function NotFound() {
    return (
        <main className="min-h-screen items-center pt-40 justify-center overflow-hidden px-5 pb-[200px] text-center">
            <h1 className="text-[100px] md:text-[100px] sm:text-[50px] font-bold">4🤔4</h1>
            <hr className="bg-white lg:w-[30.5em] sm:w-[20.5rem] mx-auto" />
            <p className="pt-10 pb-4 lg:text-[22px] sm:text-[16px]">Hmmm... You've gone beyond the event horizon. Perhaps you meant to visit a different route?
            <br />
            Take a look in the home page...
            </p>
            <a href="/">
                <Button className="bg-[#1fff9e] py-2 active:bg-[#12f95f] font-extrabold text-[black] font-[cursive]">Take me home!</Button>
            </a>
        </main>
    )
}