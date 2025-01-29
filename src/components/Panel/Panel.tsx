"use client";

import { useState } from 'react';
import styles from "./panel.module.css"

interface TypeProps {
	cssContent: any;
}

const Panel = ({ cssContent }) => {

	const [css, setCSS] = useState("");

	const handleCSSChange = (e: any) => {
		setCSS(e.target.innerText);
	};

	return (
		<div className={styles.container}>
			<pre
				contentEditable
				spellCheck="false"
				onInput={handleCSSChange}
				className={styles.field}
			>
				{cssContent}
			</pre>

			<style global>
				{css}
			</style>

		</div>
	);
};

export default Panel;

