import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar () {
    return (
        <nav>
            <div className={styles.left}>
                <Link href="/">Microblog</Link>
                <Link href="/drafts">Drafts</Link>
                <Link href="/about">About</Link>
            </div>
            <div className={styles.right}>
                <Link href="/singup">Sign Up</Link>
                <Link href="/create">Create Post</Link>
            </div>
        </nav>
    )
}