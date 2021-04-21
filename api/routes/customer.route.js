const {Router} = require("express");

const CustomerRouter = function({customerController}){
    const router = Router();

    router.get('/',customerController.getCustomers.bind(customerController));
    router.post('/',customerController.createCustomer.bind(customerController));
    router.put('/:id',customerController.updateCustomer.bind(customerController));

    return router;
}

module.exports = CustomerRouter;