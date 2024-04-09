import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>


            <Helmet>
                <title>LuXeHome | Home</title>
                <link rel="icon" type="image/jpg" sizes="58x58" href="/src/assets/images/luxicon.jpg" />
            </Helmet>

            <Banner></Banner>
        </div>
    );
};

export default Home;