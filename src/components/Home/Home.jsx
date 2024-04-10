import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Properties from "../Properties/Properties";

const Home = () => {
    return (
        <div>


            <Helmet>
                <title>LuXeHome | Home</title>
                <link rel="icon" type="image/jpg" sizes="58x58" href="/src/assets/images/luxicon.jpg" />
            </Helmet>

            <Banner></Banner>
            <Properties></Properties>
        </div>
    );
};

export default Home;