
const QZone = () => {
    return (
        <div>
            <div className='p-4'>
        <h2 className="text-xl font-semibold mb-4"> Find Us On</h2>
        <div>
        <Link to='https://www.facebook.com/beastslayerfiend.12/' target='_blank' className='flex rounded-t-lg border p-4'>
        <GrFacebookOption className='mr-2 bg-gray-200 rounded-full text-[#3B599C] text-2xl'></GrFacebookOption>
        Facebook</Link>
        <Link to='https://twitter.com/RatulAnfal' target='_blank' className='flex border p-4'>
        <AiOutlineTwitter className='mr-2 bg-gray-200 rounded-full text-[#58A7DE] text-2xl'></AiOutlineTwitter>
        Twitter</Link>
        <Link to='https://www.instagram.com/anfal_ratul/' className='flex rounded-b-lg border p-4' target='_blank'>
        <AiOutlineInstagram className='mr-2 bg-gray-200 rounded-full text-[#D82D7E] text-2xl'></AiOutlineInstagram>
        Instagram</Link>
        </div>
      </div>
        </div>
    );
};

export default QZone;