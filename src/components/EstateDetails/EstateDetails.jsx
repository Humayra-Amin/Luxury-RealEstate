import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const estate = estates.find(estate => estate.id === idInt);
    console.log(estate);


    return (
        <div>
            <div className="container mx-auto w-10/12 lg:w-4/5 font-roboto">
                <div className="card lg:card-side mt-14 bg-slate-100 font-roboto">
                    <figure><img src={estate.image} alt="Album" className="rounded-t-lg lg:rounded-l-lg border bg-[#1313130D] w-[573px] h-[511px] md:w-[673px] md:h-[511px]" /></figure>
                    <div className="lg:ml-14">
                        <h2 className="card-title lg:text-3xl ml-4 mt-4 md:mt-2 md:ml-4">{estate.estate_title}</h2>
                        <p className="lg:text-[18px] ml-4 mt-4 font-medium md:ml-4">Segment: <span className="font-normal">{estate.segment_name}</span></p>
                        <hr className="mt-4 lg:w-[500px] border-dashed border-2" />
                        <p className="lg:text-[18px] ml-4 mt-4 md:ml-4">{estate.description}</p>
                        <hr className="mt-4 lg:w-[500px] border-dashed border-2" />
                        <p className="lg:text-[18px] ml-4 mt-4 font-medium md:ml-4">Status: <span className="font-normal">{estate.status}</span></p>
                        <div className="mt-4 flex lg:flex-row lg:gap-2 gap-6">
                            <p className="text-[18px] font-semibold ml-4 md:ml-4">Facilities: </p>
                            <ul className="list-disc pl-6">
                                {estate.facilities.map((facility, idx) => (
                                    <li key={idx} className="text-[16px]"> {facility}</li>
                                ))}
                            </ul>
                        </div>

                        <hr className="mt-4 lg:w-[500px] border-dashed border-2" />
                        <p className="lg:text-[16px] mt-4 ml-4 font-semibold md:ml-4">Area: <span className="font-normal">{estate.area}</span></p>
                        <p className="lg:text-[16px] mt-4 ml-4 font-semibold md:ml-4">Location: <span className="font-normal">{estate.location}</span></p>
                        <p className="lg:text-[18px] mt-4 ml-4 font-semibold md:ml-4">Price: <span className="font-normal text-red-500">{estate.price}</span></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;