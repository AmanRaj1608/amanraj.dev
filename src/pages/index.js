import React from "react";

import Header from "../components/header";
import Layout from "../components/layout";
import Link from "../components/link";
import Section from "../components/section";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Header />
    <SEO title="Aman Raj" />
    <Section id="about" title="About Me">
      <p>Hi! I'm Aman, a third-year student at IIITV studying Computer Science and Engineering. I spend my day obtaining attendance. 
      I love watching Anime and reading manga in my free time. </p>
      <p>
        I'm a motivated full-stack engineer who has experience building and
        scaling web applications.
      </p>
      <p>
        I'm also passionate about open source contributions.
        I have a solid understanding of Data Structure and Algorithms. I'm good at database design and management.
        Although I'm not too comfortable with the object oriented programming still I can write elegant code using OOPS.
      </p>
    </Section>
    <Section id="experience" title="Certificates">
      <Link
        title="CodeChef Certified Data Structure & Algorithms"
        link="https://www.codechef.com/certificates/public/2965ecd"
        desc="Certificate of Completion of Data Structures and Algorithms"
      />
      <Link
        title="Data Structures and Algorithms"
        link="https://media.geeksforgeeks.org/certificates/1559125131/57309fae448538bdaa3f1a87456a6e0d.pdf"
        desc="Certificate of Completion of Data Structures and Algorithms"
      />
    </Section>
    <Section id="projects" title="Projects">
      <Link
        title="Microservice comment application"
        link="https://github.com/AmanRaj1608/microservice-node"
        desc="Implemented a post application with comment section using monolithic and microservice architecture. Designed microservice architecture with 3 different standalone servers. Application made using ReactJS, NodeJS and deployed on Docker with Kubernetes"
      />
      <Link
        title="Cerebro Web"
        link="https://cerebro2020.iiitvadodara.ac.in/"
        desc="Technical Fest of IIITV. Worked on frontend using ReactJS"
      />
      <Link
        title="An ecommerce app"
        link="https://github.com/AmanRaj1608/dbms-project-2.0"
        desc="An open source ecommerce app with many features. Made using ReactJS, NodeJS, MySQL"
      />
      <Link
        title="Audio Visualizer"
        link="https://github.com/AmanRaj1608/Minimal-Audio-Visualizer"
        desc="A open source and minimal audio visualizer made using HTML canvas and JavaScript"
      />
      <Link
        title="Rock Paper Scissor game"
        link="https://amanraj1608.github.io/awesome-rock-paper-scissor/"
        desc="Rock Paper Scissor game made using HTML/CSS and JavaScript"
      />
    </Section>
    <Section id="skills" title="Skills">
      <Link
        title="Languages & Frameworks"
        desc="JavaScript (ES6+), React, Node.js, Express.js"
      />
      <Link title="Databases" desc="MongoDB, MySQL, PostreSQL" />
      <Link
        title="Other"
        desc=" API design, CI / CD, Docker, Amazon Web Services (AWS), Microservices, Scrum"
      />
    </Section>
  </Layout>
);

export default IndexPage;
