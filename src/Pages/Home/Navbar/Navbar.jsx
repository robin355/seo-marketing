import { FaFacebook,FaLinkedin } from 'react-icons/fa';
import { PiTwitterLogoThin} from 'react-icons/pi';
const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
       <div className='lg:m-4 flex flex-wrap gap-3'>
       <div className="avatar ">
     <div className="w-20 rounded">
    <img src="https://i.postimg.cc/J7jHNhnS/logo.jpg" />
     </div>
</div>
<div>
<h2 className='text-2xl font-bold hover:text-[#0693e3]'>Jolshiridigital.com</h2>
       <p className='text-gray-400'>A Friendly Digital Marketing Agency.</p>
</div>
       
       </div>
       <div className="flex flex-wrap justify-center items-center gap-4 text-3xl"> 
           <a href="https://www.facebook.com/jolshirifilm/" target="_blank" rel="noopener noreferrer"><FaFacebook></FaFacebook></a>     
       <PiTwitterLogoThin></PiTwitterLogoThin>
      <a href="https://www.linkedin.com/in/jolshiri-digital-marketing-8250a7296/" target="_blank" rel="noopener noreferrer"><FaLinkedin></FaLinkedin></a> 
       </div>
        </div>
    );
};

export default Navbar;