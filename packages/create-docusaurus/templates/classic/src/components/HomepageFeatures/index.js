import clsx from 'clsx';
import styles from './styles.module.css';

// Assuming SVGs will be handled by a bundler that allows direct import as components/URLs
// For a basic JS setup without specific SVG loaders, these might need to be <img> tags or similar.
// For now, let's assume a Woby setup would handle this like the TSX version.
// Note: The paths like '@site/static/img/...' are Docusaurus aliases.
// For a pure Woby app, these would need to be relative paths or handled by Woby's build setup.
// Using placeholder direct paths for now.
import UndrawDocusaurusMountain from '../../../static/img/undraw_docusaurus_mountain.svg';
import UndrawDocusaurusTree from '../../../static/img/undraw_docusaurus_tree.svg';
import UndrawDocusaurusReact from '../../../static/img/undraw_docusaurus_react.svg'; // Will be updated to a Woby logo if available

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: UndrawDocusaurusMountain,
    description: (
      <>
        Woby was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: UndrawDocusaurusTree,
    description: (
      <>
        Woby lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by Woby',
    Svg: UndrawDocusaurusReact, // Placeholder, ideally a Woby logo
    description: (
      <>
        Extend or customize your website layout with Woby. Woby can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* If Svg is a component: <Svg className={styles.featureSvg} role="img" /> */}
        {/* If Svg is a URL string: <img src={Svg} className={styles.featureSvg} alt={title} /> */}
        {/* Assuming component-like import for consistency with planned Woby setup */}
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature {...props} />
            // Removed key={idx} as Woby might not require it for basic lists
          ))}
        </div>
      </div>
    </section>
  );
}
