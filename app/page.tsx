import styles from './page.module.css';
import 'normalize.css/normalize.css';
import { HomePage } from './Home/page';
import { LatestFind } from './latestfind/page';
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
