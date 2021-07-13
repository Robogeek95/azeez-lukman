import * as React from 'react'
import {ArrowIcon} from './icons/arrow-icon'
import {H2} from './typography'
import {Button} from './button'
import Image  from "next/image";

export interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  projectUrl: string
  imageAlt: string
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
      <a
        className="group relative block pb-10 pt-36 px-8 w-full h-full bg-gray-100 dark:bg-gray-800 rounded-lg md:pb-20 md:px-16"
        href={projectUrl}
      >
        <H2>{title}</H2>
        <div className="mt-4 max-w-sm">
          <H2 variant="secondary" as="p">
            {description}
          </H2>
        </div>

        <div className="mt-16">
          <Button>
            <span>Visit Project</span>
            <ArrowIcon direction="top-right" size={24} />
          </Button>
        </div>
      </a>

      <div className="absolute left-16 top-0">
        <Image
          alt={imageAlt}
          className="w-auto h-32 object-cover"
          src={imageUrl}
          width="300px"
          height="300px"
        />
      </div>
    </div>
  )
}

export {ProjectCard}
