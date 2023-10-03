import {FaGoogle} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

const Login = () => {
    return (
        <div>
                  <div className='p-4'>
        <h2 className="text-xl font-semibold"> Login With</h2>
        <button className="btn btn-outline w-full mt-3 mb-2 text-blue-500">
        <FaGoogle></FaGoogle>
        Login With Google</button>
        <button className="btn btn-outline w-full">
        <AiFillGithub></AiFillGithub>
        Login With Github</button>
      </div>
        </div>
    );
};

export default Login;