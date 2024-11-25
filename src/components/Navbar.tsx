"use client";
import React, { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/app/lib/utils";
import Link from "next/link";

function navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <div className="flex flex-row space-x-4 text-sm">
          <MenuItem setActive={setActive} active={active} item="Home">
            test
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/courses">All courses</HoveredLink>
              <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
              <HoveredLink href="/courses">Advanced Composition</HoveredLink>
              <HoveredLink href="/courses">Songwriting</HoveredLink>
              <HoveredLink href="/courses">Music Production</HoveredLink>
            </div>
          </MenuItem>
          <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
          </MenuItem>
          </Link>
          </div>
        </Link>
      </Menu>
    </div>
  );
}

export default navbar;
