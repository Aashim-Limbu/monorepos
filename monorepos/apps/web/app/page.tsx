// import Image from "next/image";
// import { Button } from "@repo/ui/button";
import { Notice }from "@repo/ui/notice"
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
            <Notice/>
		</div>
	);
}
