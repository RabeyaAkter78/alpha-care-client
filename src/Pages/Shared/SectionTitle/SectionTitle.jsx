
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center md:w-6/12 mv-24 font-serif">
            <h3 className=" text-teal-900  uppercase ">{heading}</h3>
            <p className="text-teal-900 text-4xl font-semibold">{subHeading}</p>

        </div>
    );
};

export default SectionTitle;

