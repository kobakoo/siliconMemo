import Image from "next/image";
import React from "react";

function ImageWithDesc(customClassName, src, width, height, desc) {
  return (
    <div className={customClassName}>
      <Image src={src} width={width} height={height} alt={desc} />
    </div>
  );
}

export default ImageWithDesc;
