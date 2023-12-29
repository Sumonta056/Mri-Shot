import React from "react";
import Image from "../../designLayouts/Image";
// import Badge from "./Badge";

const Product = (props) => {
  return (
    <div className="w-full relative group">
      <div className="max-w-80 h-120 relative overflow-y-hidden ">
        <div>
          <Image className="w-full h-full" imgSrc={props.img} />
        </div>
        {/* <div className="absolute top-6 left-8">
          {props.badge && <Badge text="" />}
        </div> */}
      </div>
    </div>
  );
};

export default Product;
