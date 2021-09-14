import React from "react";
import { ArrowButton } from "../components/arrow-button";
import { Grid, GridLines } from "../components/grid";
import ContactLinksIcons from "../components/icons/contactLinks-Icons";
import { AboutSection } from "../components/sections/about-section";
import { Spacer } from "../components/spacer";
import Timeline from "../components/timeline";
import { H2, H3, H4, Paragraph } from "../components/typography";
import Link from 'next/link';

function About() {
  return (
    <>
      <div className="bg-indigo-900 text-white">
        <div className="mx-60 flex justify-between items-center px-20 py-8">
          <div className="">
            <h2 className="text-3xl">About Me</h2>
          </div>

          <div className="">
            <ContactLinksIcons />
          </div>
        </div>
      </div>

      <Spacer size="smaller" />

      <article className="col-span-12 dark:text-white">
        {/* <GridLines /> */}

        <Grid className="mt-8 grid grid-cols-12 mx-auto justify-between items-center gap-8">
          <div className="col-span-5">
            <img className="rounded-lg" alt="me" src="/al2.jpg" />
          </div>

          <div className="col-span-6 col-start-7 space-y-8">
            <H2 >
              Hello, I&apos;m Azeez Lukman,
            </H2>

            <H2 variant="secondary" as="p">
              I create phenomenal experiences for the web and beyond.
            </H2>

            <Paragraph>
              I am Keen on building highly interactive sites with need for speed
              and eyes on visual stability.
              <br />
              I am a frontend architect, curator and a team-lead. I ensure
              standards, high maintainability and good accessibility while
              keeping morale high and development costs low.
              <br />
              I have a computer science background and enjoy designing
              systems from the ground up when needed. When I do so, I strive
              for declarativity and keeping the design simple and
              approachable. I never hesitate to educate the team and to make
              sure they believe in what they do.
              <br />
              I also give back to the community by contributing to Open Source projects and write articles in my spare
              time.
            </Paragraph>
          </div>
        </Grid>

        <Spacer size="small" />

        <Grid className="mt-8">
          <H3 className="font-bold text-2xl mb-4 text-center col-span-12">
            The common themes guiding all my projects
          </H3>

          <div className="col-span-12 gap-12 mt-10">
            <div className="dark:text-gray-200  my-3 p-6 shadow-sm rounded-lg bg-gray-300 dark:bg-gray-800">
              Keeping the interface really simple, declarative and magical,
              allowing as much people as possible to use it
            </div>
            <div className="dark:text-gray-200  my-3  p-6 shadow-sm rounded-lg bg-gray-300 dark:bg-gray-800">
              Metaprogramming, achieving more with fewer tools and smaller
              boilerplate
            </div>
            <div className="dark:text-gray-200  my-3 p-6 shadow-sm rounded-lg bg-gray-300 dark:bg-gray-800">
              Privacy: also keeping it less radical and more approachable for
              general audience
            </div>
            <div className="dark:text-gray-200  my-3 p-6 shadow-sm rounded-lg bg-gray-300 dark:bg-gray-800">
              Cognitive functions and biases, human-computer interactions
            </div>
            <div className="dark:text-gray-200  my-3 p-6 shadow-sm rounded-lg bg-gray-300 dark:bg-gray-800">
              Balance
              between declarative and imperative, systems theory, general
              computer science.
            </div>
            <div className="dark:text-gray-200  my-3 p-6 shadow-sm rounded-lg bg-gray-300 dark:bg-gray-800">
              Balance
              between declarative and imperative, systems theory, general
              computer science.
            </div>
            <div className="dark:text-gray-200  my-3 p-6 shadow-sm rounded-lg bg-gray-300 dark:bg-gray-800">
              Balance
              between declarative and imperative, systems theory, general
              computer science.
            </div>
          </div>
        </Grid>

        <Spacer size="smaller" />

        <AboutSection />

        <Spacer size="smaller" />

        {/* <div className="mt-8">
          <H3 className="font-bold text-2xl mb-4">Some facts about me</H3>

          <ul>
            <li className="dark:text-gray-200  my-3">
              Studybay USA (tech evangelist) and Openland (Frontend
              developer) alpine-curl-bash — 500,000+ pulls on Dockerhub
            </li>

            <li className="dark:text-gray-200  my-3">
              The Code of Conduct Generator — Product of the Day Award
              Sleeep (sleep schedule adjuster & fixer)
            </li>

            <li className="dark:text-gray-200  my-3">
              Golden Kitty nomination in Health&Fitness
            </li>

            <li className="dark:text-gray-200  my-3">
              Scalable architecture without magic (and how to build it if
              you’re not Google)
            </li>

            <li className="dark:text-gray-200  my-3">
              Got certificates from Microsoft (x1), Maryland (x1), Stanford
              (x3), Berkeley (x2) and others
            </li>
          </ul>
        </div> */}

        <Spacer size="small" />

        <Grid className="mt-8">
          <div className="col-span-12">
            <Timeline />
          </div>
        </Grid>

        <Spacer size="smallest" />

        <div className="grid justify-center">
          <Link href="/contact">
            <a>
              <ArrowButton direction="right">Get in touch with me</ArrowButton>
            </a>
          </Link>
        </div>
      </article>
    </>
  );
}

export default About;
