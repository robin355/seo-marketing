import { FaFacebook,FaLinkedin } from 'react-icons/fa';
import { PiTwitterLogoThin} from 'react-icons/pi';
const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
       <div>
<h2>robinmahmud@gmail.com</h2>
<p>A Friendly SEO, Marketing Agency, and Social Media <br /> Theme</p>
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