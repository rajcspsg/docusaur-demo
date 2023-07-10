import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import Header from "./components/header.js";
import Image from "./components/img";
import scala from "./codeblocks";
import CodeSection from "./components/code.js"

const theme = "dracula";
const language = "scala";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Zipper Overview">

      <Header />
      
      <main>
        <section className={styles.features}>
          <div className="container">
            <p>
              A Zipper is a tool that allows to navigate and modify immutable recursive data structures.
              This implementation is inspired by the  <a href="https://www.st.cs.uni-saarland.de/edu/seminare/2005/advanced-fp/docs/huet-zipper.pdf">original paper by Huet </a>, as well as the <a href="http://argonaut.io/doc/zipper/"> Argonaut’s JSON Zipper</a>.
            </p>
            <p>Consider the following example:</p>
            <div><CodeSection codeString={scala.tree}></CodeSection></div>
          
          <div>
          <Image src="../../static/img/tree.png" />
          </div>
            
            <div><p>Since the tree is immutable, modifying it can be a pain, but it’s easily solved with a Zipper:</p></div>
            <div><CodeSection codeString={scala.modifiedTree}></CodeSection></div>
            
            <div><p>Here’s what the modified tree looks like:</p></div>
            <div><Image src="../../static/img/modified_tree.png"/></div>
            <div><p>If we draw both trees side by side, we’ll see that the unchanged parts are shared:</p></div>
            <div><Image src="../../static/img/both.png"/></div>
            <h2 id="getting-involved">Getting involved</h2>
            <p>We are looking for volunteers in</p>
            
            <p>
              Both coders and non-coders can help out in a variety of ways that
              suit your skills and with varying commitment levels depending on
              how much time you can give.
            </p>
            <p>
              Please{" "}
              <a href="https://codeyourfuture.io/volunteers/">
                contact us to get involved
              </a>
              !
            </p>
            <h2 id="contributing">Contributing</h2>
            <p>
              Please read our{" "}
              <a href="./contributing/overview">Contributing guide</a> to get
              started with how you can contribute to the CodeYourFuture
              Syllabus.
            </p>
            <h2 id="code-of-conduct">Code Of Conduct</h2>
            <p>
              You can find our full{" "}
              <a href="https://codeyourfuture.io/about/code-of-conduct/">
                code of conduct here
              </a>
              .
            </p>
            <h2 id="contributing">Creative Commons Open-Source License</h2>
            <p>
              This work is licensed under a{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">
                Creative Commons Attribution-ShareAlike 4.0 International License
              </a>
              .
            </p>
            <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">
              <img
                src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png"
                alt="Creative Commons Open-Source License"
                width="200px" />
            </a>
          </div>
        </section>
      </main>
    </Layout >
  );
}

export default Home;
