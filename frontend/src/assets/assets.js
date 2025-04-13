import speedtech_logo from './logo.png';
import turbocharger from './turbocharger.png';
import exhaust_tips from './exhaust_tips.png';
import racing_wheels from './racing_wheels.png';
import coilover_suspension from './coilover_suspension.png';
import performance_air_filter from './performance_air_filter.png';
import sports_steering_wheel from './sports_steering_wheel.png';
import bin_icon from './bin_icon.png';
import cart_icon from './cart_icon.png';
import cross_icon from './cross_icon.png';
import dropdown_icon from './dropdown_icon.png';
import exchange_icon from './exchange_icon.png';
import menu_icon from './menu_icon.png';
import profile_icon from './profile_icon.png';
import quality_icon from './quality_icon.png';
import search_icon from './search_icon.png';
import star_dull_icon from './star_dull_icon.png';
import star_icon from './star_icon.png';
import support_img from './support_img.png';
import hero_img from './hero_img.png';
import stripe_logo from './stripe_logo.png';
import razorpay_logo from './razorpay_logo.png';
import about_img from './about_img.png';
import contact_img from './contact_img.png';



export const assets = {
    logo: speedtech_logo,
    turbocharger,
    exhaust_tips,
    racing_wheels,
    coilover_suspension,
    performance_air_filter,
    sports_steering_wheel,
    bin_icon,
    cart_icon,
    cross_icon,
    dropdown_icon,
    exchange_icon,
    menu_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    support_img,
    hero_img,
    stripe_logo,
    razorpay_logo,
    about_img,
    contact_img
};

export const products = [
    {
        _id: "aaaaa",
        name: "High-Performance Turbocharger",
        description: "Enhances engine power and efficiency.",
        price: 1200,
        image: assets.turbocharger,
        category: "Turbocharger",
        subCategory: "Audi",
        sizes: ['Small','Medium','Big'],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "bbbbb",
        name: "High-Performance Exhaust System",
        description: "Enhances engine power and efficiency.",
        price: 1200,
        image: assets.exhaust_tips,
        category: "Exhaust",
        subCategory: "Bmw",
        sizes: ['One pipe','Two pipes','Four pipes'],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "ccccc",
        name: "Racing Wheels Set",
        description: "Lightweight and durable wheels for high-speed performance.",
        price: 800,
        image: assets.racing_wheels,
        category: "Wheels",
        subCategory: "Audi",
        sizes: ['16','17','18','19','20'],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "ddddd",
        name: "Coilover Suspension System",
        description: "Adjustable suspension system for better handling.",
        price: 950,
        image: assets.coilover_suspension,
        category: "Suspension",
        subCategory: "Honda",
        sizes: ['-10','-15','-20','-30','-40'],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "eeeee",
        name: "Performance Air Filter",
        description: "Increases airflow for better engine performance.",
        price: 150,
        image: assets.performance_air_filter,
        category: "Filter",
        subCategory: "Honda",
        sizes: ['Small','Medium','Big'],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "fffff",
        name: "Sports Steering Wheel",
        description: "Enhances grip and control for a sportier drive.",
        price: 300,
        image: assets.sports_steering_wheel,
        category: "Steering Wheel",
        subCategory: "Bmw",
        sizes: ['Small','Medium','Big'],
        date: 1716634345448,
        bestseller: false
    }
];
