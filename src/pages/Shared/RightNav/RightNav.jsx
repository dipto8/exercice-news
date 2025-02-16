import { BiLogoFacebookSquare } from "react-icons/bi";
import {
  FaGithubSquare,
  FaFacebookF,
  FaInstagramSquare,
  FaGithub,
} from "react-icons/fa";
import swimming from "../../../assets/swimming.png";
import class1 from "../../../assets/class.png";
import playground from "../../../assets/playground.png";

import { Link } from "react-router-dom";

export default function RightNav() {
  return (
    <div className="p-2">
      <h2 className="text-2xl mb-4 font-bold">Login With</h2>
      <button className="btn btn-outline w-full mb-2 ">
        Login with Github
        <FaGithubSquare className="text-xl" />
      </button>
      <button className="btn btn-outline w-full  mb-2 ">
        Login with Facebook
        <BiLogoFacebookSquare className="text-xl" />
      </button>
      <div className=" py-2 my-2 ">
        <h2 className="font-bold mb-2">Find Us om</h2>
        <a className="flex border rounded-t-md p-2 items-center " href="#">
          {" "}
          <FaFacebookF /> <span className="px-2">Facebook</span>
        </a>
        <a className="flex border-x  p-2 items-center " href="#">
          {" "}
          <FaInstagramSquare /> <span className="px-2">Instagram</span>
        </a>
        <a className="flex border rounded-b-md p-2 items-center " href="#">
          {" "}
          <FaGithub /> <span className="px-2">Github</span>
        </a>
      </div>
      <div className="p-2 my-2  space-y-2 mb-4 gap-2">
        <h2 className="font-bold text-xl ">Q-Zone</h2>
        <Link className="">
          {" "}
          <img className="my-4 " src={swimming} alt="" />
        </Link>
        <Link>
          {" "}
          <img className="" src={class1} alt="" />
        </Link>
        <Link>
          {" "}
          <img className="" src={playground} alt="" />
        </Link>
      </div>
    </div>
  );
}
