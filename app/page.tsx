import styles from './page.module.css';
import 'normalize.css/normalize.css';
import { HomePage } from './Home/home';
import { LatestFind } from './latestfind/latestfind';
import { News } from './news/News';

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
      <LatestFind />
      <News />
    </main>
  );
}
