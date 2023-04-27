import styles from './page.module.css';
import text from './texts';

export default function Home() {
  return (
    <main className="ms-5 text-center">
      <div>
        <h2>{text.mainPage.welcome}</h2>
      </div>
      <p className="fs-4">{text.mainPage.purpose}</p>
    </main>
  );
}
