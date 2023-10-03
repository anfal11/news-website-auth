import qzone1 from "../../assets/qZone1.png";
import qzone2 from "../../assets/qZone2.png";
import qzone3 from "../../assets/qZone3.png";
const QZone = () => {
    return (
        <div>
            <div className='p-4 bg-[#F3F3F3] mt-5'>
        <h2 className="text-xl font-semibold mb-4"> Q-Zone</h2>
        <div>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
        </div>
      </div>
        </div>
    );
};

export default QZone;