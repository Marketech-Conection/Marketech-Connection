import produce  from 'immer'


export default function addToCar(state = [], action){

   switch(action.type){
       case 'ADD_TO_CART':
           return produce(state, draft => {
               const productIndex = draft.findIndex(product => product.id === action.product.id);
               if(productIndex >= 0){
                   draft[productIndex].amount += 1
               }else{
                    draft.push({
                        ...action.product,
                        amount: 1
                    })
               }
           });
           case 'REMOVE_PRODUCT':
               return produce(state, draft => {
                const productIndex = draft.findIndex(product => product.id === action.id);
                if(productIndex >= 0){
                    draft.splice( productIndex, 1);
                }
               });
            case 'UPDATE_AMOUNT':{
                if(action.amount <= 0){
                    return state
                }
                if(action.amount === 5){
                    return state
                }
                return produce(state, draft => {
                const productIndex = draft.findIndex(product => product.id === action.id); 
                if(productIndex >= 0){
                    draft[productIndex].amount = Number(action.amount)
                  }  
                })
            }
            case 'CALCULATE_TOTAL':
                return produce(state, draft => {
                    const cartValueTotal = draft.findIndex(product => product.id === action.id)
                    if(cartValueTotal >= 0){
                        cartValueTotal.reduce((acc, product) => acc + action.amount * product.price, 0)
                    }
                })
        default:
            return state;
   }
}