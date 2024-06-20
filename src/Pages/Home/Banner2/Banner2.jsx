import { FaArrowRight } from "react-icons/fa";
import { RiInformation2Line } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import About from "../../About/About";
const Banner2 = () => {
    return (
        <div className="my-32 translate-all duration-500 hover:translate-y-3 hover:scroll-m-3 rounded-t-[100px] bg-orange-50">
            <div className="p-20 ">
                <div className="border rounded-xl  -m-5 p-10">
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="h-64 w-64 p-4 bg-sky-100 rounded-xl">
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
                        <div className="h-64 w-64 p-4 bg-cyan-100 rounded-xl">
                            <div className="flex gap-2 mb-4 justify-center items-center font-bold">
                                <FaUserDoctor />
                                <h1 className="uppercase ">Find A Doctor</h1>
                            </div>
                            <p>View all information of the Doctors and follow Terms & Conditions!</p>
                            <div className="btn btn-sm hover:translate-x-2 flex gap-4 mt-10 justify-start items-center">
                                <FaArrowRight></FaArrowRight>
                                <p>Learn More</p>
                            </div>
                        </div>
                        <div className="h-64 w-64 p-4 bg-violet-100 rounded-xl">
                            <div className="flex gap-2 mb-4 justify-center items-center font-bold">
                                <FaAmbulance />
                                <h1 className="uppercase ">Our Locations</h1>
                            </div>
                            <p>View all information of the Locations and follow Terms & Conditions!</p>
                            <div className="btn btn-sm hover:translate-x-2 flex gap-4 mt-10 justify-start items-center">
                                <FaArrowRight></FaArrowRight>
                                <p>Learn More</p>
                            </div>
                        </div>
                        <div className="h-64 w-64 p-4 bg-rose-100 rounded-xl">
                            <div className="flex gap-2 mb-4 justify-center items-center font-bold">
                                <MdAddIcCall />
                                <h1 className="uppercase ">Contact US</h1>
                            </div>
                            <p>View all information of the Locations and follow Terms & Conditions!</p>
                            <div className="btn btn-sm hover:translate-x-2 flex gap-4 mt-10 justify-start items-center">
                                <FaArrowRight></FaArrowRight>
                                <p>Learn More</p>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
            <About></About>
        </div>
    );
};

export default Banner2;