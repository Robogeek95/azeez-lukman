import { Grid } from "../components/grid";
import ContactLinksIcons from "../components/icons/contactLinks-Icons";
import { Spacer } from "../components/spacer";
import Timeline from "../components/timeline";
import { H3, H4, Paragraph } from "../components/typography";

function About() {
  return (
    <>
      <div className="bg-indigo-900 text-white">
        <div className="container mx-auto flex justify-between items-center px-20 py-8">
          <div className="">
            <h2 className="text-3xl">About Me</h2>
          </div>

          <div className="">
            <ContactLinksIcons />
          </div>
        </div>
      </div>

      <Spacer size="smaller" />

      <div className="container  mx-auto">
        <Grid>
          <article className="col-span-12 dark:text-white">
            <div className="mt-8">
              <H3 className="font-bold text-2xl mb-4">
                Hello, I&apos;m Azeez Lukman,
              </H3>

              <p className="text-lg dark:text-gray-200">
                <span className="font-semibold text-xl">I create</span>{" "}
                outlandishly phenomenal experience for the web and beyond. Keen
                on building highly interactive sites with need for speed and
                eyes on visual stability.
                <br />
                I am a frontend architect, curator and a team-lead. I ensure
                standards, high maintainability and good accessibility while
                keeping morale high and development costs low.
                <br />
                I have a computer science background and enjoy designing systems
                from the ground up when needed. When I do so, I strive for
                declarativity and keeping the design simple and approachable. I
                never hesitate to educate the team and to make sure they believe
                in what they do.
                <br /> I make Open Source apps and write essays in my spare
                time.
              </p>
            </div>

            <div className="mt-8">
              <H3 className="font-bold text-2xl mb-4">
                The common themes of all my projects are usually the following:
              </H3>
              <ul>
                <li className="dark:text-gray-200  my-3">
                  Keeping the interface really simple, declarative and magical,
                  allowing as much people as possible to use it;
                </li>
                <li className="dark:text-gray-200  my-3">
                  Metaprogramming, achieving more with fewer tools and smaller
                  boilerplate;
                </li>
                <li className="dark:text-gray-200  my-3">
                  Privacy also keeping it less radical and more approachable for
                  general audience;
                </li>
                <li className="dark:text-gray-200  my-3">
                  Cognitive functions and biases, human-computer interactions;
                </li>
                <li className="dark:text-gray-200  my-3">
                  General concepts between programming and philosophy: balance
                  between declarative and imperative, systems theory, general
                  computer science.
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <H3 className="font-bold text-2xl mb-4">Facts</H3>

              <ul>
                <li className="dark:text-gray-200  my-3">
                  Studybay USA (tech evangelist) and Openland (Frontend
                  developer) alpine-curl-bash — 500,000+ pulls on Dockerhub
                </li>

                <li className="dark:text-gray-200  my-3">
                  The Code of Conduct Generator — Product of the Day Award
                  Sleeep (sleep schedule adjuster & fixer)
                </li>

                <li className="dark:text-gray-200  my-3">
                  Golden Kitty nomination in Health&Fitness
                </li>

                <li className="dark:text-gray-200  my-3">
                  Scalable architecture without magic (and how to build it if
                  you’re not Google)
                </li>

                <li className="dark:text-gray-200  my-3">
                  Got certificates from Microsoft (x1), Maryland (x1), Stanford
                  (x3), Berkeley (x2) and others
                </li>
              </ul>
            </div>

            <Spacer size="small" />

            <div className="mt-8">
              <Timeline />
            </div>
          </article>
        </Grid>
      </div>
    </>
  );
}

export default About;
