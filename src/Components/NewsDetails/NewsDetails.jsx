import { useParams } from "react-router-dom";
import Header from "../../Pages/Shared/Header/Header";
import RightSideNav from "../../Pages/Shared/RightSideNav/RightSideNav";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import { FcLeft } from "react-icons/fc";

const NewsDetails = () => {
  const [news, setNews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/news.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok (${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        // Find the news item by _id
        const selectedNews = data.find((newsItem) => newsItem._id === id);
        if (selectedNews) {
          setNews(selectedNews);
        } else {
          console.error(`News with id "${id}" not found`);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!news) {
    return (
      <div>
        <Header></Header>
        <Navbar></Navbar>
        <div>No latest news here...</div>
      </div>
    );
  }

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h1 className="text-xl font-semibold mt-7">Hot News</h1>
          {/* <p>{id}</p> */}
          <div className="border rounded-md my-8">
            <div className="p-5">
              <div className="border-b-2">
                
                <img className="mb-8" src={news.image_url} alt="" />
                <h1 className="text-[#403F3F] text-xl font-bold mb-5">
                  {news.title}
                </h1>
                <p className="text-base font-normal mb-5">{news.details}</p>
                <button className="btn bg-red-600 text-white hover:bg-red-600 hover:text-white mb-2"><FcLeft /><span>All news in this categories</span></button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
