import image1 from "../../../assets/images/banner-1.png";
import image2 from "../../../assets/images/banner-2.png";
import image3 from "../../../assets/images/banner-3.png";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={image1} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={image2} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={image3} className="w-full" />
        </div>
        
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        
      </div>
    </div>
  );
};

export default Banner;