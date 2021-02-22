import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [text, setText] = useState('hi');

  const [output, setOutput] = useState('');

  useEffect(() => {
    console.log(text);
    setOutput(text.replaceAll('\\n', '\n'));
  }, [text]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Format Error Message</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>Format annoying error messages</h3>

        <p> Created by @Horn00Justin</p>

        <h3>Enter text with \n's</h3>
        <textarea
          className={styles.enter}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <h3>Result:</h3>
        <textarea readonly className={styles.display} value={output}></textarea>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
