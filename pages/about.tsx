import { Grid } from "../components/grid";
import { Spacer } from "../components/spacer";
import { H3, H4, Paragraph } from "../components/typography";

function About() {
  return (
    <>
      <div className="bg-yellow-700 text-white">
        <div className="container mx-auto py-12">
          <h2 className="text-3xl">About Me</h2>
        </div>
      </div>

      <Spacer size="smaller" />

      <div className="container  mx-auto px-32">
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

            <div className="mt-8">
              <H3 className="font-bold text-2xl mb-4">Links</H3>
              <ul>
                <li className="dark:text-gray-200  my-3">GitHub</li>
                <li className="dark:text-gray-200  my-3">Telegram</li>
                <li className="dark:text-gray-200  my-3">
                  Email — hello@miloslav.website
                </li>
                <li className="dark:text-gray-200  my-3">CV</li>
              </ul>
            </div>

            <div className="mt-8">
              <H3 className="font-bold text-2xl mb-4">
                Experience and Timeline
              </H3>

              <ul>
                <H4 className="text-xl font-semibold mb-4"> Newbie 👶</H4>

                <li className="dark:text-gray-200  my-3">
                  Got my first PC, it had a Pentium I 100mHz and 8mb RAM. Had a
                  good time playing retro games
                </li>
                <li className="dark:text-gray-200  my-3">
                  Started learning Pascal
                </li>
                <li className="dark:text-gray-200  my-3">
                  Left Pascal club for ITMO coding club
                </li>
                <li className="dark:text-gray-200  my-3">Started learning C</li>
                <li className="dark:text-gray-200  my-3">
                  Started learning C++
                </li>
                <li className="dark:text-gray-200  my-3">Switched to Linux</li>
                <li className="dark:text-gray-200  my-3">
                  Passed school IT exams with highest result possible
                </li>
                <li className="dark:text-gray-200  my-3">
                  Left school after 9th grade for ITMO, successfully enrolled
                </li>
                <li className="dark:text-gray-200  my-3">
                  Got my first laptop
                </li>
                <li className="dark:text-gray-200  my-3">
                  Got Stat2.1x: Introduction to Statistics: Descriptive
                  Statistics and Stat2.2x: Introduction to Statistics:
                  Probability certificates from Berkeley University
                </li>
                <li className="dark:text-gray-200  my-3">
                  Started learning Python
                </li>
                <li className="dark:text-gray-200  my-3">Learned Git</li>
                <li className="dark:text-gray-200  my-3">
                  Created a fully-functional programmable computer from logic
                  gates in LabView. It's got its own assembly language
                </li>
                <li className="dark:text-gray-200  my-3">
                  Got Interactive Python certificate from Rice University
                </li>
                <li className="dark:text-gray-200  my-3">
                  Implemented Game of Life in Python, got interested in cellular
                  automata
                </li>
                <li className="dark:text-gray-200  my-3">
                  Had a great time learning CS, Discrete Math, algorithms,
                  databases, paradigms and a lot of other things
                </li>
                <li className="dark:text-gray-200  my-3">
                  Got LFS101x: Introduction to Linux certificate from Linux
                  Foundation
                </li>
                <li className="dark:text-gray-200  my-3">
                  Got DEV210x: Introduction to C++ certificate from Microsoft
                </li>
                <li className="dark:text-gray-200  my-3">
                  Completed the King Challenge in C++, got 100%
                </li>
              </ul>

              <ul className="mt-6">
                <H4 className="text-xl mb-4 font-semibold">
                  Began to understand stuff 🤔
                </H4>
                <li className="dark:text-gray-200  my-3">
                  Got UML, SQL and Relational Algebra certificates from Stanford
                  University
                </li>
                <li className="dark:text-gray-200  my-3">
                  Learned ActionScript, created Bold Stepper
                </li>
                <li className="dark:text-gray-200  my-3">
                  Learned LaTex and MathLab
                </li>
                <li className="dark:text-gray-200  my-3">
                  Learned Scrum, Agile and more of UML
                </li>
                <li className="dark:text-gray-200  my-3">Learned Subversion</li>
                <li className="dark:text-gray-200  my-3">
                  Got T002x: Mobile Computing and CS Principles certificate from
                  Trinity College
                </li>
                <li className="dark:text-gray-200  my-3">Hired by Apiona</li>
                <li className="dark:text-gray-200  my-3">Learned PHP</li>
                <li className="dark:text-gray-200  my-3">
                  Visited my first local meetup ever, SPB Frontend
                </li>
                <li className="dark:text-gray-200  my-3">
                  Read The Code Complete
                </li>
                <li className="dark:text-gray-200  my-3">
                  Started to learn from Hexlet, never missed a podcast
                </li>
                <li className="dark:text-gray-200  my-3">
                  Successfully passed HTML Academy intensive course, learned
                  frontend basics
                </li>
                <li className="dark:text-gray-200  my-3">
                  Created js-battle, my first JS project ever
                </li>
                <li className="dark:text-gray-200  my-3">
                  Created Pics, learned NodeJS basics
                </li>
              </ul>

              <ul className="mt-6">
                <H3 className="text-xl mb-4 font-semibold">
                  Switched from coding to engineering 🧠
                </H3>
                <li className="dark:text-gray-200  my-3">
                  Started to get certificates at SoloLearn
                </li>
                <li className="dark:text-gray-200  my-3">
                  First public talk at Web Standards Days, it was successful
                </li>
                <li className="dark:text-gray-200  my-3">
                  Left Apiona for Under Construction
                </li>
                <li className="dark:text-gray-200  my-3">
                  Learned React and Redux
                </li>
                <li className="dark:text-gray-200  my-3">
                  Successfully passed React Intensive course by javascript.ru
                </li>
              </ul>

              <ul className="mt-6">
                <H3 className="text-xl mb-4 font-semibold">
                  Complete switch to web technologies ⚡
                </H3>
                <li className="dark:text-gray-200  my-3">
                  Did some research on CRDT
                </li>
                <li className="dark:text-gray-200  my-3">
                  Got Cybersecurity certificate from University of Maryland
                </li>
                <li className="dark:text-gray-200  my-3">
                  Wrote some essays on cybersecurity
                </li>
                <li className="dark:text-gray-200  my-3">
                  Joined FreeCodeCamp community
                </li>
                <li className="dark:text-gray-200  my-3">
                  Was invited to talk at RIT conference at Skolkovo, Moscow.
                  Denied that because of my graduation
                </li>
                <li className="dark:text-gray-200  my-3">
                  Created Dolphin and graduated with A mark. Learned a lot about
                  persistency, fundamental paradigms incompatibility and
                  performance on the web, data models and data binding
                </li>
                <li className="dark:text-gray-200  my-3">
                  Tried to create Kardinal (now dead), faced another fundamental
                  incompatibilities. Learned a lot about paradigms
                </li>
                <li className="dark:text-gray-200  my-3">
                  DWYL invites me to join. Accepted them
                </li>
                <li className="dark:text-gray-200  my-3">
                  Netology offers me an expert position. Denied them
                </li>
                <li className="dark:text-gray-200  my-3">Talked at PiterCSS</li>
                <li className="dark:text-gray-200  my-3">
                  Passed Sit the Test
                </li>
                <li className="dark:text-gray-200  my-3">
                  Veniamin Vekk mentioned me at his design block
                </li>
                <li className="dark:text-gray-200  my-3">
                  Created large Baumeister manual, Russian
                </li>
                <li className="dark:text-gray-200  my-3">
                  Learned a lot from DESTROY­ALL­SOFTWARE. Love it
                </li>
                <li className="dark:text-gray-200  my-3">
                  Scored the highest possible result (C2) in IELTS test
                </li>
                <li className="dark:text-gray-200  my-3">
                  Left Under Construction, hired by Bizon Insurance Group
                </li>
                <li className="dark:text-gray-200  my-3">
                  Learned Clojure and ClojureScript
                </li>
                <li className="dark:text-gray-200  my-3">
                  Learned CouchDB, PouchDB, Docker and Ansible
                </li>
              </ul>

              <ul className="mt-6">
                <H3 className="text-xl mb-4 font-semibold">
                  Able to implement almost any web product 👽
                </H3>
                <li className="dark:text-gray-200  my-3">
                  Created a dockerfile that got 100k+ pulls
                </li>
                <li className="dark:text-gray-200  my-3">
                  Left Bizon Insurance Group. Learned a lot. The most valuable
                  experience of my carreer
                </li>
                <li className="dark:text-gray-200  my-3">
                  Got myself a shiny new MacBook 12", my first Apple computer
                  ever
                </li>
                <li className="dark:text-gray-200  my-3">
                  Created SeoBlock from the idea of Serge Soloview. My first
                  browser extension ever
                </li>
                <li className="dark:text-gray-200  my-3">
                  Got familiar with Strapi, absolutely awesome tool
                </li>
                <li className="dark:text-gray-200  my-3">Met Martyn</li>
                <li className="dark:text-gray-200  my-3">
                  Talked at PiterCSS (eight-pixel grid)
                </li>
                <li className="dark:text-gray-200  my-3">Met Sveta</li>
                <li className="dark:text-gray-200  my-3">
                  Got LinkedIn profile
                </li>
                <li className="dark:text-gray-200  my-3">
                  Started a dev.to profile and got my first 250 followers in no
                  time
                </li>
                <li className="dark:text-gray-200  my-3">
                  Wrote an article about PWA Responsiveness
                </li>
                <li className="dark:text-gray-200  my-3">
                  Created a Decider pattern and library. The biggest GitHub
                  stars I ever got
                </li>
                <li className="dark:text-gray-200  my-3">
                  Launched Rhittm — an app that suggests you Instagram hashtags
                  and the best time to post. I spent only one day creating it
                  and it blasted up to 128 users in just the day after, even
                  without an official ProductHunt release
                </li>
                <li className="dark:text-gray-200  my-3">
                  Wrote a PWA Checklist article. Two thousand views in two days
                </li>
                <li className="dark:text-gray-200  my-3">
                  My article on scalable architecture blasted off like Falcon
                  Heavy and I made it to the dev.to main page. Amazing
                  experience. Got 500 followers
                </li>
                <li className="dark:text-gray-200  my-3">
                  Got 1500 followers on dev.to
                </li>
                <li className="dark:text-gray-200  my-3">
                  Wrote a love letter to Verdana
                </li>
                <li className="dark:text-gray-200  my-3">
                  Created The Code of Conduct generator. Got the Product of the
                  Day award with basically a six lines of javascript
                </li>
                <li className="dark:text-gray-200  my-3">
                  Passed 2000 followers on dev.to
                </li>
                <li className="dark:text-gray-200  my-3">
                  The beta version of Noo, my password manager, is live
                </li>
                <li className="dark:text-gray-200  my-3">
                  Talked at WebDevSummit, everyone was amazed, got some
                  testimonials
                </li>
                <li className="dark:text-gray-200  my-3">
                  Joined Ostrovok as a teamlead, moved to Moscow
                </li>
                <li className="dark:text-gray-200  my-3">
                  Started to cure depression
                </li>
                <li className="dark:text-gray-200  my-3">
                  Left Ostrovok, moved back to Saint-Petersburg
                </li>
                <li className="dark:text-gray-200  my-3">Released sleeep</li>
                <li className="dark:text-gray-200  my-3">Joined Openland</li>
                <li className="dark:text-gray-200  my-3">
                  Sleeep is nominated for the Golden Kitty award
                </li>
                <li className="dark:text-gray-200  my-3">
                  Left Openland for Studybay
                </li>
                <li className="dark:text-gray-200  my-3">Created Aniro</li>
                <li className="dark:text-gray-200  my-3">Created Normilio</li>
                <li className="dark:text-gray-200  my-3">
                  Gave an interview about my failed startup
                </li>
                <li className="dark:text-gray-200  my-3">Created Modulus</li>
                <li className="dark:text-gray-200  my-3">Created Formie</li>
                <li className="dark:text-gray-200  my-3">
                  Created PWAGYM and pwacss
                </li>
                <li className="dark:text-gray-200  my-3">
                  Introduced Pragmatic Beauty
                </li>
                <li className="dark:text-gray-200  my-3">Created Extensio</li>
                <li className="dark:text-gray-200  my-3">
                  Launched my own newsletter (now closed)
                </li>
                <li className="dark:text-gray-200  my-3">
                  Created a Telegram stickerpack
                </li>
                <li className="dark:text-gray-200  my-3">
                  Switched to Firefox and DuckDuckGo
                </li>
                <li className="dark:text-gray-200  my-3">
                  Created Cosmopolite
                </li>
                <li className="dark:text-gray-200  my-3">Created Regulatio</li>
                <li className="dark:text-gray-200  my-3">Created Potion</li>
                <li className="dark:text-gray-200  my-3">Created image-zoom</li>
                <li className="dark:text-gray-200  my-3">Created Butter</li>
                <li className="dark:text-gray-200  my-3">
                  Became a dev.to moderator
                </li>
                <li className="dark:text-gray-200  my-3">Left Studybay</li>
                <li className="dark:text-gray-200  my-3">
                  Created a Hashnode blog and a Medium page
                </li>
                <li className="dark:text-gray-200  my-3">
                  Created Buy Me a Coffee page
                </li>
                <li className="dark:text-gray-200  my-3">
                  Created an NPM page
                </li>
                <li className="dark:text-gray-200  my-3">
                  Made it to Top 50 of Hashnode, became an ambassador
                </li>
                <li className="dark:text-gray-200  my-3">
                  My article published in China by InfoQ
                </li>
                <li className="dark:text-gray-200  my-3">
                  Uploadcare reaches me out to offer me to make Pixelhunter, my
                  very first paid project where I can fully retain my product
                  vision
                </li>
                <li className="dark:text-gray-200  my-3">
                  My Dockerfile alpine-curl-bash makes it to 500.000+ pulls
                </li>
                <li className="dark:text-gray-200  my-3">
                  Deleted my Medium page
                </li>
                <li className="dark:text-gray-200  my-3">
                  Pixelhunter gets crazy traffic and makes it to Product of the
                  Day #3 and to the Product Hunt newsletter
                </li>
                <li className="dark:text-gray-200  my-3">
                  Started learning product marketing
                </li>
                <li className="dark:text-gray-200  my-3">
                  Left dev.to and Hashnode
                </li>
                <li className="dark:text-gray-200  my-3">
                  Want your product to be here? Let me know:
                  hello@miloslav.website
                </li>
              </ul>
            </div>
          </article>
        </Grid>
      </div>
    </>
  );
}

export default About;
