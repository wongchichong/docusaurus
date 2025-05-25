import clsx from 'clsx';
import HomepageFeatures from '../components/HomepageFeatures'; // Adjusted path
import styles from './index.module.css';

// Mock siteConfig as it's no longer available from Docusaurus context
const mockSiteConfig = {
  title: 'My Woby Site',
  tagline: 'Woby sites are cool!',
};

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{mockSiteConfig.title}</h1>
        <p className="hero__subtitle">{mockSiteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/* Replace Docusaurus Link with a standard anchor or Woby link component */}
          <a
            className="button button--secondary button--lg"
            href="/docs/intro"> {/* Placeholder link */}
            Woby Tutorial - 5min ⏱️
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  // Layout component is removed; directly return page structure
  // The <title> and <meta name="description"> that Layout handled would
  // need to be managed by Woby's equivalent or a Head component.
  return (
    <>
      {/* Woby equivalent of <Head><title>...</title></Head> would go here if needed */}
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </>
  );
}
