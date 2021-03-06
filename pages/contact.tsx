import { GithubIcon } from "../components/icons/github-icon";
import { TwitterIcon } from "../components/icons/twitter-icon";
import { LinkedInIcon } from "../components/icons/linkedin-icon";
import { GlobeIcon } from "../components/icons/globe-icon";
import { H2, H3, H4, Paragraph } from "../components/typography";
import { Button } from "../components/button";
import { UserIcon } from "../components/icons/user-icon";

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
            className="w-full lg:w-7/12 rounded-lg lg:rounded-l-none lg:rounded-r-lg shadow-xl bg-gray-100 opacity-75 mx-6 lg:mx-0 dark:bg-gray-700"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>

              <h1 className="text-3xl font-bold pt-8 lg:pt-0 dark:text-white">
                Contact me
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

              <H4 className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <span className="mr-2">
                  <UserIcon />
                </span>
                Azeez Lukman
              </H4>

              <H4 className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <span className="mr-2">
                  <GlobeIcon />
                </span>
                Lagos, Nigeria
              </H4>

              <div className="mt-8">
                <Paragraph className="text-xl font-bold flex items-center justify-center lg:justify-start text-gray-800 dark:text-white">
                  Send me a message?
                </Paragraph>

                <Paragraph className="mt-4 text-sm text-gray-800  dark:text-gray-200">
                  Got a question or something exiting or you just want to say
                  hello? I&apos;m glad to meet you too. So go ahead and take a
                  shot!
                </Paragraph>
              </div>

              <address>
                <div className="pt-12 pb-8 flex">
                  <a href="mailto:azeezlukman95@gmail.com">
                    <Button size="medium" variant="primary">
                      Drop me a mail
                    </Button>
                  </a>

                  <a href="tel:07010856952" className="ml-4">
                    <Button size="medium" variant="secondary">
                      Reach me on phone
                    </Button>
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
