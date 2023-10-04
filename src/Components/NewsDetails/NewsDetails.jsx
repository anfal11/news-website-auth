import { useParams } from "react-router-dom";
import Header from "../../Pages/Shared/Header/Header";
import RightSideNav from "../../Pages/Shared/RightSideNav/RightSideNav";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const NewsDetails = () => {

    const {id} = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                <h1 className="text-xl font-semibold mt-7"> Hot News </h1>
                <p>{id}</p>
                <p>{title}</p>

             
      <div className="border rounded-md my-8">
        {/* head */}

        <div className="flex justify-between items-center bg-[#F3F3F3] px-4 py-3">
          {/* left */}

          <div className="flex gap-4">
            <img className="rounded-full w-10" src='' alt="" />

          </div>


        </div>

        {/* body */}
        <div className="p-5">
          <div className="border-b-2">
          <h1 className="text-[#403F3F] text-xl font-bold mb-5">
         
          </h1>
          <img className="mb-8"
            src=''
            alt=""
          />
          <p className="text-base font-normal mb-5">

          </p>
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