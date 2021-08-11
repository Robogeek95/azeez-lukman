import React from "react";
import { GithubIcon } from "./github-icon";
import { LinkedInIcon } from "./linkedin-icon";
import { TwitterIcon } from "./twitter-icon";

export default function ContactLinksIcons() {
  return (
    <div className="flex dark:text-blueGray-500 text-gray-500 space-x-4">
      <a href="#">
        <GithubIcon filled />
      </a>
      <a href="#">
        <LinkedInIcon filled />
      </a>
      <a href="#">
        <TwitterIcon filled />
      </a>
    </div>
  );
}
