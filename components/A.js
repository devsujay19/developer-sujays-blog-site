"use client";

import redirection from "./reuseableFunctions/redirection";

export default function A({ href, className, children }) {
    return (
        <>
            <span onClick={() => {
                redirection(href, "_blank");
            }} className={`${className}, cursor-pointer`}>
                {children}
            </span>
        </>
    );
};