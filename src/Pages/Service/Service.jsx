import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import { GiMedicines } from "react-icons/gi";
import { MdOutlineMedicalServices } from "react-icons/md";
const Service = () => {
    return (
        <div className='mt-32 mb-20 pt-28 rounded-t-[50px] bg-indigo-200'>
            <SectionTitle
                heading={"Our Services"}
                subHeading={"We Serve In Different Areas For Our Patients"}
            ></SectionTitle>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 pt-10'>

                <div className="card w-72 h-84 bg-base-100 shadow-xl p-4  group">
                    <div className='flex justify-between items-center'>
                        <GiMedicines className='h-20 w-20' />
                        <MdOutlineMedicalServices className='h-20 w-20 opacity-0 group-hover:opacity-30 transition-opacity duration-300' />
                    </div>
                    <h1 className='hover:transition-all hover:duration-300 text-teal-900 hover:text-blue-700 font-semibold text-xl my-4'>Medicine & Nephrology</h1>
                    <p className='text-neutral-500 text-xl'>20+ Doctors are available under this department who serve.</p>
                    <button className="btn btn-sm bg-teal-900 hover:bg-teal-900 text-white flex gap-2 mt-10 justify-start items-center group">
                        <FaArrowRight className='transform transition-transform duration-300 group-hover:translate-x-20' />
                        <p className='transform transition-transform duration-300 group-hover:-translate-x-8'>Read More</p>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Service;