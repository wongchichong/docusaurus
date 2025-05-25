import type { JSX } from 'woby'; // Woby specific type for JSX elements
import clsx from 'clsx';
// Import the Woby version of HomepageFeatures
import HomepageFeatures from '@site/src/components/HomepageFeatures/HomepageFeatures.woby'; 
// Styles will be retained
import styles from './index.module.css';

// Mock siteConfig as specified
const mockSiteConfig = {
  title: 'My Woby Site',
  tagline: 'A site powered by Woby!',
  // Add a dummy description for the <Layout> replacement if needed, or ignore.
  // For this conversion, the Layout's title and description props are removed.
};

function HomepageHeader() {
  // siteConfig is now the mockSiteConfig
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* Replaced Heading component with standard h1 */}
        <h1 className="hero__title">
          {mockSiteConfig.title}
        </h1>
        <p className="hero__subtitle">{mockSiteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/* Replaced Link component with standard a tag */}
          <a
            className="button button--secondary button--lg"
            href="/docs/intro"> {/* Changed 'to' to 'href' */}
            Docusaurus Tutorial - 5min ⏱️
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element { // Changed return type to JSX.Element
  // Removed useDocusaurusContext
  // The Layout component is replaced by directly returning the content.
  // The title and description props that were passed to Layout are no longer used here.
  return (
    <> {/* Or a <div id="woby-app-root"> or similar if a single root is preferred/needed by Woby conventions for a "page" */}
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </>
  );
}
