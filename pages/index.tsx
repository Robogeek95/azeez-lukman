import * as React from "react";
// import type { MdxListItem } from "types";
// import { getBlogRecommendations } from "../utils/blog.server";
import { AboutSection } from "../components/sections/about-section";
import { BlogSection } from "../components/sections/blog-section";
import { ProjectSection } from "../components/sections/project-section";
import { WorkshopSection } from "../components/sections/workshop-section";
import { HeroSection } from "../components/sections/hero-section";
import { IntroductionSection } from "../components/sections/introduction-section";
import { ProblemSolutionSection } from "../components/sections/problem-solution-section";
import { Spacer } from "../components/spacer";

// export const loader: LoaderFunction = async () => {
//   const blogRecommendations = (await getBlogRecommendations()).slice(0, 3)

//   const data: LoaderData = {blogRecommendations}
//   return json(data)
// }

function IndexRoute({ blogRecommendations }) {
  // const data = useRouteData<LoaderData>();
  return (
    <div>
      <HeroSection />
      <Spacer size="large" />
      <IntroductionSection />
      <Spacer size="large" />
      <BlogSection
        articles={[{}]}
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

export default IndexRoute;
