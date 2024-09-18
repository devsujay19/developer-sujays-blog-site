import { blogContents } from "./lib/blogContents";
import avatar from "@/data/images/avatar.png";

const copyRightYear = new Date().getFullYear();

export const siteMetaData = {
    name: "Developer Sujay's Blog Site",
    type : "Personal Blog App",
    copyRightName: "Developer Sujay",
    copyRightYear: copyRightYear,
    copyRightNameWrapperURL: "/",
    githubRepository: "https://github.com/devsujay19/developer-sujays-blog-site",
    author: "Sujay Mukherjee",
    developer: "Sujay Mukherjee",
    description: "A Personal Blogging Platform made for writing blogs.",
    techStack : [
        "NextJS 14",
        "Tailwind CSS 3",
    ],
    literalTechStack: [
        "NextJS",
        "Tailwind CSS",
    ],
    siteUrl: "https://developer-sujays-blog-site.vercel.app/",
    favicon: "./images/favicon/favicon.ico",
    logo: "./images/logo.png",
};

export const socialLinks = {
    email: {
        platform: "Email",
        url: "sujay-mukherjee@outlook.com",
    },
    github: {
        platform: "GitHub",
        url: "https://github.com/devsujay19/",
    },
    x: {
        platform: "Twitter",
        url: "https://twitter.com/devsujay19/",
    },
    facebook: {
        platform: "Facebook",
        url: "https://facebook.com/people/Sujay-Mukherjee/100092647425033/",
    },
    instagram: {
        platform: "Instagram",
        url: "https://instagram.com/devsujay19/",
    },
    threads: {
        platform: "Threads",
        url: "https://threads.net/devsujay19/",
    },
    youtube: {
        platform: "YouTube",
        url: "https://youtube.com/@Sujay_Mukherjee/",
    },
    googleDeveloperProfile: {
        platform: "Google Developer Profile",
        url: "https://g.dev/devsujay19/",
    },
};

export const developerData = {
    name: "Sujay Mukherjee",
    nickname: "Sujay",
    avatar: {avatar},
    occupation: "Blockchain & Software Developer",
    aboutPageOnlyOccupation: "Blockchain & Software Developer",
    location: "West Bengal, India",
    email: "sujay-mukherjee@outlook.com",
    github: socialLinks.github.url,
    twitter: socialLinks.x.url,
    googleDeveloperProfile: socialLinks.googleDeveloperProfile.url,
    youtube: socialLinks.youtube.url,
    threads: socialLinks.threads.url,
    instagram: socialLinks.instagram.url,
    facebook: socialLinks.facebook.url,
};

export const developerEmailAddresses = {
    id1: "sujay.mukherjeedev@gmail.com",
    id2: "developer.sujay19@gmail.com",
    id3: "sujay-mukherjee@outlook.com",
};

export const blogData = {
    blogPosts: {
        post1: {
            id: 1,
            title: "React 19 - First Look and Awesome Features",
            summary: "Popular web development library, ReactJS has a major update with some awesome features that'll make it even more faster than ever in the upcoming 19th version. See, what's new feature React is coming with!",
            slug: "react-19-first-look-and-awesome-features",
            writtenOn: "March 29, 2024",
            readingDuration: 3,
            authorName: developerData.name,
            authorAvatar: {avatar},
            tags: ["react-js", "first-look", "javascript", "frontend"]
        },
    },
};