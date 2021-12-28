import clsx from "clsx";
import * as React from "react";
import { H2, H3 } from "../typography";
import { ArrowButton } from "../arrow-button";
import { Grid } from "../grid";
import { ArticleCard } from "../article-card";
import { Article } from "../../type";

interface BlogSectionProps {
  articles: Array<Article>;
  title: string;
  description: string;
  showArrowButton?: boolean;
}

function BlogSection({
  articles,
  title,
  description,
  showArrowButton,
}: BlogSectionProps) {
  return (
    <Grid>
      <div className="flex flex-col col-span-full mb-20 space-y-10 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <div className="space-y-2 lg:space-y-0">
          <H2>{title}</H2>
          <H2 variant="secondary" as="p">
            {description}
          </H2>
        </div>

        {showArrowButton === false ? null : (
          <ArrowButton href="/blog" direction="right">
            See the full blog
          </ArrowButton>
        )}
      </div>

      {articles && articles.length > 0 ? (
        articles.slice(0, 3).map((article, idx) => (
          <>
            <div
              key={article.slug}
              className={clsx("col-span-4", {
                "hidden lg:block": idx >= 2,
              })}
            >
              <ArticleCard article={article} />
            </div>
          </>
        ))
      ) : (
        <div className="bg-red-600 w-100 col-span-full text-center p-5 mt-5">
          <H3>Oops!.. nothing here, yet!</H3>
        </div>
      )}
    </Grid>
  );
}

export { BlogSection };
