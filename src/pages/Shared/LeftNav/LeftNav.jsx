import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LeftNav() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-2 font-bold ">All Caterogy </h2>
      {categories.map((category) => (
        <Link
          to={`cateories/${category.id}`}
          className="text-orange-600 block text-xl font-semibold p-2 "
          key={category.id}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
