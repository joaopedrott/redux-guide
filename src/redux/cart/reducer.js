import CartActionnTypes from "./action-types";

const initialState = {
    products: [],
    productsTotalPrice: 0,
}

const cartReducer = (state= initialState, action)=> {
    switch(action.type) {
        case CartActionnTypes.ADD_PRODUCT:
            //verificar se o produto já existe no carrinho
            const productIsAlreadyInCart = state.products.some(product => product.id === action.payload.id)
            
            //se ele existir, aumentar a quantidade em 1
            if(productIsAlreadyInCart) {
                return{...state, products: state.products.map(product => product.id === action.payload.id ? {...product, quantity: product.quantity + 1} : product),

                };
            }

            //se ele não existir, adicionar o produto no carrinho
            return{...state, products: [...state.products, {...action.payload, quantity: 1}]};

        case CartActionnTypes.REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !==action.payload),
            }
        case CartActionnTypes.INCREASE_PRODUCT_QUANTITY:
            return {
                    ...state,
                    products: state.products.map(
                        product => product.id === action.payload ? {...product, quantity: product.quantity + 1} : product
                    ),
                }


        default:
        return state;
    }

}

export default cartReducer;