import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Kuasai Dasar-dasarnya",
    Svg: require("@site/static/img/html-5.svg").default,
    description: (
      <>
        Pelajari HTML, fondasi dari setiap halaman web, dengan tutorial langkah
        demi langkah yang mudah diikuti.
      </>
    ),
  },
  {
    title: "Beri Sentuhan Visual",
    Svg: require("@site/static/img/css-3.svg").default,
    description: (
      <>
        Setelah HTML, perindah desain website Anda menggunakan CSS. Jadikan
        halaman web Anda unik dan menarik.
      </>
    ),
  },
  {
    title: "Kelola Proyek dengan Git",
    Svg: require("@site/static/img/git-icon.svg").default,
    description: (
      <>
        Pelajari cara berkolaborasi dan melacak perubahan kode Anda. Git akan
        mempermudah kerja tim dan menyimpan riwayat proyek.
      </>
    ),
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
