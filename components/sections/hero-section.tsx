import * as React from "react";
// import {images} from '../../images'
import { ArrowButton } from "../arrow-button";
import { Grid } from "../grid";
import { H2, H3, Paragraph } from "../typography";
import { Button } from "../button";
import Image from "next/image";
import clsx from "clsx";
import { Tape } from "../tape";

// Note that the image overlaps the right edge of the grid by `8vw`. This `8vw`
// needs to stay in sync with the `10vw` margins of the grid component.
function HeroSection() {
  // The grid has a computed height on the large breakpoint, to make the Hero
  // span the height of the screens, minus 10rem for the navbar (h-40).
  return (
    <Grid className="lg:pb-12 lg:h-hero">
      <div className="relative col-span-full px-4 lg:col-span-6 lg:col-start-7 lg:px-0 lg:h-full">
        <div className="bottom-0 left-0 right-0 top-0 flex bg-gray-700 rounded-lg items-center justify-center pointer-events-none lg:absolute lg:-right-8">
          <Tape direction="top-right" />
          <Tape direction="top-left" />
          <Tape direction="bottom-right" />
          <Tape direction="bottom-left" />
          <Image
            className="w-full h-auto max-h-screen object-contain"
            src="/me"
            alt="azeez lukman"
            height="100%"
            width="100%"
          />
          <div
            className="absolute bottom-2 text-aqua"
            style={{ fontFamily: "cursive" }}
          >
            <Paragraph>Azeez Lukman</Paragraph>
          </div>
        </div>
      </div>

      <div className="col-span-full lg:flex lg:flex-col lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:justify-center lg:h-full">
        <div className="flex flex-auto flex-col justify-center lg:mt-20 py-20">
          <H2 className="text-green-900 mb-3">Hello 🧑</H2>
          <H3 className="text-gray-900 leading-10">
            i help build amazing softwares that makes the world a better and
            safer place. Everyday... Allday
          </H3>
          <div className="flex flex-col mt-14 space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
            <Button variant="primary">Contact me</Button>
            <Button variant="secondary">Read my articles</Button>
          </div>
        </div>
        <div className="hidden pt-12 lg:block">
          <ArrowButton href="" direction="down" textSize="small">
            There&apos;s more about me
          </ArrowButton>
        </div>
      </div>
    </Grid>
  );
}

export { HeroSection };
