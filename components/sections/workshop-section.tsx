import * as React from "react";
// import {images} from '../../images'
import { H2, H3 } from "../typography";
import { ArrowButton } from "../arrow-button";
import { Grid } from "../grid";
import { DiscordLogo } from "../icons/discord-logo";
import { GlobeIcon } from "../icons/globe-icon";

function WorkshopSection() {
  return (
    <Grid>
      <div className="flex flex-col col-span-full justify-center mt-12 space-y-12 lg:col-span-6 lg:mt-0 lg:py-20">
        <div className="flex items-center text-green-600 gap-3 font-bold text-black mt-6 dark:text-white">
          <GlobeIcon /> <H3 className="text-green-600 ">Remote workshops</H3>
        </div>

        <H2>Workshops are 20mins to 1hr interactive coding sessions</H2>
        <H2 variant="secondary" as="p">
          Time to learn and get better with hands on learning. Join live or
          watch on youtube or both!
        </H2>

        <ArrowButton direction="right">Learn more about workshops</ArrowButton>
      </div>

      <div className="relative hidden lg:block lg:col-span-6">
        <div className="aspect-w-3 aspect-h-4 w-full h-full">
          <img
            className="w-full h-full rounded-lg object-cover"
            src="/workshop.jpg"
          />
        </div>
        {/* <div className="absolute -left-12 -top-6 flex flex-col space-y-1">
          <div className="self-start px-12 py-6 text-blue-500 text-lg bg-blue-100 rounded-full">
            Want to learn react together?
          </div>
          <div className="self-start px-12 py-6 text-blue-500 text-lg bg-blue-100 rounded-full">
            Let me know{' '}
            <span role="img" aria-label="victory hand emoji">
              ✌️
            </span>
          </div>
        </div>

        <div className="absolute -bottom-6 -right-12 flex flex-col text-right space-y-1">
          <div className="self-end px-12 py-6 text-green-500 text-lg bg-green-100 rounded-full">
            Sure thing man, let’s do it!
          </div>
          <div className="self-end px-12 py-6 text-green-500 text-lg bg-green-100 rounded-full">
            Found some cool articles on the blog{' '}
            <span role="img" aria-label="technologist emoji">
              🧑‍💻
            </span>
          </div>
        </div> */}
      </div>
    </Grid>
  );
}

export { WorkshopSection };
