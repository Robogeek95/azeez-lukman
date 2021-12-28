import * as React from "react";
import { AboutSection } from "../components/sections/about-section";
import { BlogSection } from "../components/sections/blog-section";
import { ProjectSection } from "../components/sections/project-section";
import { WorkshopSection } from "../components/sections/workshop-section";
import { HeroSection } from "../components/sections/hero-section";
import { IntroductionSection } from "../components/sections/introduction-section";
import { Spacer } from "../components/spacer";
import { Button, ButtonLink } from "../components/button";
import Link from "next/link";
import { Article } from "../type";
import { getAllFilesFrontMatter } from "../utils/mdx";
const MAX_DISPLAY = 5;

type HomeProps = {
  articles: Array<Article>;
};

function Home({ articles }: HomeProps) {
  return (
    <div>
      <HeroSection />
      <Spacer size="large" />
      <IntroductionSection />
      <Spacer size="large" />
      <BlogSection
        articles={articles}
        title="Most popular of my articles."
        description="I document my experience in writing here."
      />
      <Spacer size="large" />
      <ProjectSection />
      <Spacer size="large" />
      <WorkshopSection />
      <Spacer size="large" />
      <AboutSection />
    </div>
  );
}

export async function getStaticProps() {
  const articles = await getAllFilesFrontMatter("blog");

  return { props: { articles } };
}

export default Home;
