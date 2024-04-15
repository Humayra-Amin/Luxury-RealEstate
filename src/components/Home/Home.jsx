import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Properties from "../Properties/Properties";
import About from "../About/About";

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Properties></Properties>
            <About></About>

            <div>
                <Helmet>
                    <title>LuXeHome | Home</title>
                    <link rel="icon" type="image/jpg" sizes="58x58" href="/src/assets/images/luxicon.jpg" />
                </Helmet>
            </div>

        </div>
    );
};

export default Home;