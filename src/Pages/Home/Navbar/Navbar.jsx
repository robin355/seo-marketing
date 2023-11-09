import { FaFacebook,FaLinkedin } from 'react-icons/fa';
import { PiTwitterLogoThin} from 'react-icons/pi';
const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
       <div className='lg:m-4'>
<h2 className='text-3xl font-bold hover:text-[#0693e3]'>jolshiridigital.com</h2>
<p className='text-gray-400'>A Friendly SEO, Marketing Agency, and Social Media <br /> Theme</p>
       </div>
       <div className="flex flex-wrap justify-center items-center gap-4 text-3xl"> 
       <FaFacebook></FaFacebook>
       <PiTwitterLogoThin></PiTwitterLogoThin>
       <FaLinkedin></FaLinkedin>
       </div>
        </div>
    );
};

export default Navbar;