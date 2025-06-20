import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
    {
        title: "Efficient",
        Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
        description: <>内置丰富的物品属性配置，支持模板继承、动态数据和交互触发器</>,
    },
    {
        title: "Powerful",
        Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
        description: <>多脚本语言支持，灵活实现复杂功能</>,
    },
    {
        title: "Expandability",
        Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
        description: <>与常见物品插件如AzureFlow、NeigeItems等良好兼容，易于集成现有系统</>,
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx("col col--4")}>
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
