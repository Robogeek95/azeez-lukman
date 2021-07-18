import * as React from "react";
import { H2 } from "../typography";
import { ArrowButton } from "../arrow-button";
import { Grid } from "../grid";
import { ProjectCard } from "../project-card";

function ProjectSection() {
  return (
    <Grid>
      <div className="flex flex-col col-span-full mb-20 space-y-10 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <div className="space-y-2 lg:space-y-0">
          <H2>Have a look at some of my projects.</H2>
          <H2 variant="secondary" as="p">
            These are some of my world class projects
          </H2>
        </div>

        <ArrowButton href="/projects</div>" direction="right">
          See all my projects
        </ArrowButton>
      </div>

      {/* Todo: replace image url */}
      <div className="col-span-full lg:col-span-6">
        <ProjectCard
          title="Walletsxchange"
          description="www.walletsxchange.com"
          imageUrl="/walletsxchange.png"
          imageAlt="walletsxchnge logo"
          projectUrl="https://walletsxchange.com/"
        />
      </div>

      {/* Todo: replace image url */}
      <div className="col-span-full mt-12 lg:col-span-6 lg:mt-0">
        <ProjectCard
          title="MaterialPal"
          description="www.materialpal.vercel.app"
          imageUrl="/materialpal.png"
          imageAlt="materialpal logo"
          projectUrl="https://materialpal.vercel.app/"
        />
      </div>
    </Grid>
  );
}

export { ProjectSection };
