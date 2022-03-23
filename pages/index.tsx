import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ContainerBlock from "../components/ContainerBlock";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <ContainerBlock
      title="Benji Charles - Developer, Engineer, Creator"
      description="Building a website with Next.js and ChakraUI."
    ></ContainerBlock>
  );
};

export default Home;
