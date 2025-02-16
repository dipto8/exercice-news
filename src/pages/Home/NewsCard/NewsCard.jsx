import React from "react";
import { Link } from "react-router-dom";

export default function NewsCard({ news }) {
  const { _id,title, image_url, details, author } = news;
  const { name, img, published_date } = author;
  return (
    <div className=" ">
      <div className="card file:selection: bg-base-100 shadow-lg  mb-16 p-6 mx-auto ">
        <div className=" flex gap-2 w-2/5 p-1">
          <img className="rounded-full w-1/5" src={img} alt="" />
          <div className=" block text-xs">
            <p>{name}</p>
            <span className="">{published_date}</span>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        </div>
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        {
          details.length >200 
          ? <p>{details.slice(0,200)} <Link  to={`/news/${_id}`} className="text-orange-300">Read more...</Link></p>
          :
          <p>{details}</p>
        }
       
      </div>
    </div>
  );
}
