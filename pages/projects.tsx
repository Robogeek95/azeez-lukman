import { HeroSection } from "../components/sections/hero-section";

function Projects() {
  return (
    <>
      <HeroSection
        title="Building for the next generation."
        subtitle="I help  build softwares that makes the world  better place."
        // imageUrl={images.onewheel()}
        // imageAlt={images.onewheel.alt}
      />

      <Grid as="main" className="mb-48">
        <div className="hidden col-span-full mb-12 lg:block lg:col-span-4 lg:mb-0">
          <H6 as="h2">Reasons to invest in your career.</H6>
        </div>
        <div className="col-span-full mb-8 lg:col-span-4 lg:mb-20">
          <H6 as="h3" className="mb-4">
            Become a more confident developer
          </H6>
          <Paragraph className="mb-20">
            Praesent eu lacus odio. Pellentesque vitae lectus tortor. Donec elit
            nunc, dictum quis condimentum in, impe rdiet at arcu. Donec et nunc
            vel mas sa fringilla fermentum. Donec in orn are est doler sit amet.
          </Paragraph>
          <H6 as="h3" className="mb-4">
            Earn more money as a developer
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

      <h2 className="sr-only">Courses</h2>

      <Grid className="gap-y-4 mb-24 lg:mb-64">
        <div className="col-span-full lg:col-span-6">
          <CourseCard
            title="Epic React"
            description="The most comprehensive guide for pro’s."
            imageUrl={images.courseEpicReact()}
            imageAlt={images.courseEpicReact.alt}
            courseUrl="https://epicreact.dev"
          />
        </div>

        <div className="col-span-full mt-12 lg:col-span-6 lg:mt-0">
          <CourseCard
            title="Testing Javascript"
            description="Learn smart, efficient testing methods."
            imageUrl={images.courseTestingJS()}
            imageAlt={images.courseTestingJS.alt}
            courseUrl="https://testing-library.com"
          />
        </div>
      </Grid>
    </>
  );
}

export default Projects;
