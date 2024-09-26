"use client";

import { Skills } from "./components/Skills/Skills";
import { Recommendations } from "./components/Recommendations/Recommendations";
import { Education } from "./components/Education/Education";
import { Experience } from "./components/Experience/Experience";
import { Technologies } from "./components/Skills/Technologies";
import { useLayout } from "./useLayout";

export default function Page() {
  const { tab } = useLayout();

  return (
    <div>
      {tab === 0 && <Skills />}
      {tab === 0 && <Recommendations />}
      {tab === 0 && <Technologies />}
      {tab === 1 && <Experience />}
      {tab === 1 && <Education />}
      {/* <a href="https://www.flaticon.com/free-icons/front-end" title="front end icons">Icons by Flat Icons</a> */}
    </div>
  );
}
