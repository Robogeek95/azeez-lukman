import React from "react";
import { H3, H4 } from "./typography";

interface content {
  timeframe: string;
  header: string;
  body: Array<string>;
}

const timeline: Array<content> = [
  {
    timeframe: "April 15, 2000 - April 15, 2021",
    header: "Newbie 👶",
    body: [
      "Got my first PC, it had a Pentium I 100mHz and 8mb RAM. Had a good time playing retro games",
      " Started learning Pascal",
      " Left Pascal club for ITMO coding club",
      " Started learning C++",
      " Passed school IT exams with highest result possible",
      " Left school after 9th grade for ITMO, successfully enrolled",
      " Got my first laptop",
      " Started learning Python",
      " Got Interactive Python certificate from Rice University",
      " Got DEV210x: Introduction to C++ certificate from Microsoft",
    ],
  },
  {
    timeframe: "April 15, 2000 - April 15, 2021",
    header: "Began to understand stuff 🤔",
    body: [
      "Got UML, SQL and Relational Algebra certificates from Stanford University",
      "Learned ActionScript, created Bold Stepper",
      "Learned ActionScript, created Bold Stepper",
      "Learned ActionScript, created Bold Stepper",
    ],
  },
  {
    timeframe: "April 15, 2000 - April 15, 2021",
    header: "Switched from coding to engineering 🧠",
    body: [
      "Got UML, SQL and Relational Algebra certificates from Stanford University",
      "Learned ActionScript, created Bold Stepper",
      "Learned ActionScript, created Bold Stepper",
      "Learned ActionScript, created Bold Stepper",
    ],
  },
  {
    timeframe: "April 15, 2000 - April 15, 2021",
    header: "Complete switch to web technologies ⚡",
    body: [
      "Got UML, SQL and Relational Algebra certificates from Stanford University",
      "Learned ActionScript, created Bold Stepper",
      "Learned ActionScript, created Bold Stepper",
      "Learned ActionScript, created Bold Stepper",
    ],
  },
  {
    timeframe: "April 15, 2000 - April 15, 2021",
    header: "Able to implement almost any web product 👽",
    body: [
      "Got UML, SQL and Relational Algebra certificates from Stanford University",
      "Learned ActionScript, created Bold Stepper",
      "Learned ActionScript, created Bold Stepper",
      "Learned ActionScript, created Bold Stepper",
    ],
  },
  {
    timeframe: "April 15, 2000 - April 15, 2021",
    header: "It doesn't end there 👽",
    body: [
      "Got UML, SQL and Relational Algebra certificates from Stanford University",
      "Learned ActionScript, created Bold Stepper",
      "Learned ActionScript, created Bold Stepper",
      "Learned ActionScript, created Bold Stepper",
    ],
  },
];

function TimelineContent({ content }: { content: content }) {
  const { header, timeframe, body } = content;

  return (
    <div key={header} className="mb-8 flex justify-between items-start w-full">
      <div className="order-1 w-4/12 mt-9 pr-8">
        <div className="text-right">
          <p>{timeframe}</p>
        </div>
      </div>

      <div className="z-20 p-2 order-1 bg-gray-300 dark:bg-gray-800 shadow-xl w-8 h-8 rounded-full mt-8">
        <div className="rounded-full w-full h-full bg-red-800"></div>
      </div>

      <div className="pl-8  w-8/12 order-1">
        <div className="bg-gray-300 dark:bg-gray-800 rounded-lg shadow-xl px-6 py-4">
          <ul>
            <H4 className="text-xl font-semibold mb-4">{header}</H4>

            {body.map((body) => (
              <li key={body} className="dark:text-gray-200  my-3">
                {body}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <div className="">
      <div className="w-5/12 mb-20">
        <H3 className="font-bold text-2xl mb-4 text-center">
          Experience and Timeline
        </H3>
      </div>

      <div>
        {timeline.map((content) => (
          <TimelineContent key={content.header} content={content} />
        ))}
      </div>
    </div>
  );
}
