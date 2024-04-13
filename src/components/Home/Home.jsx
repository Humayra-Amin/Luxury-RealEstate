import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Properties from "../Properties/Properties";
import About from "../About/About";

const Home = () => {
    return (
        <div>

            <div>
                <Helmet>
                    <title>LuXeHome | Home</title>
                    <link rel="icon" type="image/jpg" sizes="58x58" href="/src/assets/images/luxicon.jpg" />
                </Helmet>
            </div>

            <Banner></Banner>
            <div>
                <Properties></Properties>
            </div>

            <About></About>
        </div>
    );
};

export default Home;