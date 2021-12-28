import React from "react";
import { Button } from "../../components/button";
import { H1, H3 } from "../../components/typography";
import Link from "next/link";
import { getAllFilesFrontMatter } from "../../utils/mdx";
import { Article } from "../../type";
import { ArticleCard } from "../../components/article-card";
import clsx from "clsx";
import { Grid } from "../../components/grid";

export const ARTICLES_PER_PAGE = 5;

type Pagination = {
  currentPage: number;
  totalPages: number;
};

type BlogProps = {
  articles: Array<Article>;
  pagination: Pagination;
};

export default function Blog({ articles, pagination }: BlogProps) {
  return (
    // <div className="h-screen mt-40 items-center flex">
    <Grid className="mt-20">
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

export async function getStaticProps() {
  const articles: Array<Article> = await getAllFilesFrontMatter("blog");
  const initialDisplayArticles = articles.slice(0, ARTICLES_PER_PAGE);
  const pagination: Pagination = {
    currentPage: 1,
    totalPages: Math.ceil(articles.length / ARTICLES_PER_PAGE),
  };

  return { props: { initialDisplayArticles, articles, pagination } };
}
