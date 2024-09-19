import { Card } from "./components/Skills/SkillCard";
import { Skills } from "./components/Skills/Skills";
import { Recommendations } from "./components/Recommendations/Recommendations";

export default function Page() {
  return (
    <div>
      <Skills />
      <Recommendations />
      {/* <a href="https://www.flaticon.com/free-icons/front-end" title="front end icons">Icons by Flat Icons</a> */}
    </div>
  );
}
