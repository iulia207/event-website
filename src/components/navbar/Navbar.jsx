import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion"

const Navbar = () => {
    return(
        <div className="navbar">
            <Sidebar /> 
            <div className="wrapper">
                <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale: 1}} transition={{duration:0.5}}></motion.span>
                <div className="social">
                    <a href="https://www.instagram.com/blue._empire/" target="_blank"><img src="/insta.png" alt="" /></a>
                    <a href="https://www.facebook.com/profile.php?id=61557512696979" target="_blank"><img src="/fb.png" alt="" /></a>
                    <a href="https://www.tiktok.com/@bluempire_cluj" target="_blank"><img src="/tik-tok.png" alt="" /></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;