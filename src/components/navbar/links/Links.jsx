"use client"

import Image from "next/image";
import { useState} from 'react';
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const Links = () => {

    const [open, setOpen] = useState(false)

    const link = [
        {title: "Home", path:"/"},
        {title: "About", path:"/about"},
        {title: "Contact", path:"/contact"},
        {title: "Blog", path:"/blog"},
    ];


    // temp
    const session = true;
    const isAdmin = false;

    return(
        <div className={styles.container}>
        <div className={styles.links}>
        {link.map(lin => (<NavLink item={lin} key={lin.title} />))}
         {session ? (
            <>
            {isAdmin && <NavLink item={{title: "Admin", path:"/admin"}} />}
            <button className={styles.logout}>Logout</button>
            </>
        ) : (
            <NavLink item={{title: "Login", path: "/login"}} />
        )}
        </div>
        <div className={styles.menuButton} onClick={() => setOpen(!open)}>
            <Image src="/menu.png" alt="menu" width={30} height={30} />
        </div>
        {open && <div className={styles.mobileLinks}>
        {link.map(lin => (
            <NavLink item={lin} key={lin.title} />))}
            </div>}
        </div>
    )
}

export default Links;