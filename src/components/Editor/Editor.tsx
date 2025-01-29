import Line from "@components/Line/Line";
import String from "@components/String/String";
import styles from "./editor.module.css"
import { Interface } from "readline";

interface IString {
	type: string,
	value: string
}

interface ILine {
	number: number, tabs: number, strings: IString[]
}

interface ContentProps {
	lines: ILine[];
}

interface EditorProps { content: ContentProps }

const Editor: React.FC<EditorProps> = ({ content }) => {
	return (
		<div className={styles.container}>

			{content.lines.map((line, index) => (
				<Line key={index} tab={line.tabs} >

					{line.strings.map((stringInner: IString, index: number) => (
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


