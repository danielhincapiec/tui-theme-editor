import styles from "./line.module.css";

interface TabsProps {
	tab: number;
	children?: React.ReactNode;
}

const Line: React.FC<TabsProps> = ({ tab, children }) => {
	return (
		<div className={styles.line}>
			<div className={styles.wrap}>
				{Array.from({ length: tab }).map((item, index) => <div className={styles.tab} key={index}> </div>)}
			</div>
			<div>
				{children}
			</div>
		</div>
	)
};

export default Line;


