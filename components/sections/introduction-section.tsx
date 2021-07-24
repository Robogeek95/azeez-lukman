import * as React from "react";
import { H2 } from "../typography";
import { ArrowButton } from "../arrow-button";
import { Grid } from "../grid";
import { VideoCard } from "../video-card";
import Image from "next/image";

function IntroductionSection() {
  return (
    <Grid className="items-center">
      <div className="col-span-full lg:col-span-5">
        <img className="w-auto h-auto object-cover rounded" src="/al1.jpg" alt="azeez lukman"/>
      </div>
      <div className="col-span-full mt-12 space-y-12 lg:col-span-5 lg:col-start-7 lg:mt-0">
        <H2>
          {`I'm Azeez Lukman, I’m a hardcore full-stack developer.`}
        </H2>
        <H2 variant="secondary" as="p">
          {`I'm that farmboy who codes, I'm a big lover of pets, exotic ones expecially. When i’m not at my system building softwares you can find me on the farm breeding rabbits.`}
        </H2>
        <ArrowButton href="contact" direction="right">Get in touch with me</ArrowButton>
      </div>
    </Grid>
  );
}

export { IntroductionSection };
