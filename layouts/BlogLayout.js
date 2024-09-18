import Markdown from "markdown-to-jsx";

export default function BlogLayout({ post }) {
  return (
    <div className="pt-[80px] pb-[200px] px-[50px]">
      <div className="py-12 text-center">
        <p style={{ fontSize: "15px", color: "#A8A8A8" }} className="font-[monospace]">{post.data.date}</p>
        <h1 style={{ fontSize: "35px" }} className="font-medium">{post.data.title}</h1>
      </div>
      <br />
      <div className="border-t border-slate-600"></div>
      <article style={{ wordWrap: "break-word", paddingLeft: "80px", paddingRight: "80px" }} className="prose lg:prose-xl pt-10 px-[90px]">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};