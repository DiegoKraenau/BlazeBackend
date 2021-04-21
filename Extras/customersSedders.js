const n = 1000;
const arrCustomers = []
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

for (let index = 0; index < n; index++) {
    arrCustomers.push({
        firtsName:'diego',
        lastName:'kraenau',
        email:'diegokraenau@gmail.com',
        phoneNumber:random(000000000, 999999999),
        createdAt: new Date(),
        updatedAt: new Date()
    })
}

module.exports = arrCustomers;