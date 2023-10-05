import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryPosts = () => {
  const { categoryId } = useParams();
  const [categoryPosts, setCategoryPosts] = useState([]);
  const [categoryName, setCategoryName] = useState(""); // State to store the category name

  useEffect(() => {
    // Fetch category names from categories.json
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => {
        const category = data.find((item) => item.id === categoryId);
        if (category) {
          setCategoryName(category.name); // Set the category name based on categoryId
        }
      })
      .catch((error) => {
        console.error("Error fetching category names:", error);
      });

    // Fetch posts based on categoryId and update state
    fetch(`/categories/${categoryId}`)
      .then((res) => res.json())
      .then((data) => setCategoryPosts(data))
      .catch((error) => {
        console.error("Error fetching category posts:", error);
      });
  }, [categoryId]);

  return (
    <div>
      <h2>Category: {categoryName}</h2>
      <ul>
        {categoryPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPosts;
