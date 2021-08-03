import { GithubIcon } from "../components/icons/github-icon";
import { TwitterIcon } from "../components/icons/twitter-icon";
import { LinkedInIcon } from "../components/icons/linkedin-icon";
import { GlobeIcon } from "../components/icons/globe-icon";
import { H2, H3, H4, Paragraph } from "../components/typography";
import { Button } from "../components/button";

function ContactPage() {
  return (
    <>
      <div className="container mx-auto pt-12">
        <div className="max-w-4xl flex items-center flex-wrap mx-auto my-32 lg:my-0">
          <div className="w-full lg:w-5/12">
            <img
              src="/al1.jpg"
              className="rounded-none lg:rounded-l-lg rounded-r-none shadow-2xl hidden lg:block"
              alt="azeez lukman"
            />
          </div>

          <div
            id="profile"
            className="w-full lg:w-7/12 rounded-lg lg:rounded-l-none lg:rounded-r-lg shadow-2xl bg-gray-200 opacity-75 mx-6 lg:mx-0 dark:bg-gray-700"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>

              <h1 className="text-3xl font-bold pt-8 lg:pt-0 dark:text-white">
                Contact me
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

              <Paragraph className="pt-4 text-2xl font-bold flex items-center justify-center lg:justify-start dark:text-white">
                Send me a message
              </Paragraph>

              <H4 className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <span className="mr-2">
                  <GlobeIcon />
                </span>
                Lagos, Nigeria
              </H4>
              <Paragraph className="pt-8 text-sm dark:text-gray-200">
                Got a question or something exiting or you just want to say
                hello? I'm glad to meet you too. So go ahead and take a shot!
              </Paragraph>

              <address>
                <div className="pt-12 pb-8">
                  <a href="mailto:azeezlukman95@gmail.com">
                    <Button variant="primary">Drop me a mail</Button>
                  </a>
                </div>
              </address>

              <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                <a
                  className="link"
                  href="https://www.linkedin.com/in/azeez-lukman-b35057146"
                  data-tippy-content="@linkedIn_handle"
                >
                  <LinkedInIcon filled />
                </a>
                <a
                  className="link"
                  href="https://twitter.com/robogeek95"
                  data-tippy-content="@twitter_handle"
                >
                  <TwitterIcon filled />
                </a>
                <a
                  className="link"
                  href="https://github.com/Robogeek95"
                  data-tippy-content="@github_handle"
                >
                  <GithubIcon filled />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
