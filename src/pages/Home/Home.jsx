import React, { useState } from "react";
import Header from "../Shared/Header/Header";
import BreakingNews from "./BreakingNews/BreakingNews";
import Navbar from "./Navbar/Navbar";
import LeftNav from "../Shared/LeftNav/LeftNav";
import { Link, useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard/NewsCard";
import RightNav from "../Shared/RightNav/RightNav";

export default function Home({Fnews}) {
  const news = useLoaderData();
  

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className=" grid grid-cols-4">
        <div className="LeftNav ">
          <LeftNav></LeftNav>
        </div>
        <div className="main col-span-2 ">
          {news.map((Anews) => (
            <NewsCard key={Anews._id} news={Anews}></NewsCard>
          ))}
        </div>

        <div className="RightNav grid-cols-1">
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
}
