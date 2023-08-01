import profileImage from '../../assets/photos/profile.jpg';
function index() {
  return (
    <div className="h-screen  text-white py-8">
        <div className='h-fit flex justify-evenly gap-8 items-center'>
        <img src={profileImage} alt='profile' className='h-96 rounded-full m-4 border-2 hover:border-4'/>
        <div>
            <span className='text-6xl text-bold intro'>
                Hello! <br/>
                I am Sahil Hussain
            </span>
            <p className='text-2xl mt-8 desg'>Web Developer</p>
        </div>
        </div>
    </div>)
  
}

export default index