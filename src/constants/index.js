import { Bags, Banner1, Banner2, Furniture, Jewellery, Kitchen, Laptops, Makeup, MenClothing, Mobile } from "../images/imgs"
import { Facebook, Instagram, Twitter } from "../images/svg";

const navLinks = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Kitchen",
        path: 'kitchen-accessories'
    },
    {
        name: "accessories",
        path: 'mobile-accessories'
    },
    {
        name: "laptops",
        path: 'laptops'
    },
    {
        name: "beauty",
        path: "beauty"
    },
    {
        name: "furniture",
        path: "furniture"
    },
]


const mainSliderImgs = [
    {
        name: "banner-1",
        img: Banner1,
        path: "/"
    },
    {
        name: "banner-2",
        img: Banner2,
        path: "/"
    },
]

const Categories = [
    {
        name: "mens shirts",
        img: MenClothing,
        path: 'mens-shirts'
    },
    {
        name: "beauty",
        img: Makeup,
        path: 'beauty'
    },
    {
        name: "Kitchen",
        img: Kitchen,
        path: 'kitchen-accessories'
    },
    {
        name: "accessories",
        img: Mobile,
        path: 'mobile-accessories'
    },
    {
        name: "laptops",
        img: Laptops,
        path: '/laptops'
    },
    {
        name: "furniture",
        img: Furniture,
        path: 'furniture'
    },
    {
        name: "bags",
        img: Bags,
        path: 'womens-bags'
    },
    {
        name: "jewellery",
        img: Jewellery,
        path: 'womens-jewellery'
    },
]

export const footerLinks = [
    {
        title: "Categories",
        links: [
            { name: "men watches", link: "/" },
            { name: "Kitchen", link: "/" },
            { name: "mobile", link: "/" },
            { name: "laptops", link: "/" },
            { name: "beauty", link: "/" },
            { name: "furniture", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@shopcart.com", link: "mailto:customer@shopcart.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];


export const socialMedia = [
    { src: Facebook, alt: "facebook logo" },
    { src: Twitter, alt: "twitter logo" },
    { src: Instagram, alt: "instagram logo" },
];


export {navLinks, mainSliderImgs, Categories}