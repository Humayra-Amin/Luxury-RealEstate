import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Estates from "../Estates/Estates";

const Properties = () => {

    const [property, setProperty] = useState([]);

    useEffect(() => {
        fetch('estate.json')
            .then(res => res.json())
            .then(data => setProperty(data));
    })
    return (
        <div>
            <Helmet>
                <title>LuXeHome | Properties</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/luxicon.jpg" />
            </Helmet>
            <div className="container mx-auto w-10/12 lg:w-4/5">
                <div className="text-center my-16">
                    <h2 className="text-4xl lg:text-4xl font-semibold mt-8 lg:mt-6">Provided Properties</h2>
                </div>
                <div className="card grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {/* card */}
                    {
                        property.map(estate => <Estates key={estate.id} estate={estate}></Estates>)
                    }
                    {/* card end */}
                </div>
            </div>
        </div>
    );
};

export default Properties;