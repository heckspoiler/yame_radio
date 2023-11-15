import styles from './page.module.css';
import 'normalize.css/normalize.css';
import Sidebar from './components/Home/Sidebar/Sidebar';

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
    </main>
  );
}
