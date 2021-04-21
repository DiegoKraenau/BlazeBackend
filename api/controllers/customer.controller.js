class CustomerController {


    constructor({ customerService }) {
        this._customerService = customerService;
    }


    async getCustomers(req, res) {


        try {
            const customers = await this._customerService.getAll();
            const customersPerPage = 10;
            const pages = customers.length / customersPerPage;
            console.log("Entro2")
            res.send({
                status: "200",
                customersPerPage: customersPerPage,
                pages:Math.ceil(pages),
                customersLength: customers.length,
                payload: customers
            })
        } catch (error) {
            res.send({
                status: "404",
                message: error
            })
        }
    }

    async createCustomer(req, res) {
        try {
            const { body } = req;
            const message = await this._customerService.create(body);
            res.send({
                status: "200",
                payload: message
            })
        } catch (error) {
            res.send({
                status: "404",
                message: error
            })
        }
    }

    async updateCustomer(req, res) {
        try {
            const { body } = req;
            const { id } = req.params;

            await this._customerService.update(id, body);
            res.send({
                status: "204",
                payload: "Updated successfully"
            })

        } catch (error) {
            res.send({
                status: "404",
                message: error
            })
        }
    }

}

module.exports = CustomerController;