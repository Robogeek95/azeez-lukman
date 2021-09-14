import React from "react";
import { GithubIcon } from "./github-icon";
import { LinkedInIcon } from "./linkedin-icon";
import { TwitterIcon } from "./twitter-icon";

export default function ContactLinksIcons() {
  return (
    <div className="flex dark:text-blueGray-500 text-gray-500 space-x-12">
      <a
        href="https://github.com/Robogeek95"
        data-tippy-content="@github_handle"
      >
        <GithubIcon filled />
      </a>
      <a
        href="https://www.linkedin.com/in/azeez-lukman-b35057146"
        data-tippy-content="@linkedIn_handle"
      >
        <LinkedInIcon filled />
      </a>
      <a
        href="https://twitter.com/robogeek95"
        data-tippy-content="@twitter_handle"
      >
        <TwitterIcon filled />
      </a>
    </div>
  );
}
