const productController = {};

productController.getProducts = (req, res, next) => {
    // TODO: Should Return a list of Products that are active for UI to Render.
    const products = [];
    res.send(products);
};

productController.getProductById = (req, res, next) => {
    // TODO: Retrieves a product from a given ID, returns it in an array, if any is found.
    const { id } = req.params;
    if (id !== undefined) {
        let product = null;
        // TODO Find in DB the given Product with the Provided ID and Return it
        if (product) {
            res.send([product]);
        } else {
            res.status(404).json([]);
        }
    } else {
        res.status(400);
    }
};

productController.addProduct = (req, res, next) => {
    // TODO: Should receive a product in req.body and add it to DB returning the Product ID.
    const { product } = req.body;
    let _id = null;
    // Save Product to DB and update id;
    if (id) {
        res.status(201).json({ _id });
    } else {
        res.status(500);
    }
};

productController.updateProduct = (req, res, next) => {
    // TODO Should Update a Given Product with the contents of req.body which should contain Product ID in it.
    const { product } = req.body;
    const { _id } = product;
    if (product && _id !== undefined) {
        // TODO: Update DB on the Given ID using the Product
        // Respond with the correct status
    } else {
        res.status(400);
    }
};

productController.removeProduct = (req, res, next) => {
    // TODO Should disable the given Product ID in the Database.
    const { id } = req.params;
    if (id !== undefined) {
        let updated = null;
        // TODO Find in DB the given Product with the Provided ID and disable it
        if (updated) {
            res.status(200);
        } else {
            res.status(404).json([]);
        }
    } else {
        res.status(400);
    }
};

module.exports = productController;
