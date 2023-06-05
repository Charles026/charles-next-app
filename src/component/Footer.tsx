
import Image from "next/image";
import CatHead from '@/images/cat-head.svg';
import styles from '@/component/Footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.footerWrapper}  w-full mt-16 flex flex-row items-center`}>

            <div className=" container flex flex-row
        px-5 mx-auto border-t h-32 ">

            <Image src={CatHead} sizes="36" alt="Ahdai">
            </Image>

            <div className="flex flex-col">
            <p>
                Built with ❤️ for Ahdai
            </p>
            <p className="text-xs text-gray-500">
                © 2023 Charles
            </p>
            </div>

            </div>
    </footer>  
    )
}

export default Footer;