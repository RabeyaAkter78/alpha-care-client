import { FaArrowRight } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
const About = () => {
    return (
        <div>
            <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-5 p-8">
                <div>
                    <h3 className="font-semibold text-teal-900 uppercase">About Alpha Care</h3>
                    <h1 className="text-6xl text-teal-900 my-10">We Provide Finnest <span className="font-semibold"> Patient's Care & Amenities</span></h1>
                    <p className="text-xl text-neutral-500">Embrace a world of comprehensive healthcare where your well-being takes center stage. At Meca, we're dedicated to providing you with personalized and compassionate medical services.</p>

                    <div className="flex flex-col md:flex-row gap-4 justify-start my-5 p-4 text-neutral-700 text-xl">
                        <div >
                            <div className="flex gap-2 justify-start items-center mb-3">
                                <SiTicktick /><p>Seamless Care</p>
                            </div>
                            <div className="flex gap-2 justify-start items-center mb-3">
                                <SiTicktick /><p>Warm and Welcoming Environment</p>
                            </div>
                            <div className="flex gap-2 justify-start items-center mb-3">
                                <SiTicktick /><p>Comprehensive Care</p>
                            </div>
                            <div className="flex gap-2 justify-start items-center mb-3">
                                <SiTicktick /><p>Expert Doctors</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2 justify-start items-center mb-3">
                                <SiTicktick /><p>Patient-Centered Care</p>
                            </div>
                            <div className="flex gap-2 justify-start items-center mb-3">
                                <SiTicktick /><p>Personalized Approach</p>
                            </div>
                            <div className="flex gap-2 justify-start items-center mb-3">
                                <SiTicktick /><p>Cutting-Edge Technology</p>
                            </div>
                            <div className="flex gap-2 justify-start items-center mb-3">
                                <SiTicktick /><p>Positive Reviews</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-xl text-neutral-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt sapiente dolores blanditiis sed nesciunt porro similique id perspiciatis cum neque vel, ad maiores, suscipit cupiditate optio, alias eligendi. Ratione.</p>
                    <button className="btn btn-sm bg-teal-900 hover:bg-teal-900 text-white hover:translate-x-2 flex gap-4 mt-10 justify-start items-center">
                        <FaArrowRight></FaArrowRight>
                        <p>More About Us</p>
                    </button>
                 
                </div>
                <div>
                <img className="h-full w-full pt-72 pb-24 p-5 rounded-t-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBoSgkiQur22zp_sDKKapGGTpB4A6t9HtbQA&s" alt="" />
                </div>
            </div>


        </div>
    );
};

export default About;