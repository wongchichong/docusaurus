import type { JSX } from 'woby'; 
import clsx from 'clsx';
import HomepageFeatures from '../components/HomepageFeatures'; 
import styles from './index.module.css';

const mockSiteConfig = {
  title: 'My Woby Site (TS)',
  tagline: 'A site powered by Woby! - TypeScript Edition',
};

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          {mockSiteConfig.title}
        </h1>
        <p className="hero__subtitle">{mockSiteConfig.tagline}</p>
        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            href="/docs/intro"> 
            Woby Tutorial - 5min ⏱️
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <> 
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </>
  );
}
