import Editor from "@components/Editor/Editor";
import content1 from "@data/content-1.json"
import styles from "./page.module.css";
import Panel from "@components/Panel/Panel";
import fs from 'fs';
import path from 'path';

export default function Home() {
  const filePath = path.join(process.cwd(), 'src', 'app/vars.css');
  let cssContent = '';

  try {
    cssContent = fs.readFileSync(filePath, 'utf-8'); // Lee el contenido del archivo
  } catch (error) {
    console.error('Error al leer el archivo vars.css:', error.message);
  }

  return (
    <div className={styles.page} >
      <main className={styles.main}>
        <Editor content={content1} />
        <Panel cssContent={cssContent} />
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
