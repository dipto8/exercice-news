import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function BreakingNews() {
  return (
    <div className="flex ">
      <button className="btn btn-outline btn-primary mr-2 btn-sd">
        Breaking News
      </button>
      <Marquee className="space-x-2">
        <Link className="mr-4" to='./'>
     
          Get live updates on the latest local, national, and international
          news, including trusted reporting on politics, health, business,
          sports and more  |
        </Link>
        <Link to='./'>
     
           Winter weather affecting schools, mail and flights
          across eastern Canada · Another 20 to 40 cm of snow could hit parts of
          southern Ontario.
        </Link>
      </Marquee>
    </div>
  );
}
