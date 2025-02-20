import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MyContext } from "../App";
import './AdminPanel.css'; 
import { useHistory } from "react-router-dom";

function AdminPanel() {
    const { setisheaderfooter } = useContext(MyContext);
    const history = useHistory();  
    useEffect(() => {
        setisheaderfooter(false);
        return () => {
            setisheaderfooter(true);
        };
    }, []);

    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        oldPrice: "",
        newPrice: "",
        stockStatus: "In Stock",
        rating: "",
        images: [] 
    });
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
  
        const token = localStorage.getItem("token");
        if (!token) {
            history.push("/signin");
        } else {
            fetchProducts();
        }
    }, [history]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3000/product");
            setProducts(response.data.Data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, images: Array.from(e.target.files) }); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (const key in formData) {
            if (key !== "images") formDataToSend.append(key, formData[key]);
        }

        formData.images.forEach(image => {
            formDataToSend.append("images", image);
        });

        try {
            if (editingProduct) {
                await axios.patch(`http://localhost:3000/product/${editingProduct._id}`, formDataToSend);
            } else {
                await axios.post("http://localhost:3000/product", formDataToSend);
            }
            // Reset form
            setFormData({ name: "", oldPrice: "", newPrice: "", stockStatus: "In Stock", rating: "", images: [] });
            setEditingProduct(null);
            fetchProducts();
        } catch (error) {
            console.error("Error saving product:", error);
        }
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        setFormData({
            name: product.name,
            oldPrice: product.oldPrice,
            newPrice: product.newPrice,
            stockStatus: product.stockStatus,
            rating: product.rating,
            images: [] 
        });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/product/${id}`);
            fetchProducts();
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div className="admin-panel">
            <h2>Admin Panel</h2>

    
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="product-form">
                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Old Price</label>
                    <input type="number" name="oldPrice" placeholder="Old Price" value={formData.oldPrice} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>New Price</label>
                    <input type="number" name="newPrice" placeholder="New Price" value={formData.newPrice} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Stock Status</label>
                    <select name="stockStatus" value={formData.stockStatus} onChange={handleChange}>
                        <option value="In Stock">In Stock</option>
                        <option value="Out of Stock">Out of Stock</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Rating</label>
                    <input type="number" name="rating" placeholder="Rating" value={formData.rating} onChange={handleChange} required step="0.1" />
                </div>

                <div className="form-group">
                    <label>Product Images</label>
                    <input type="file" name="images" onChange={handleImageChange} multiple />
                </div>

                <button type="submit" className="btn-submit">{editingProduct ? "Update Product" : "Add Product"}</button>
            </form>

            {/* Product List */}
            <div className="product-list">
                <h3>Product List</h3>
                <div className="product-items">
                    {products.map((product) => (
                        <div key={product._id} className="product-item">
                            <img 
                                src={`http://localhost:3000${product.images?.[0]}`} 
                                alt={product.name} 
                                className="product-image" 
                                onError={(e) => e.target.src = "https://via.placeholder.com/150"}
                            />
                            <div className="product-details">
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                                <div className="product-price">&#8377;{product.newPrice}</div>
                                <div className="product-status">{product.stockStatus}</div>
                            </div>
                            <div className="product-actions">
                                <button className="btn-edit" onClick={() => handleEdit(product)}>Edit</button>
                                <button className="btn-delete" onClick={() => handleDelete(product._id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;
