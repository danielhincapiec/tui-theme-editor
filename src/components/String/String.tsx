import types from "@data/types.json";
import styles from "./string.module.css";

const keys = types.type.map((item: Record<string, string>) => Object.keys(item)[0]);

type TypeKeys = typeof keys[number];

interface TypeProps {
	type: TypeKeys;
	children?: React.ReactNode;
}

const String: React.FC<TypeProps> = ({ type, children }) => {
	const item = types.type.find((item) => item.key === type);

	return (
		<>
			{item ? (
				<span className={styles[item.class]}>
					{children}
				</span>
			) : (
				<span>Tipo no encontrado</span>
			)}
		</>
	);
};

export default String;


