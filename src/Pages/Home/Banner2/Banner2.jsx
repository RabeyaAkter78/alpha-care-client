import { FaArrowRight } from "react-icons/fa";
import { RiInformation2Line } from "react-icons/ri";
const Banner2 = () => {
    return (
        <div className="my-20 rounded-t-[100px] bg-orange-500">
            <div className="p-10 border flex gap-4 border-red-950">
                <div className="h-64 w-64 p-4 bg-sky-200 rounded-xl">
                    <div className="flex gap-2 mb-4 justify-center items-center font-bold">
                        <RiInformation2Line />
                        <h1 className="uppercase ">Visitor Information</h1>
                    </div>
                    <p>View all information of the visitors and follow Terms & Conditions!</p>
                    <div className="btn btn-sm hover:translate-x-2 flex gap-4 mt-10 justify-start items-center">
                        <FaArrowRight></FaArrowRight>
                        <p>Learn More</p>
                    </div>
                </div>
                <div className="h-64 w-64 p-4 bg-sky-200 rounded-xl">
                    <div className="flex gap-2 mb-4 justify-center items-center font-bold">
                        <RiInformation2Line />
                        <h1 className="uppercase ">Visitor Information</h1>
                    </div>
                    <p>View all information of the visitors and follow Terms & Conditions!</p>
                    <div className="btn btn-sm hover:translate-x-2 flex gap-4 mt-10 justify-start items-center">
                        <FaArrowRight></FaArrowRight>
                        <p>Learn More</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;