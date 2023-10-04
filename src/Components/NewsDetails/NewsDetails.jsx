import { useParams } from "react-router-dom";
import Header from "../../Pages/Shared/Header/Header";
import RightSideNav from "../../Pages/Shared/RightSideNav/RightSideNav";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const NewsDetails = ({news}) => {

    const {id} = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                <h1 className="text-xl font-semibold mt-7"> Hot News </h1>
                <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;