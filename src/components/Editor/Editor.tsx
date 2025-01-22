import Line from "@components/Line/Line";
import String from "@components/String/String";
import styles from "./editor.module.css"

const Editor = ({ content }) => {
	return (
		<div className={styles.container}>

			{content.lines.map((line, index) => (
				<Line key={index} tab={line.tabs} >

					{line.strings.map((stringInner: string, index: number) => (
						<String type={stringInner.type} key={index}>
							{stringInner.value === "" ? "\u00A0" : stringInner.value}
						</String>
					))}

				</Line>
			))}

		</div>
	);
};

export default Editor;


