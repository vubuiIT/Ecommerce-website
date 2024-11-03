const UserRouter = require("./UserRouter");
const OrderRouter= require("./OrderRouter")
const routes = (app) => {
    app.use("/api/user", UserRouter);
    // app.use('/api/product', ProductRouter)
    app.use('/api/order', OrderRouter)
    // app.use('/api/payment', PaymentRouter)
};

module.exports = routes;
