import Link from "next/link";
import Image from "next/image";
import CatHead from '@/images/cat-head.svg';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
            <CatHead />
    </footer>  
    )
}

export default Footer;