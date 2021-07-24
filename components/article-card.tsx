import * as React from "react";
import formatDate from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { H3 } from "./typography";
import { CopyIcon } from "./icons/copy-icon";

function ArticleCard({
  readTime,
  slug = "todoBlog",
}) {
  return (
    <a className="group relative w-full" href={`/blog/${slug}`}>
      <button className="absolute z-10 left-4 top-8 p-4 text-black whitespace-nowrap text-lg font-medium bg-white rounded-lg group-hover:opacity-100 transition lg:px-8 lg:py-4 lg:opacity-0">
        <span className="hidden lg:inline">Click to copy url</span>
        <span className="inline lg:hidden">
          <CopyIcon />
        </span>
      </button>

      <div className="aspect-w-3 aspect-h-4 w-full">
        <img
          alt={"bannerAlt"}
          className="rounded-lg object-cover"
          src={"./blog.jpg"}
        />
      </div>

      {/* <div className="mt-8 flex gap-3">
        <div className="text-white rounded bg-green-800 px-2 py-1">react</div>
        <div className="text-white rounded bg-green-800 px-2 py-1">fauna</div>
      </div> */}

      <div className="mt-2 text-gray-500 text-xl font-medium">
        {/* {formatDate(parseISO(date), 'PPP')} — {readTime?.text ?? 'quick read'} */}
        April 15, 2000 - {readTime?.text ?? "quick read"}
      </div>
      <div className="mt-4 group-hover:underline">
        {/* <H3>{title}</H3> */}
        <H3>dummy title</H3>
      </div>
    </a>
  );
}

export { ArticleCard };
