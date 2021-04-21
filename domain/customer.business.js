const BaseBusiness = require('./base.business');
const {Customer} = require('./models')


class CustomerBusiness extends BaseBusiness{

    constructor({customerRepository}){
        super(customerRepository,Customer)
    }


}

module.exports = CustomerBusiness;