import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
import { BsShare } from "react-icons/bs";
import ReactStarsRating from 'react-awesome-stars-rating';
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
  const {
    _id,
    title,
    details,
    author,
    total_view,
    rating,
    image_url
  } = news;
  return (
    <div>
    <h1 className="text-xl font-semibold"> Hot News </h1>
      <div className="border rounded-md my-8">
        {/* head */}

        <div className="flex justify-between items-center bg-[#F3F3F3] px-4 py-3">
          {/* left */}

          <div className="flex gap-4">
            <img className="rounded-full w-10" src={author.img} alt="" />

            <div>
              <h1 className="text-base font-semibold"> {author.name}</h1>
              <p className="text-[#706F6F] font-normal text-sm">{author.published_date}</p>
            </div>
          </div>

          {/* right */}

          <div className="flex gap-3">
            <CiBookmark className="text-xl"></CiBookmark>
            <BsShare className="text-xl"></BsShare>
          </div>
        </div>

        {/* body */}
        <div className="p-5">
          <div className="border-b-2">
          <h1 className="text-[#403F3F] text-xl font-bold mb-5">
            {title}
          </h1>
          <img className="mb-8"
            src={image_url}
            alt=""
          />
          <p className="text-base font-normal mb-5">
          {
            details.length > 200 ? <span className="text-[#706F6F]">{details.slice(0, 200)}<Link to={`/news/${_id}`} className="text-[#FF8C47]">...read more</Link></span> : <span className="text-[#706F6F]">{details}</span>
          }
          </p>
          </div>
        </div>

        {/* parent of rating, view */}
<div className="flex justify-between px-4">
    
        {/* rating left*/}
        <div className="flex items-center gap-4">
            <ReactStarsRating
                className="flex my-3"
                value={rating.number}
                isEdit={false}
            />
            <p className="text-[#706F6F] text-base font-medium">{rating.number}</p>
        </div>

        {/* view right*/}
        <div className="flex items-center gap-4">
            <BsEye className="text-xl"></BsEye>
            <p className="text-[#706F6F] text-base font-medium">{total_view}</p>
        </div>
</div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object.isRequired,
};
export default NewsCard;
