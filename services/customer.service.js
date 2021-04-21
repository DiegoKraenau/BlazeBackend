const BaseService = require('./base.service');

class CustomerService extends BaseService{

    constructor({customerBusiness}){
        super(customerBusiness)
    }

}

module.exports = CustomerService;