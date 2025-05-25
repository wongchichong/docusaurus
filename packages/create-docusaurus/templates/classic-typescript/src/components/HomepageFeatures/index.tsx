// clsx and styles imports will be retained
import clsx from 'clsx';
import styles from './styles.module.css';

// Woby specific types 
import type { JSX } from 'woby'; 

// SVG Imports 
// Adjusted paths to be relative from this file's location in the template
import UndrawDocusaurusMountain from '../../../../static/img/undraw_docusaurus_mountain.svg';
import UndrawDocusaurusTree from '../../../../static/img/undraw_docusaurus_tree.svg';
import UndrawDocusaurusReact from '../../../../static/img/undraw_docusaurus_react.svg'; 

type FeatureItem = {
  title: string;
  Svg: () => JSX.Element; 
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
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
    Svg: UndrawDocusaurusReact, 
    description: (
      <>
        Extend or customize your website layout with Woby. Woby can
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
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
