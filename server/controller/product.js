var product = require('../model/product')

exports.create = async (req, res) => {
    try {
        console.log(req.body);
        console.log( req.files);

   
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({
                status: 'Fail',
                Message: 'No images uploaded!',
            });
        }

        const imagePaths = req.files.map(file => "/public/images/" + file.filename);

        const newProduct = {
            name: req.body.name,
            oldPrice: req.body.oldPrice,
            newPrice: req.body.newPrice,
            stockStatus: req.body.stockStatus,
            rating: req.body.rating,
            images: imagePaths
        };

        const createdProduct = await product.create(newProduct);
        res.status(200).json({
            status: 'Success',
            Message: 'Data Entered Successfully',
            Data: createdProduct
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            Message: error.message,
        });
    }
};


exports.show = async (req, res) => {
    try {
        const products = await product.find(); 
        res.status(200).json({
            status: 'Success',
            message: 'Data retrieved successfully',
            Data: products
        });
    } catch (error) {
        res.status(500).json({
            status: 'Error',
            message: error.message,
        });
    }
};


exports.delete = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await product.findByIdAndDelete(id)
        res.status(200).json({
            status: 'Success',
            Message: 'Data delete Successfully',
            Data: deleted
        });
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            Message: error.message,
        });
    }
}



exports.update = async (req, res) => {
    try {
        console.log("Request Body:", req.body);
        console.log("Uploaded Files:", req.files);

        const existingProduct = await product.findById(req.params.id);
        if (!existingProduct) throw new Error("Product Not Found!");
    
        const imagePaths = req.files ? req.files.map(file => "/public/images/" + file.filename) : existingProduct.images;

        const updateData = {
            name: req.body.name || existingProduct.name,
            oldPrice: req.body.oldPrice || existingProduct.oldPrice,
            newPrice: req.body.newPrice || existingProduct.newPrice,
            stockStatus: req.body.stockStatus || existingProduct.stockStatus,
            rating: req.body.rating || existingProduct.rating,
            images: imagePaths
        };

        const updatedProduct = await product.findByIdAndUpdate(req.params.id, updateData, { new: true });

        res.status(200).json({
            status: 'Success',
            Message: "Product Updated Successfully",
            Data: updatedProduct
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            Message: error.message,
        });
    }
};