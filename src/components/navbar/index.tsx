"use client";
import React, { useState } from "react";
import Container from "../container";
import Image from "next/image";
import Link from "next/link";
import { motion, number, useMotionValueEvent, useScroll } from "motion/react";

const Navbar = () => {
  const navItems = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("ScrollY", latest);
  });
  return (
    <Container>
      <nav className="flex items-center justify-between py-4">
        <Image
          className="h-10 w-10 rounded-full"
          src="/abhay.jpg"
          height="100"
          width="100"
          alt="Avatar"
        />

        <div className="flex gap-4">
          {navItems.map((item, idx) => (
            <Link
              className="relative px-2 py-1 text-sm"
              href={item.href}
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-10"> {item.title}</span>
            </Link>
          ))}
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
