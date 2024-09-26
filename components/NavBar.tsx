"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavBar.module.css";

export default function NavBar () {
    const pathname = usePathname();

    function isActive(linkpath: string) {
        return pathname === linkpath
    }
    return (
        <nav>
            <div className={styles.left}>
                <Link href="/" data-active={isActive("/")}>Microblog</Link>
                <Link href="/drafts" data-active={isActive("/draft")}>Drafts</Link>
                <Link href="/about" data-active={isActive("/about")}>About</Link>
            </div>
            <div className={styles.right}>
                <Link href="/singup" data-active={isActive("/signup")}>Sign Up</Link>
                <Link href="/create" data-active={isActive("/create")}>Create Post</Link>
            </div>
        </nav>
    )
}