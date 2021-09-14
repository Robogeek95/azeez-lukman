import { ArrowButton } from "../components/arrow-button";
import { Grid } from "../components/grid";
import { ProjectCard } from "../components/project-card";
import { HeroSection } from "../components/sections/hero-section";
import { ProjectSection } from "../components/sections/project-section";
import { Spacer } from "../components/spacer";
import { H2, H6, Paragraph } from "../components/typography";

function Projects() {
  return (
    <>
      <HeroSection
      // imageUrl={images.onewheel()}
      // imageAlt={images.onewheel.alt}
      />

      <Spacer size="small" />

      <Grid as="main" className="mb-48">
        <div className="hidden col-span-full mb-12 lg:block lg:col-span-4 lg:mb-0">
          <H6 as="h2">Lorem ipsum dolor sit amet.</H6>
        </div>
        <div className="col-span-full mb-8 lg:col-span-4 lg:mb-20">
          <H6 as="h3" className="mb-4">
            Lorem ipsum dolor sit amet.
          </H6>
          <Paragraph>
            Praesent eu lacus odio. Pellentesque vitae lectus tortor. Donec elit
            nunc, dictum quis condimentum in, imp erdiet at arcu.
          </Paragraph>
        </div>
        <div className="hidden col-span-2 col-start-11 items-start justify-end lg:flex">
          <ArrowButton direction="down" />
        </div>
      </Grid>

      <h2 className="sr-only">Projects</h2>

      <Grid>
        <div className="flex flex-col col-span-full mb-20 space-y-10 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          <div className="space-y-2 lg:space-y-0">
            <H2>My Projects</H2>
            <H2 variant="secondary" as="p">
              These are some of my world class projects
            </H2>
          </div>
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
    </>
  );
}

export default Projects;
