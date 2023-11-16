import styles from './page.module.css';
import 'normalize.css/normalize.css';
import Sidebar from './components/Home/Sidebar/Sidebar';
import LowerSection from './components/Home/LowerSection/LowerSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.lowerSideContainer}>
        <Sidebar />
        <LowerSection />
      </div>
    </main>
  );
}
