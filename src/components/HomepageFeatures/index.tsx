import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '美好的泛用系统',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        命运（Fate）是美好的、可高度客制、无限风格适应性、适用于所有想好好说故事的团的游戏系统。
      </>
    ),
  },
  {
    title: '由 Docusaurus 建立',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus 提供了优秀的文件检视模式与排版，方便在任何界面下阅读。
      </>
    ),
  },
  {
    title: '欢迎找我讨论',
    Svg: require('@site/static/img/undraw_around_the_world.svg').default,
    description: (
      <>
        欢迎找我一起讨论命运的规则，或是回报网站的错误与臭虫，<a href='https://www.plurk.com/wayne930242' target='_blank'>洪伟的噗浪</a>、<a href='https://wayneh.tw/' target='_blank'>部落格</a>。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
