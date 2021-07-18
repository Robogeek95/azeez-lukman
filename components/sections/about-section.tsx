import * as React from "react";
// import {images} from '../../images'
import { H2, Paragraph } from "../typography";
import { ArrowButton } from "../arrow-button";
import { Grid } from "../grid";
import Image from "next/image";

function AboutSection() {
  return (
    <Grid>
      <div className="table col-span-full lg:col-span-6">
        <div className="table-cell align-middle text-center">
          <div className="aspect-h-4 aspect-w-3">
            <img
              className="rounded-lg object-cover"
              alt="me"
              width="100%"
              height="100%"
              src="/al1.jpg"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col col-span-full justify-center space-y-12 lg:col-span-5 lg:col-start-8 lg:mt-0">
        {/* we could use some stickers here */}
        <Image
          className="self-start w-auto h-48"
          alt="some stickers"
          width="100%"
          height="100%"
          src="/me"
        />

        <H2>I&apos;m a world-class software developer.</H2>
        <H2 variant="secondary" as="p">
          passionate about pushing world-class software.
        </H2>

        <Paragraph>
          Vestibulum in cursus est, sit amet rhoncus sapien. Fusce nec quam
          euismod, aliquet nulla at, gravida nunc. Nulla vitae hendrerit velit.
          Duis nisi felis, porta eu convallis sit vulputate non mi. Mauris vel
          pellentesq.
        </Paragraph>

        <ArrowButton direction="right">Learn more about me </ArrowButton>
      </div>
    </Grid>
  );
}

export { AboutSection };
