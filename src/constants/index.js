import { Bags, Banner1, Banner2, Furniture, Jewellery, Kitchen, Laptops, Makeup, MenClothing, Mobile } from "../images/imgs"
import { CartWhite, Facebook, Home, Instagram, SearchWhite, Twitter, UserWhite } from "../images/svg";

const navLinks = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Kitchen",
        path: '/category/kitchen-accessories'
    },
    {
        name: "accessories",
        path: '/category/mobile-accessories'
    },
    {
        name: "laptops",
        path: '/category/laptops'
    },
    {
        name: "beauty",
        path: "/category/beauty"
    },
    {
        name: "furniture",
        path: "/category/furniture"
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
        path: 'laptops'
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
            { name: "men watches", link: "/category/mens-watches" },
            { name: "Kitchen", link: "/category/kitchen-accessories" },
            { name: "mobile", link: "/category/mobile-accessories" },
            { name: "laptops", link: "/category/laptops" },
            { name: "beauty", link: "/category/beauty" },
            { name: "furniture", link: "/category/furniture" },
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


const navigationBar = [
    {
        name: "home",
        icon: Home,
        path: "/"
    },
    {
        name: "cart",
        icon: CartWhite,
        path: "/cart"
    },
    {
        name: "user",
        icon: UserWhite,
        path: "/login"
    },
]


export {navLinks, mainSliderImgs, Categories, navigationBar}