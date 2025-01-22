"use client";

import { useState } from 'react';
import styles from "./panel.module.css"

interface TypeProps {
	cssContent: any;
}


const Panel = ({ cssContent }) => {


	// 	`
	// :root {

	// --color-base00: #272a2e;
	// --color-base01: #393f45;
	// --color-base02: #a6fa7d;
	// --color-base03: #5b6268;
	// --color-base04: #c6c8c5;
	// --color-base05: #f1b900;
	// --color-base06: #e3ff0d;
	// --color-base07: #ffffff;

	// }`

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

