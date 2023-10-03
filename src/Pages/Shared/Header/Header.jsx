import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-12'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-lg font-normal text-[#706F6F] mt-5 mb-2'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-[#706F6F]'> {moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;