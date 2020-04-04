const initialState = {
    ingredients : {
        salad:0,
        meat:0,
        bacon:0,
        cheese:0
    },
    price : 4
}
const prices = {
    bacon: 0.7,
    salad: 0.2,
    meat: 0.9,
    cheese: 1.4
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ON_INGREDIENTS_ADD' :
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.identifier] : state.ingredients[action.identifier] + 1
                },
                totalPrice : state.price + prices[action.identifier]

            }
            
        case 'ON_INGREDIENTS_DELETE' : 
         if (state.ingredients[action.identifier] !== 0) {
            return {
                  ...state,
                  ingredients: {
                      ...state.ingredients,
                    [action.identifier] : state.ingredients[action.identifier] - 1
                  },
                    totalPrice: state.price - prices[action.identifier]
              }
            }
           break;
        default: 
        return state
        } 
}

export default reducer