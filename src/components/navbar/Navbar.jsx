import Links from "./links/Links";
import styles from "./navbar.module.css"
import Link from "next/link";

const Navbar = () => {
    return (
        // git random html name, so it doesn't need to worry a duplocate className
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>MinDev</Link>
            <div>
                <Links/>
            </div>
        </div>
    )
}

export default Navbar;