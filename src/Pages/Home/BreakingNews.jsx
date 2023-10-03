import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-6 mt-7">
      <button className="btn bg-[#D72050] text-white hover:bg-[#D72050]">Breaking News</button>
      <Marquee pauseOnHover={true} speed={130}>
        <Link className="mr-12" to='/'>I can be a React component, multiple React components, or just some
        text.....</Link>
        <Link className="mr-12" to='/'>I can be a React component, multiple React components, or just some
        text.....</Link>
        <Link className="mr-12" to='/'>I can be a React component, multiple React components, or just some
        text.....</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
