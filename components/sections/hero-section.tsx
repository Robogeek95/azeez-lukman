import * as React from "react";
// import {images} from '../../images'
import { ArrowButton } from "../arrow-button";
import { Grid } from "../grid";
import { H2, H3, Paragraph } from "../typography";
import { Button } from "../button";
import Image from "next/image";
import clsx from "clsx";
import { Tape } from "../tape";
import Link from "next/link";

// Note that the image overlaps the right edge of the grid by `8vw`. This `8vw`
// needs to stay in sync with the `10vw` margins of the grid component.
function HeroSection() {
  // The grid has a computed height on the large breakpoint, to make the Hero
  // span the height of the screens, minus 10rem for the navbar (h-40).
  return (
    <Grid className=" gap-8">
      <div className="col-span-full lg:col-span-6 lg:col-start-7">
        <div
          className="relative bottom-0 left-0 right-0 top-0 flex w-full h-full bg-gray-700 rounded-lg items-center justify-center pointer-events-none lg:-right-8 p-2"
          style={{
            background: "url('/al2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hidden lg:block">
            <Tape direction="top-right" />
            <Tape direction="top-left" />
            <Tape direction="bottom-right" />
            <Tape direction="bottom-left" />
          </div>
        </div>
      </div>

      <div className="col-span-full lg:flex lg:flex-col lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:justify-center">
        <div className="flex flex-auto flex-col justify-center lg:mt-20 py-20">
          <H2 className="mb-3">Hello,</H2>
          <H3 className="text-gray-900 leading-10">
            I create outlandishly phenomenal experience for the web and beyond.
            ✌️
          </H3>
          <div className="flex flex-col mt-14 space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
            <Button variant="primary">Contact me</Button>
            <Button variant="secondary">Read my articles</Button>
          </div>
        </div>
        <div className="hidden pt-12 lg:block">
          <Link href="#intro">
            <a>
              <ArrowButton direction="down" textSize="small">
                There&apos;s more about me
              </ArrowButton>
            </a>
          </Link>
        </div>
      </div>
    </Grid>
  );
}

export { HeroSection };
