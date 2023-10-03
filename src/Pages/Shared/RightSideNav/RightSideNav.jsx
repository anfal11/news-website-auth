import FindUs from "../../../Components/FindUs/FindUs";
import Login from "../../../Components/Login/Login";
import QZone from "../../../Components/QZone/QZone";

const RightSideNav = () => {
    return (
        <div className="mt-5">
            <div>
            <Login></Login>
            <FindUs></FindUs>
            <QZone></QZone>
            </div>
        </div>
    );
};

export default RightSideNav;