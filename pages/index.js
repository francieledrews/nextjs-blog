import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello! I'm Fran. A chemistry teacher bitten by the coding bug and
          turning into a web developer ð©ð»âð» | TechLabs DUS alumna | Front-end |
          React | ð´ââï¸ð±â & thrift shops lover
        </p>
        <p>
          (This is a sample website - youâll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
