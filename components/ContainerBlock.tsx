import { Box, Center, Flex, HStack } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default function ContainerBlock({
  children,
  ...customMeta
}: any): JSX.Element {
  const router = useRouter();

  const meta = {
    title: "Benji Charles - Developer, Engineer, Creator and YouTuber",
    description: `I've been working with data for over 5 years`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <Box>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://benjicharles.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://benjicharles.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@benji-develops" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Box>
        <Navbar />
        <Box>{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
}
