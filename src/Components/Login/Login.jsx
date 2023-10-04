import {FaGoogle} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
  const {signInWithGoogle,signInWithGithub} = useContext(AuthContext);

  const googleSignIn = (socialMedia) => {
    socialMedia()
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.error(error.message);
    });
  }
  const githubSignIn = (socialMedia) => {
    socialMedia()
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.error(error.message);
    });
  }


    return (
        <div>
                  <div className='p-4'>
        <h2 className="text-xl font-semibold"> Login With</h2>
        <button onClick={()=>googleSignIn(signInWithGoogle)} className="btn btn-outline w-full mt-3 mb-2 text-blue-500">
        <FaGoogle></FaGoogle>
        Login With Google</button>
        <button onClick={()=>githubSignIn(signInWithGithub)} className="btn btn-outline w-full">
        <AiFillGithub></AiFillGithub>
        Login With Github</button>
      </div>
        </div>
    );
};

export default Login;