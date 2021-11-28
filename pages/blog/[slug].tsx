import React from "react";
import { Button } from "../../components/button";
import { H1 } from "../../components/typography";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="h-screen flex mt-40 items-center flex-col">
      <H1 className="text-gray-800">Coming soon...</H1>

      <Link href="/">
        <a>
          <Button size="medium" variant="secondary" className="mt-10">
            Go home
          </Button>
        </a>
      </Link>
    </div>
  );
}
