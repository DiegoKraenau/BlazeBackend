const {asClass,asFunction,createContainer,asValue} = require("awilix");

//App Start
const Startup = require("./startup");
const Server = require("./server");
const config = require("../config/environments");
const Router = require("./routes");

//Routes
const TestRoutes = require("./routes/test.route");
const CustomerRoutes = require("./routes/customer.route");

//Controllers
const {TestController,CustomerController} = require('./controllers')

//Services
const {TestService, CustomerService} = require('../services');

//Business
const {TestBusiness,CustomerBusiness} = require('../domain')

//Repository
const {TestRepository,CustomerRepository} = require('../dal/repository')


//Db
const db = require('../dal/models')

const container = createContainer();

container
    .register({
        //Things that you need when you start tha app
        app: asClass(Startup).singleton(),
        server: asClass(Server).singleton(),
        config: asValue(config),
        router: asFunction(Router).singleton()
    })
    .register({
        //Roues
        testRoutes : asFunction(TestRoutes).singleton(),
        customerRoutes : asFunction(CustomerRoutes).singleton()
    })
    .register({
        /*Controllers */
        testController: asClass(TestController).singleton(),
        customerController: asClass(CustomerController).singleton()
    })
    .register({
        /*Services */
        testService: asClass(TestService).singleton(),
        customerService: asClass(CustomerService).singleton()
    })
    .register({
        /*Business */
        testBusiness : asClass(TestBusiness).singleton(),
        customerBusiness: asClass(CustomerBusiness).singleton()
    })
    .register({
        /*Repository */
        testRepository: asClass(TestRepository).singleton(),
        customerRepository : asClass(CustomerRepository).singleton()
    })
    .register({
        db: asValue(db)
    })

module.exports = container;