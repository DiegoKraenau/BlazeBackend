const cors = require("cors");
const bodyParser = require("body-parser");
const {Router} = require("express");

/*Write all routes that you have */
module.exports = function({testRoutes,customerRoutes/*,userRouter,etc */}){
    const router = Router();
    const apiRoute = Router();

    apiRoute
        .use(cors())
        .use(bodyParser.json());

    /*Apiroute like /user,/students,etc */
    apiRoute.use('/test',testRoutes);
    apiRoute.use('/customers',customerRoutes)

    router.use('/api',apiRoute);

    return router;
}