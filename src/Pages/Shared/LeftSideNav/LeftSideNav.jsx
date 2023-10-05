import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="mt-5">
      <h2 className="text-xl font-semibold text-[#403F3F] mb-5">
        All Categories
      </h2>
      <div>
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`} // Use category.id in the route
            key={category.id}
            className="block mt-2 text-base text-[#706F6F] hover:text-black hover:bg-[#E7E7E7] p-3 text-center rounded-md"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
