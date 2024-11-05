import { source } from "@/src/app/source";
import type { Metadata } from "next";
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Features } from "@/src/components/block/features";
import { Step, Steps } from "fumadocs-ui/components/steps";

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      tableOfContent={{
        style: "clerk",
      }}
      tableOfContentPopover={{ style: "clerk" }}
      full={page.data.full}
      editOnGithub={{
        owner: "Leo5661",
        repo: "codegen",
        path: "apps/docs/content/docs",
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            Step,
            Steps,
            Tab,
            Tabs,
            Features,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const { title, description } = page.data;
  const pageSlug = page.file.path;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://codegen-beta.vercel.app/docs/${pageSlug}`,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  } satisfies Metadata;
}
