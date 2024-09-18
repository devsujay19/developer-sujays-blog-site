export function BlogTitle({ children }) {
    return (
        <>
            <h1 className="text-gray-50 text-2xl sm:text-[40px] pb-4 font-[Impact, fantasy] font-semibold">
                {children}
            </h1>
        </>
    );
}


export function PublishedOnDate({ children }) {
    return (
        <>
            <p className="text-gray-400 pb-2 text-base font-[monospace]">
                {children}
            </p>
        </>
    )
};

export function AuthorName({ children }) {
    return (
        <>
            <p className="text-[16px]">
                {children}
            </p>
        </>
    )
};

export function HorizontalRule({ children }) {
    return (
        <>
            <hr className="w-full" />
        </>
    )
};