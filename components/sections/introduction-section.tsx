import * as React from "react";
import { H2 } from "../typography";
import { ArrowButton } from "../arrow-button";
import { Grid } from "../grid";
import { VideoCard } from "../video-card";
import Image from "next/image";

function IntroductionSection() {
  return (
    <Grid>
      <div className="col-span-full lg:col-span-4">
        <Image src="/me2" alt="azeez lukman" height="150px" width="150px" />
      </div>
      <div className="col-span-full mt-12 space-y-12 lg:col-span-5 lg:col-start-7 lg:mt-0">
        <H2>
          {`I'm Azeez Lukman, I’m a passionately driven Software developer.`}
        </H2>
        <H2 variant="secondary" as="p">
          {`I'm that farmboy who codes, I'm a big lover of pets, exotic ones expecially. When i’m not at the building softwares you can find me breeding rabbits.`}
        </H2>
        <ArrowButton href="contact" direction="right">Get in touch with me</ArrowButton>
      </div>
    </Grid>
  );
}

export { IntroductionSection };
