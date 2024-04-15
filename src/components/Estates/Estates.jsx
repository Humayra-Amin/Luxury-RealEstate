import { Link } from "react-router-dom";

const Estates = ({ estate }) => {
    const { image, estate_title, price, area, location, facilities, id } = estate;
    return (
        <div>
            <div className="card lg:w-96 bg-base-100 border-2">
                <figure className="px-10 pt-10">
                    <img src={image} alt="" className="rounded-xl bg-[#F3F3F3] h-[230px] w-[350px] md:w-[700px] md:h-[300px]" />
                </figure>
                <div className="card-body">
                    <div className="flex flex-col lg:flex-row lg:gap-14 gap-6">
                        <h2 className="font-bold text-xl">{estate_title}</h2>
                    </div>
                    <p className="card-title text-[16px]">Location: <span className="font-normal">{location}</span></p>
                    <p className="lg:text-[16px] font-medium">Area: <span className="font-normal">{area}</span></p>
                    <p className="text-[16px] font-bold">Facilities:</p>
                    <ul className="list-disc pl-6">
                        {facilities.map((facility, idx) => (
                            <li key={idx}>{facility}</li>
                        ))}
                    </ul>
                    <hr className="border-dashed border" />
                    <div className="card-actions">
                        <p className="">Price: <span className="text-red-500 text-xl">{price}</span></p>
                    </div>

                    <Link to={`/estate/${id}`}>
                        <button className="btn btn-primary text-white hover:bg-white hover:text-black hover:border-blue-500">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Estates;