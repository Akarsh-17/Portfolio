import React from "react";
// import Link from "next/link";

const PortfolioItem = (props) => {
  const { des, title, img, keyword } = props;

  console.log(des)
  return (
    
    <div className="bg-richblack-600 flex flex-col gap-4 lg:w-[450px] rounded-md p-4 mt-3">
      <div className="">
        <h6 className="text-yellow-50 text-2xl mb-1">{title}</h6>
        {keyword?.map((item, index) => (
          <span className="text-white bg-richblack-300 p-1 rounded-md mr-3" key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className=''>
        <img alt="portfolio-img" src={img} width="380" height="250" />
      </div>
      <div className="w-11/12">
       <div className="">
      <h4 className="text-white text-xl ">{des}</h4>
      </div>
      </div>
      
    </div>
   
    
  );
};

export default PortfolioItem;
