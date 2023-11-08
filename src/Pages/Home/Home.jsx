import Banner from "./Banner/Banner";
import Client from "./Client/Client";
import Contract from "./Contract/Contract";
import Digital from "./Digital/Digital";
import Feature from "./Feature/Feature";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Service from "./Service/Service";
import Support from "./Support/Support";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Digital></Digital>
            <Service></Service>
            <Client></Client>
            <Feature></Feature>
            <Contract></Contract>
            <Support></Support>
            <Footer></Footer>
        </div>
    );
};

export default Home;