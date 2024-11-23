import React from "react";
import "./Gallery.css";

// Import all the images
import image5 from "../../components/Assets/Gallery/image5.png";
import image27 from "../../components/Assets/Gallery/image27.png";
import image20 from "../../components/Assets/Gallery/image20.png";
import image2 from "../../components/Assets/Gallery/image2.png";
import image3 from "../../components/Assets/Gallery/image3.png";
import image4 from "../../components/Assets/Gallery/image4.png";
import image25 from "../../components/Assets/Gallery/image25.png";
import image6 from "../../components/Assets/Gallery/image6.png";
import image7 from "../../components/Assets/Gallery/image7.png";
import image8 from "../../components/Assets/Gallery/image8.png";
import image9 from "../../components/Assets/Gallery/image9.png";
import image10 from "../../components/Assets/Gallery/image10.png";
import image11 from "../../components/Assets/Gallery/image11.png";
import image12 from "../../components/Assets/Gallery/image12.png";
import image13 from "../../components/Assets/Gallery/image13.png";
import image14 from "../../components/Assets/Gallery/image14.png";
import image15 from "../../components/Assets/Gallery/image15.png";
import image16 from "../../components/Assets/Gallery/image16.png";
import image17 from "../../components/Assets/Gallery/image17.png";
import image18 from "../../components/Assets/Gallery/image18.png";
import image19 from "../../components/Assets/Gallery/image19.png";
import image21 from "../../components/Assets/Gallery/image21.png";
import image22 from "../../components/Assets/Gallery/image22.png";
import image23 from "../../components/Assets/Gallery/image23.png";
import image24 from "../../components/Assets/Gallery/image24.png";
import image26 from "../../components/Assets/Gallery/image26.png";
import image29 from "../../components/Assets/Gallery/image29.png";
import image28 from "../../components/Assets/Gallery/image28.png";
import image33 from "../../components/Assets/Gallery/image33.png";
import image30 from "../../components/Assets/Gallery/image30.png";
import image31 from "../../components/Assets/Gallery/image31.png";
import image32 from "../../components/Assets/Gallery/image32.png";
import image34 from "../../components/Assets/Gallery/image34.png";
import image35 from "../../components/Assets/Gallery/image34.png";
import image36 from "../../components/Assets/Gallery/image36.png";
import image37 from "../../components/Assets/Gallery/image37.png";
import image38 from "../../components/Assets/Gallery/image38.png";
import image39 from "../../components/Assets/Gallery/image39.png";
import image40 from "../../components/Assets/Gallery/image40.png";
import SecondaryNavbar from "../../components/SecondaryNavbar/SecondaryNavbar";

const Gallery = () => {
  // Array of image imports
  const images = [
    image5, image27, image20, image2, image3, image4, image25, image6,
    image7, image8, image9, image10, image11, image12, image13, image14,
    image15, image16, image17, image18, image19, image21, image22, image23,
    image24, image26, image29, image28, image33, image30, image31, image32,
    image34, image35, image36, image37, image38, image39, image40,
  ];

   return (
    <div className="gallery_page">
      <SecondaryNavbar />
      <h1 className="gallery_heading">Gallery</h1>
      <div className="gallery_container">
        {images.map((src, index) => (
          <div className="gallery_box" key={index}>
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

