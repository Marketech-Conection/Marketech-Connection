export function addToCar(product){
    return {
        type: 'ADD_TO_CART',
        product,
    }
}
export function removeToCar(id){
    return {
        type: 'REMOVE_PRODUCT',
        id
      }
}
export function updateAmountCar(id, amount){
    return {
        type: 'UPDATE_AMOUNT',
        id,
        amount
    }
}
export function calculateTotalCar(id, amount, product){
    return {
        type: 'CALCULATE_TOTAL',
        id,
        amount,
        product
    }
}