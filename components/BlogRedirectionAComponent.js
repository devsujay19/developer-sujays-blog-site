"use client";

import redirection from "./reuseableFunctions/redirection";

export default function BlogPageRedirectionATagComponent({ href, className, children }) {
    return (
        <>
            <span onClick={() => {
                redirection(href, "_self");
            }} className={`${className}, cursor-pointer`}>
                {children}
            </span>
        </>
    );
};