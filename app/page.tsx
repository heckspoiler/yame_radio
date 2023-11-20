import styles from './page.module.css';
import 'normalize.css/normalize.css';
import { HomePage } from './Home/page';
import { LatestFind } from './latestfind/page';
import { News } from './news/News';
import axios from 'axios';

export default function Home() {
  const response: any = axios
    .get('./server/server.js')
    .then((res) => {
      const data: any = res.data;
      console.log(data);
    })
    .catch((error) => {
      console.error('Error: ', error);
    });
  return (
    <main className={styles.main}>
      <HomePage />
      <LatestFind />
      <News />
      <h1>{response}</h1>
    </main>
  );
}
