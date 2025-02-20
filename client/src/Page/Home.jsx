// import React, { useState } from 'react';
// import Slider from "react-slick";
// import carousel1 from '../Images/carousel1.jpg';
// import carousel2 from '../Images/carousel2.jpg';
// import carousel3 from '../Images/carousel3.jpg';
// import carousel4 from '../Images/carousel4.avif';
// import homeproduct1 from '../Images/homeproduct1.jpg'
// import Button from '@mui/material/Button';
// import { IoIosArrowRoundForward } from "react-icons/io";
// import productitem1 from '../Images/productitem1.webp'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// // import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// import Rating from '@mui/material/Rating';
// import { BsArrowsFullscreen } from "react-icons/bs";
// import { IoMdHeartEmpty } from "react-icons/io";
// import banner2 from '../Images/banner2.png'
// import Mainbody from '../Component/Mainbody';
// import ProductModal from '../Component/ProductModal';
// // import productitem1 from '../Images/productitem1.webp';
// import productitem1_2 from '../Images/productitem1_2.avif';
// import productitem1_3 from '../Images/productitem1_3.avif';
// import productitem2 from '../Images/productitem2.webp';
// import productitem2_1 from '../Images/productitem2_1.webp';
// import productitem2_2 from '../Images/productitem2_2.webp';
// import productitem2_3 from '../Images/productitem2_3.webp';
// import productitem3 from '../Images/productitem3.webp';
// import productitem3_1 from '../Images/productitem3_1.webp';
// import productitem3_2 from '../Images/productitem3_2.webp';
// import productitem3_3 from '../Images/productitem3_3.webp';
// import productitem4 from '../Images/productitem4.webp';
// import productitem4_1 from '../Images/productitem4_1.webp';
// import productitem4_2 from '../Images/productitem4_2.webp';
// import productitem4_3 from '../Images/productitem4_3.webp';
// import productitem5 from '../Images/productitem5.webp'
// import productitem5_1 from '../Images/productitem5_1.webp'
// import productitem5_2 from '../Images/productitem5_2.webp'
// import productitem5_3 from '../Images/productitem5_3.webp'



// import productitem6 from '../../src/Images/productitem6.webp'
// import productitem6_1 from '../../src/Images/productitem6_1.webp'
// import productitem6_2 from '../../src/Images/productitem6_2.webp'
// import productitem7 from '../../src/Images/productitem7.webp'
// import productitem7_1 from '../../src/Images/productitem7_1.webp'
// import productitem7_2 from '../../src/Images/productitem7_2.webp'

// import productitem8 from '../Images/productitem8.webp'
// import productitem8_1 from '../Images/productitem8_1.webp'
// import productitem8_2 from '../Images/productitem8_2.webp'
// import productitem9 from '../Images/productitem9.webp'
// import productitem9_1 from '../Images/productitem9_1.webp'
// import productitem9_2 from '../Images/productitem9_2.webp'
// import productitem10 from '../Images/productitem10.webp'
// import productitem10_1 from '../Images/productitem10_1.webp'
// import productitem10_2 from '../Images/productitem10_2.webp'
// import productitem11 from '../Images/productitem11.webp'
// import productitem11_1 from '../Images/productitem11_1.webp'
// import productitem11_2 from '../Images/productitem11_2.webp'





// function Home() {

//   const carouselImages = [carousel1, carousel2, carousel3, carousel4];


//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   const [isopenproductmodal, setisopenproductmodal] = useState(false)
//   const viewproductdetails = (id) => {
//     setisopenproductmodal(true)
//   }

//   const closeProductModal = () => {
//     setisopenproductmodal(false)
//   }




//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleOpenModal = (product) => {
//     console.log("Opening modal for:", product); // Debugging
//     setSelectedProduct(product);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setSelectedProduct(null);
//   };

//   const handleAddToCart = (product) => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     const updatedCart = [...storedCart, { ...product, image: product.images[0] }];
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };
//   const products = [
//     {
//       id: 1,
//       name: 'White, Embroidered V-Neck Shirt',
//       oldPrice: 20,
//       newPrice: 14,
//       stockStatus: 'In Stock',
//       rating: 4.5,
//       images: [productitem1, productitem1_2, productitem1_3],
//     },
//     {
//       id: 2,
//       name: 'Cotton Oversized Casual Shirt',
//       oldPrice: 2699,
//       newPrice: 836,
//       stockStatus: 'In Stock',
//       rating: 3.5,
//       images: [productitem2, productitem2_1, productitem2_2, productitem2_3],
//     },
//     {
//       id: 3,
//       name: 'Sleeveless Maxi Ethnic Dress',
//       oldPrice: 6599,
//       newPrice: 2092,
//       stockStatus: 'In Stock',
//       rating: 3.2,
//       images: [productitem3, productitem3_1, productitem3_2, productitem3_3],
//     },
//     {
//       id: 4,
//       name: 'Multi-Colored Shimmer Crepe Printed Dress',
//       oldPrice: 30000,
//       newPrice: 25500,
//       stockStatus: 'In Stock',
//       rating: 3.2,
//       images: [productitem4, productitem4_1, productitem4_2, productitem4_3],
//     },
//     {
//       id: 5,
//       name: 'White Rhinestone Stiletto High Heel ',
//       oldPrice: 5330,
//       newPrice: 4999,
//       stockStatus: 'In Stock',
//       rating: 3.2,
//       images: [productitem5, productitem5_1, productitem5_2, productitem5_3],
//     },
//     {
//       id: 6,
//       name: 'Women Purple & Pink Floral Printed Open-Front Neck Shrug ',
//       oldPrice: 2099,
//       newPrice: 1499,
//       stockStatus: 'In Stock',
//       rating: 3.2,
//       images: [productitem6, productitem6_1, productitem6_2],
//     },
//     {
//       id: 7,
//       name: 'Green Hand Embroidered Indowestern Jacket Set',
//       oldPrice: 42750,
//       newPrice: 35000,
//       stockStatus: 'In Stock',
//       rating: 3.2,
//       images: [productitem7, productitem7_1, productitem7_2],
//     },
//     {
//       id: 8,
//       name: 'Green Hand Embroidered Indowestern Jacket Set',
//       oldPrice: 8670,
//       newPrice: 5810,
//       stockStatus: 'In Stock',
//       rating: 3.2,
//       images: [productitem8, productitem8_1, productitem8_2],
//     },   
//     {
//       id: 8,
//       name: 'men Analog Watch',
//       oldPrice: 8999,
//       newPrice: 2599,
//       stockStatus: 'In Stock',
//       rating: 3.2,
//       images: [productitem9, productitem9_1, productitem9_2],
//     },   
//     {
//       id: 10,
//       name: 'Radiant Rose Dial Baguette Diamond Watch',
//       oldPrice: 25000,
//       newPrice: 20000,
//       stockStatus: 'In Stock',
//       rating: 3.2,
//       images: [productitem10, productitem10_1, productitem10_2],
//     },
//     {
//       id: 11,
//       name: 'Mehfil Mirror Work Purse for Wedding Party',
//       oldPrice: 18000,
//       newPrice: 14680,
//       stockStatus: 'In Stock',
//       rating: 3.2,
//       images: [productitem11, productitem11_1, productitem11_2],
//     }, 

//   ];


//   return (
//     <>
//       <div className="home-banner">
//         <Slider {...settings}>
//           {carouselImages.map((image, index) => (
//             <div className="carousel-item" key={index}>
//               <img src={image} alt={`Slide ${index + 1}`} className="carousel-image w-100" />
//             </div>
//           ))}
//         </Slider>
//       </div>



//       <section className='homeproduct'>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-3">
//               <div className="sticky">
//                 <div className='banner'>
//                   <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" style={{ height: "400px" }} alt="" />
//                 </div>

//                 <div className='banner mt-5'>
//                   <img src={banner2} style={{ height: "400px" }} alt="" />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-9">
//               <div className="d-flex align-items-center">
//                 <div className="info w-75">
//                   <h3 className='mb-0' style={{ fontSize: "25px", fontWeight: 600 }}>BEST SELLERS</h3>
//                   <p className='text-light  mb-0' style={{ fontSize: "14px" }}>Do not miss the current offers until the end of March. </p>
//                 </div>
//                 <Button className='viewbtn ml-auto' >View All <IoIosArrowRoundForward />
//                 </Button>
//               </div>





// <div className="productrow productrow2 w-100 mt-4" style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
//   {products.map((product) => (
//     <div
//       className="item productitem"
//       key={product.id}
//       style={{
//         flex: "1 1 calc(25% - 16px)",
//         maxWidth: "calc(25% - 16px)",
//         boxSizing: "border-box",
//         padding: "10px",
//         minWidth: "250px", 
//       }}
//     >
//       <div className="image" style={{ position: "relative", width: "100%" }}>
//         <img src={product.images[0]} className="w-100" alt={product.name} style={{ borderRadius: "8px" }} />
//         <span
//           className="badge badge-primary"
//           style={{
//             position: "absolute",
//             top: "10px",
//             left: "10px",
//             backgroundColor: "#007bff",
//             color: "#fff",
//             padding: "4px 8px",
//             borderRadius: "4px",
//             fontSize: "14px",
//           }}
//         >
//           {((product.oldPrice - product.newPrice) / product.oldPrice * 100).toFixed(0)}%
//         </span>
//         <div
//           className="actions"
//           style={{
//             position: "absolute",
//             bottom: "10px",
//             right: "10px",
//             display: "flex",
//             gap: "8px",
//           }}
//         >
//           <Button onClick={() => handleOpenModal(product)} style={{ color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "6px" }}>
//             <BsArrowsFullscreen />
//           </Button>
//           <Button onClick={() => handleAddToCart(product)} style={{ color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "6px" }}>
//             <IoMdHeartEmpty style={{ fontSize: "20px" }} />
//           </Button>
//         </div>
//       </div>
//       <div className="productinfo" style={{ padding: "10px", textAlign: "center" }}>
//         <h4 style={{ fontSize: "16px", fontWeight: "600" }}>{product.name}</h4>
//         <span className="text-success d-block">{product.stockStatus}</span>
//         <Rating className="mt-2 mb-2" name="read-only" defaultValue={product.rating} precision={0.5} readOnly size="small" />
//         <div className="d-flex justify-content-center" style={{ gap: "8px" }}>
//           <span className="oldprice" style={{ fontSize: "14px", textDecoration: "line-through" }}>
//             &#8377;{product.oldPrice.toFixed(2)}
//           </span>
//           <span className="newprice text-danger" style={{ fontSize: "16px", fontWeight: "bold" }}>
//             &#8377;{product.newPrice.toFixed(2)}
//           </span>
//         </div>
//       </div>
//     </div>
//   ))}

//   {/* Include Modal */}
//   <ProductModal product={selectedProduct} open={isModalOpen} closeProductModal={handleCloseModal} />
// </div>






















//             </div>
//           </div>
//         </div>
//       </section>

//       {/* <ProductModal /> */}
//       <Mainbody />
//       {
//         isopenproductmodal === true && <ProductModal closeProductModal={closeProductModal} />
//       }

//     </>
//   );
// }

// export default Home;























































import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import carousel1 from '../Images/carousel1.jpg';
import carousel2 from '../Images/carousel2.jpg';
import carousel3 from '../Images/carousel3.jpg';
import carousel4 from '../Images/carousel4.avif';
import homeproduct1 from '../Images/homeproduct1.jpg'
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import productitem1 from '../Images/productitem1.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Rating from '@mui/material/Rating';
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import banner2 from '../Images/banner2.png'
import Mainbody from '../Component/Mainbody';
import ProductModal from '../Component/ProductModal';

function Home() {

  const carouselImages = [carousel1, carousel2, carousel3, carousel4];


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [isopenproductmodal, setisopenproductmodal] = useState(false)
  const viewproductdetails = (id) => {
    setisopenproductmodal(true)
  }

  const closeProductModal = () => {
    setisopenproductmodal(false)
  }



  const [products, setProducts] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    console.log("Opening modal for:", product); // Debugging
    setSelectedProduct(product);
    setModalOpen(true);
  };
  

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Ensure image is correctly stored
    const updatedCart = [...storedCart, { 
      ...product, 
      image: `http://localhost:3000${product.images[0]}` // Ensure correct path
    }];
    
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/product") // Update API URL if needed
      .then((response) => {
        setProducts(response.data.Data); // Adjust based on API response structure
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);


  return (
    <>
      <div className="home-banner">
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="carousel-image w-100" />
            </div>
          ))}
        </Slider>
      </div>



      <section className='homeproduct'>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className='banner'>
                  <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" style={{ height: "400px" }} alt="" />
                </div>

                <div className='banner mt-5'>
                  <img src={banner2} style={{ height: "400px" }} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className='mb-0' style={{ fontSize: "25px", fontWeight: 600 }}>BEST SELLERS</h3>
                  <p className='text-light  mb-0' style={{ fontSize: "14px" }}>Do not miss the current offers until the end of March. </p>
                </div>
                <Button className='viewbtn ml-auto' >View All <IoIosArrowRoundForward />
                </Button>
              </div>





              <div className="productrow w-100 mt-4" style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {products.map((product) => (
        <div
          className="item productitem"
          key={product._id} // Use MongoDB `_id`
          style={{
            flex: "1 1 calc(25% - 16px)",
            maxWidth: "calc(25% - 16px)",
            boxSizing: "border-box",
            padding: "10px",
            minWidth: "250px",
          }}
        >
          <div className="image" style={{ position: "relative", width: "100%" }}>
          <img src={`http://localhost:3000${product.images[0]}`} className="w-100" alt={product.name} />

            <span
              className="badge badge-primary"
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "4px 8px",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            >
              {((product.oldPrice - product.newPrice) / product.oldPrice * 100).toFixed(0)}%
            </span>
            <div
              className="actions"
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                display: "flex",
                gap: "8px",
              }}
            >
              <Button onClick={() => handleOpenModal(product)} style={{ color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "6px" }}>
                <BsArrowsFullscreen />
              </Button>
              <Button onClick={() => handleAddToCart(product)} style={{ color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "6px" }}>
                <IoMdHeartEmpty style={{ fontSize: "20px" }} />
              </Button>
            </div>
          </div>
          <div className="productinfo" style={{ padding: "10px", textAlign: "center" }}>
            <h4 style={{ fontSize: "16px", fontWeight: "600" }}>{product.name}</h4>
            <span className="text-success d-block">{product.stockStatus}</span>
            <Rating className="mt-2 mb-2" name="read-only" defaultValue={parseFloat(product.rating)} precision={0.5} readOnly size="small" />
            <div className="d-flex justify-content-center" style={{ gap: "8px" }}>
              <span className="oldprice" style={{ fontSize: "14px", textDecoration: "line-through" }}>
                &#8377;{parseFloat(product.oldPrice).toFixed(2)}
              </span>
              <span className="newprice text-danger" style={{ fontSize: "16px", fontWeight: "bold" }}>
                &#8377;{parseFloat(product.newPrice).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* Product Modal */}
      <ProductModal 
  product={selectedProduct} 
  open={isModalOpen} 
  closeProductModal={handleCloseModal} 
/>

    </div>


            </div>
          </div>
        </div>
      </section>

      {/* <ProductModal /> */}
      <Mainbody />
      {
        isopenproductmodal === true && <ProductModal closeProductModal={closeProductModal} />
      }

    </>
  );
}

export default Home;



