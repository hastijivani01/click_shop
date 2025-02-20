import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Rating from "@mui/material/Rating";
import { IoCloseOutline } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import { IoIosAdd, IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";

function ProductModal({ product, closeProductModal, open }) {
  const [selectedImage, setSelectedImage] = useState(product ? product.images[0] : null);
  const [inputVal, setInputVal] = useState(1);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  const handleQuantityChange = (type) => {
    setInputVal((prev) => {
      if (type === "minus" && prev > 1) return prev - 1;
      if (type === "plus") return prev + 1;  
      return prev;
    });
  };

  if (!product) return null;

  return (
    <Dialog open={open} onClose={closeProductModal} fullWidth maxWidth="md">
      <Button className="close" onClick={closeProductModal} style={{ position: "absolute", top: "10px", right: "10px", minWidth: "auto" }}>
        <IoCloseOutline size={24} />
      </Button>

      <h5 className="mb-2 font-weight-bold" style={{ fontSize: "22px", color: "rgba(0,0,0,0.8)", textAlign: "center", marginTop: "20px" }}>
        {product.name}
      </h5>

      <div className="row mt-2 px-3">
        {/* Product Images */}
        <div className="col-md-5">
          <div className="productZoom">
            <div className="item">
              <img
                src={`http://localhost:3000${selectedImage}`}
                alt="Product"
                className="zoomable-image"
                style={{ width: "100%", height: "auto", objectFit: "contain", border: "1px solid #ddd", borderRadius: "8px", padding: "10px", backgroundColor: "#f9f9f9" }}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3">
            {product.images.map((image, index) => (
             <img
             key={index}
             src={`http://localhost:3000${image}`}
             alt={`Thumbnail ${index + 1}`}
             onClick={() => setSelectedImage(image)}
             style={{ width: "60px", height: "60px", objectFit: "cover", margin: "0 5px", cursor: "pointer", border: selectedImage === image ? "2px solid #007bff" : "1px solid #ddd", borderRadius: "4px" }}
           />
           
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="col-md-7">
          <div className="d-flex info align-items-center mb-3">
            <span className="oldprice" style={{ fontSize: "16px" }}>
              &#8377;{product.oldPrice.toFixed(2)}
            </span>
            <span className="newprice text-danger ml-4" style={{ fontSize: "20px" }}>
              &#8377;{product.newPrice.toFixed(2)}
            </span>
          </div>

          <span className="badge success">{product.stockStatus}</span>
          <p className="mt-2 d-flex info align-items-center pt-2" style={{ fontSize: "18px", fontWeight: 700 }}>
            Product Details
          </p>
          <ul className="pl-3">
            <li>Package contains: 1 {product.name}</li>
            <li>Hand wash</li>
            <li>Cotton</li>
            <li>Product Code: {Math.floor(Math.random() * 100000)}</li>
          </ul>

          {/* Quantity Control */}
          <div className="d-flex align-items-center">
            <div className="quantityDrop d-flex align-items-center">
              <Button onClick={() => handleQuantityChange("minus")}>
                <RiSubtractLine />
              </Button>
              <input type="text" value={inputVal} readOnly style={{ width: "40px", textAlign: "center", border: "1px solid #ddd", margin: "0 5px" }} />
              <Button onClick={() => handleQuantityChange("plus")}>
                <IoIosAdd />
              </Button>
            </div>

            <Button className="btn-blue btn-lg btn-big btn-round ml-3">Add to Cart</Button>
          </div>

          {/* Additional Actions */}
          <div className="d-flex align-items-center mt-5 actions">
            <Button style={{ textTransform: "uppercase" }} className="btn-round btn-sml" variant="outlined">
              <IoIosHeartEmpty /> &nbsp; Add To Wishlist
            </Button>
            <Button style={{ textTransform: "uppercase" }} className="btn-round btn-sml ml-3" variant="outlined">
              <MdOutlineCompareArrows /> &nbsp; Compare
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default ProductModal;

