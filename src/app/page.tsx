import Container from "@/components/container";
import { Inter } from "next/font/google";
import React from "react";

const Home = () => {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="text-primary min-h-screen p-4 md:p-10">
        <h1 className="text-2xl font-bold tracking-tight md:text-4xl">
          Hello, there!
        </h1>
        <p className="text-secondary max-w-sm pt-4 text-sm md:text-base">
          This is a simple Next.js application using TypeScript and Tailwind
          CSS. It is designed to be a starting point for your projects.
        </p>
      </Container>
    </div>
  );
};

export default Home;
