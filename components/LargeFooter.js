import { developerEmailAddresses, siteMetaData, socialLinks } from "@/data/constants";
import logo from "@/assets/Logo.png";
import Image from "next/image";
import A from "./A";

export default function LargeFooter() {
    return (
        <section className="py-10 bg-transparent border-b border-slate-600 sm:pt-16 mb-[150px] lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 justify-between lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <A href="/" title={siteMetaData.name}>
                            <Image className="w-auto h-9" src={logo} alt="logo" />
                        </A>
                        <p className="text-base leading-relaxed text-neutral-400 mt-7">{siteMetaData.description}</p>
                    </div>
                    <div>
                        <p className="text-[15px] font-semibold tracking-widest text-gray-400">Useful Links</p>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <A href="/about" className="hover:text-[#1fff9e] duration-150">About</A>
                            </li>
                            <li>
                                <A href="/blogs" className="hover:text-[#1fff9e] duration-150">Blogs</A>
                            </li>
                            <li>
                                <A href="/tags" className="hover:text-[#1fff9e] duration-150">Tags</A>
                            </li>
                            <li>
                                <A href={siteMetaData.githubRepository} className="hover:text-[#1fff9e] duration-150">Source Code</A>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-[15px] font-semibold tracking-widest text-gray-400">Site Related</p>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <A href="/sitemap.xml" className="hover:text-[#1fff9e] duration-150">Sitemap</A>
                            </li>
                            <li>
                                <A href="/robots.txt" className="hover:text-[#1fff9e] duration-150">Robots file</A>
                            </li>
                            <li>
                                <A href="/siteData.js" className="hover:text-[#1fff9e] duration-150">Site Data (JS)</A>
                            </li>
                            <li>
                                <A href="/siteData.json" className="hover:text-[#1fff9e] duration-150">Site Data (JSON)</A>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-[15px] font-semibold tracking-widest text-gray-400">Reach me!</p>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <A href={socialLinks.github.url} className="hover:text-[#1fff9e] duration-150">{socialLinks.github.platform}</A>
                            </li>
                            <li>
                                <A href={socialLinks.threads.url} className="hover:text-[#1fff9e] duration-150">{socialLinks.threads.platform}</A>
                            </li>
                            <li>
                                <A href={socialLinks.x.url} className="hover:text-[#1fff9e] duration-150">{socialLinks.x.platform}</A>
                            </li>
                            <li>
                                <A href={socialLinks.facebook.url} className="hover:text-[#1fff9e] duration-150">{socialLinks.facebook.platform}</A>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-[15px] font-semibold tracking-widest text-gray-400">Network</p>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <A href="https://sujay.now.sh/?ref=https://developer-sujays-blog-site.vercel.app/#footer&&clickThrough=firstOption" className="lg:break-words hover:text-[#1fff9e] duration-150">Sujay's Portfolio</A>
                            </li>
                            <li>
                                <A href="https://developer-sujays-knowledge-base.now.sh/?ref=https://developer-sujays-blog-site.vercel.app/#footer&&clickThrough=firstOption" className="lg:break-words hover:text-[#1fff9e] duration-150">Knowledge base</A>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};