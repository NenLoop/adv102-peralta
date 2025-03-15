import { useContext, createContext, useReducer } from 'react';

const ProductContext = createContext(null);
const ProductDispatchContext = createContext(null);

export default function ProductProvider({children}) {
    const [products, dispatch] = useReducer(productReducer, []);
    return (
        <ProductContext.Provider value={products}>
            <ProductDispatchContext.Provider value={dispatch}>
                {children}
            </ProductDispatchContext.Provider>
        </ProductContext.Provider>
    );
};

function productReducer(products, action) {
    switch(action.type){
        case 'create': {    
            return [...products, 
                {id: action.id, image: action.image, name: action.name, price: action.price}];
        }
            
        case 'update': {
            return products.map(p => {
                if(p.id === action.product.id){
                    return action.product;
                } else {
                    return p;
                }
            })

        }
        case 'delete': {
            return products.filter(p => p.id != action.id)
        }
        default: {

        }
    }
};

export function useProductContext() {
    return useContext(ProductContext);
}

export function useProductDispatchContext() {
    return useContext(ProductDispatchContext);
}