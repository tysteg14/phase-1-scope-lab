var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
};

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'tim'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'laine';
}

console.log(changeLeastFavoriteCustomer(leastFavoriteCustomer));