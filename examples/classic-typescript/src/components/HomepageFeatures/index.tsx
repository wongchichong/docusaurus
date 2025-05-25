// clsx and styles imports will be retained
import clsx from 'clsx';
import styles from './styles.module.css';

// Woby specific types (assuming JSX.Element for node-like types)
import type { JSX } from 'woby';

// SVG Imports - will be adapted to direct component imports
// Example: import UndrawDocusaurusMountain from '@site/static/img/undraw_docusaurus_mountain.svg';
// For now, let's define them with placeholders and then replace.
import UndrawDocusaurusMountain from '@site/static/img/undraw_docusaurus_mountain.svg';
import UndrawDocusaurusTree from '@site/static/img/undraw_docusaurus_tree.svg';
import UndrawDocusaurusReact from '@site/static/img/undraw_docusaurus_react.svg';

type FeatureItem = {
  title: string;
  // Assuming SVGs are imported as components that return JSX.Element
  Svg: () => JSX.Element; 
  description: JSX.Element; // Changed from ReactNode
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: UndrawDocusaurusMountain,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: UndrawDocusaurusTree,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by Woby', // Updated text to reflect Woby
    Svg: UndrawDocusaurusReact, // Using the React logo still, placeholder
    description: (
      <>
        Extend or customize your website layout with Woby. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        {/* Replaced Heading component with standard h3 */}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element { // Changed return type
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {/* Removed key from map, as Woby docs suggest it's not needed for basic array mapping */}
          {FeatureList.map((props) => (
            <Feature {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
