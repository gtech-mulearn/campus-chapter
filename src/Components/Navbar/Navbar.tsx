import logo from "../../assets/images/Logo.svg";
import style from "./Navbar.module.css";
const Navbar = () => {
    return (
        <div className={style.navContainer}>
            <div className={style.logoConatiner}>
                <img className={style.logo} src={logo} alt="Logo" />
                <p className={style.collegeCode}>
                    {import.meta.env.VITE_COLLEGE_CODE}
                </p>
            </div>
            <div className={style.nav}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Our Team</a>
                <a href="">Contact</a>
                <button>Join MuLearn</button>
            </div>
        </div>
    );
};

export default Navbar;
