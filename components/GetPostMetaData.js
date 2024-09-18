import fs from "fs";
import matter from "gray-matter";

export default function GetPostMetaData() {
    const postsDirectory = "data/lib/blogPosts/";
    const files = fs.readdirSync(postsDirectory);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`${postsDirectory}/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            slug: fileName.replace(".md", ""),
        }
    });

    return posts;
};