const BaseRepository = require('./base.repository');

class CustomerRepository extends BaseRepository{


    constructor({db}){
        super(db,"Customer");
    }
}

module.exports = CustomerRepository;