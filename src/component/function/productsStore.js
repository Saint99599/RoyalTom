// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to

const productsArray = [
    {
        id: "1",
        title: "Kratom Soda",
        price: "399",
        sold: "12.4k sold"
    },
    {
        id: "2",
        title: "Kratom Beer",
        price: "79",
        sold: "111.2k sold"
    },
    {
        id: "3",
        title: "Kratom 1kg",
        price: "800",
        sold: "31.6k sold"

    },
    {
        id: "4",
        title: "Kratom Milk",
        price: "49",
        sold: "2.2k sold"

    },
    {
        id: "5",
        title: "Kratom Capsule",
        price: "290",
        sold: "3.4k sold"

    },
    {
        id: "6",
        title: "Kratom Tea",
        price: "49",
        sold: "1.4k sold"

    },
    {
        id: "7",
        title: "Kratom Coffee",
        price: "69",
        sold: "69.9k sold"

    },
    {
        id: "8",
        title: "Kratom Cracker",
        price: "149",
        sold: "23.0k sold"

    },
    {
        id: "9",
        title: "Kratom Chocolate",
        price: "349",
        sold: "182.4k sold"

    },
    {
        id: "10",
        title: "Kratom Brownie",
        price: "89",
        sold: "912.9k sold"

    },
    {
        id: "11",
        title: "Green Herb Water",
        price: "39",
        sold: "23.3k sold"

    },
    {
        id: "12",
        title: "Kratom Boba",
        price: "49",
        sold: "3.4k sold"

    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };