import Link from "next/link";
import styles from "../styles/A.module.css";
//import styles from "../styles/link.css";

export default function A({ text, href }) {
  return (
    <Link legacyBehavior href={href}>
      <a className={styles.link}>{text}</a>
    </Link>
  );
}
