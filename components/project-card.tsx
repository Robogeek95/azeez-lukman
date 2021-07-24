import * as React from "react";
import { ArrowIcon } from "./icons/arrow-icon";
import { H2 } from "./typography";
import { Button } from "./button";
import Image from "next/image";
import { ExternalIcon } from "./icons/external-icon";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  imageAlt: string;
}

function ProjectCard({
  title,
  description,
  imageUrl,
  imageAlt,
  projectUrl,
}: ProjectCardProps) {
  return (
    <div className="relative pt-12 w-full h-full">
      <div className="left-16 top-0 -mb-5 sticky z-10">
        <img alt={imageAlt} className="w-full object-cover" src={imageUrl} />
      </div>

      <div className="group relative block pb-10 pt-12 px-8 w-full bg-gray-100 dark:bg-gray-800 rounded-lg md:pb-20 md:px-16">
        <H2>{title}</H2>
        <div className="mt-4 max-w-sm">
          <H2 variant="secondary" className="truncate" as="p">
            {description}
          </H2>
        </div>

        <div className="mt-16">
          <a href={projectUrl}>
            <Button>
              <span>Visit Project</span>
              <ExternalIcon />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export { ProjectCard };
