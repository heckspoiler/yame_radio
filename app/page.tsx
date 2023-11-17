import styles from './page.module.css';
import 'normalize.css/normalize.css';
import { HomePage } from './Home/Home';
import { LatestFind } from './LatestFind/LatestFind';

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
      <LatestFind />
    </main>
  );
}
