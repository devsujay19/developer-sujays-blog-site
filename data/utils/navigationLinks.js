import { siteMetaData } from "@/data/constants";

const sourceRepository = siteMetaData.githubRepository;

export const navigationLinks = [
    {
        href: '/blogs',
        title: 'Blogs',
    },
    {
        href: '/tags',
        title: 'Tags',
    },
    {
        href: '/about',
        title: 'About',
    },
    {
        href: sourceRepository,
        title: 'Codebase',
        target: '_blank',
    },
]