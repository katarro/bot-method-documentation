import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Python',
    Svg: require('@site/static/img/Python.svg').default,
    description: (
      <>
        Python enables efficient data conversion logic.
      </>
    ),
  },

  {
    title: 'Microsfot Teams',
    Svg: require('@site/static/img/microsoft.svg').default,
    description: (
      <>
        Integrate your bot within the collaborative Teams environment
      </>
    ),
  },
  {
    title: 'Azure',
    Svg: require('@site/static/img/azure.svg').default,
    description: (
      <>
        Host and scale your bot with Azure's cloud capabilities
      </>
    ),
  },
  {
    title: 'Convert API',
    Svg: require('@site/static/img/convertapi.svg').default,
    description: (
      <>
        Leverage API for swift data format transformations
      </>
    ),
  },
  {
    title: 'Bot Framework Emulator',
    Svg: require('@site/static/img/botemulator.svg').default,
    description: (
      <>
        Test your bot for seamless user interactions
      </>
    ),
  },
  {
    title: 'Developer Portal',
    Svg: require('@site/static/img/developer.svg').default,
    description: (
      <>
        Manage and deploy your Teams bot applications
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
