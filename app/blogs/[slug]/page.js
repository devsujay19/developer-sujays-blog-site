import fs from "fs";
import matter from "gray-matter";
import BlogLayout from "@/layouts/BlogLayout";
import GetPostMetaData from "@/components/GetPostMetaData";
import A from "@/components/A";
import { siteMetaData } from "@/data/constants";
import Head from "next/head";

const getPostContent = (slug) => {
    const postsDirectory = "data/lib/blogPosts/";
    const file = `${postsDirectory}/${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = GetPostMetaData();
    return posts.map((post) => ({
        slug: post.slug,
    }))
};

export default function BlogPostPage(props) {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <>
            <Head>
                <title>{post.data.title}</title>
            </Head>
            <main className="pt-[100px] min-h-screen pb-[200px] px-[30px]">
                <BlogLayout post={post} />
                <A href={`${siteMetaData.githubRepository}/data/lib/blogPosts/${slug}`}>
                    <span className="border border-[#1fff9e] px-4 py-3 font-bold rounded-lg hover:bg-[#1fff9e] hover:text-[#020202] transition">Edit in GitHub</span>
                </A>
            </main>
        </>
    );
};