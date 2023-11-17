import styles from './page.module.css';
import 'normalize.css/normalize.css';
import { HomePage } from './Home/home';
import { LatestFind } from './LatestFind/latestfind';

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
      <LatestFind />
    </main>
  );
}
