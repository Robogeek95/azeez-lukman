import * as React from "react";
import { H3, H4 } from "./typography";
import { CopyIcon } from "./icons/copy-icon";
import { Article } from "../type";
import formatDate from "../utils/formatDate";

type ArticleCardProps = {
  article: Article;
};

function ArticleCard({ article }: ArticleCardProps) {
  const { slug, tags, date, image, title, readTime } = article;

  return (
    <a className="group relative w-full" href={`/blog/${slug}`}>
      <button className="absolute z-10 left-4 top-8 p-4 text-black whitespace-nowrap text-lg font-medium bg-white rounded-lg group-hover:opacity-100 transition lg:px-8 lg:py-4 lg:opacity-0">
        <span className="hidden lg:inline">Click to copy url</span>
        <span className="inline lg:hidden">
          <CopyIcon />
        </span>
      </button>

      <div className="aspect-w-3 aspect-h-4 w-full">
        <img alt={title} className="rounded-lg object-cover" src={image} />
      </div>

      {/* tags */}
      <div className="mt-6 flex">
        {tags.map((tag) => (
          <div
            key={tag}
            className="text-white rounded-md bg-gray-800 px-2 py-1 mb-3 mr-3 capitalize"
          >
            {tag}
          </div>
        ))}
      </div>

      <div className="mt-4 group-hover:underline capitalize">
        <H4>{title}</H4>
      </div>

      <div className="mt-2 text-gray-500 text-xl font-medium">
        {/* {formatDate(parseISO(date), 'PPP')} — {readTime?.text ?? 'quick read'} */}
        {formatDate(date)} - {readTime ?? "quick read"}
      </div>
    </a>
  );
}

export { ArticleCard };
