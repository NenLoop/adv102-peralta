import { ScrollView } from 'react-native';
import ProductProvider from './ProductContext'
import AddProduct from './AddProduct';
import ProductList from './ProductList';


export default function Product() {

    return(

        <ProductProvider>
            <ScrollView>
                <AddProduct />
                <ProductList />
            </ScrollView>
        </ProductProvider>
              

    );
}


