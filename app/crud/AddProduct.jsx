import { useState } from 'react'; 
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';    
import * as ImagePicker from 'expo-image-picker';
import { useFonts } from 'expo-font';
import { useProductDispatchContext } from './ProductContext';

let nextId = 1;
export default function AddProduct() {
    const [loaded, error] = useFonts({
        'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf')
      })
    const dispatch = useProductDispatchContext();
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images', 'videos'],
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
  
        });
  
        console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };

    handlePress = () => {
        if(image == null || name == '') {
            console.log("nothing happens");

        } else {
            dispatch({type: 'create', id: nextId++, image: image, name: name, price: price});
            setImage(null);
            setName('');
            setPrice('')
        }
    }
    

    return(   
        <View style={styles.container}>
            <Text style={styles.headerText}>Create New Product</Text>
            <View style={styles.imageBorder}>
                {image?
                <Image source={{uri : image}} style={{height: 128, width: 128}}/> : 
                <TouchableOpacity onPress={pickImage}>
                    <Text style={styles.normalText}>Upload Image</Text>
                </TouchableOpacity>}
            </View>
            {image &&
            <TouchableOpacity onPress={() => setImage('')}> <Text style={styles.titleText}>Reset Image</Text></TouchableOpacity>}
            <View>
                <Text style={styles.titleText}>Product Name</Text>
                <TextInput style={styles.textInput}
                placeholder='Enter Product Name'
                onChangeText={e => setName(e)}
                value={name}/>
                <Text style={styles.titleText}>Product Price</Text>
                <TextInput style={styles.textInput}
                placeholder='Enter Product Price' 
                onChangeText={e => setPrice(e)}
                value={price}>
                </TextInput>
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.normalText}>
                    Add Product
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    headerText: {
        fontFamily: 'Roboto-Regular',
        fontSize: '20px',
        fontWeight: '600',
        margin: '28px'

    },
    normalText: {
        fontFamily: 'Roboto-Regular',
        fontSize: '16px',

    },
    titleText: {
        fontFamily: 'Roboto-Regular',
        fontSize: '12px',
        marginTop: '9px',
    },
    imageBorder: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        border: '2px black dotted',
        borderRadius: '8px',
        width: '150px',
        height: '150px',

    },
    textInput: {
        fontFamily: 'Roboto-Regular',
        fontSize: '16px',
        backgroundColor: 'white',
        padding: '5px',
        borderRadius: '8px',    

    },
    button: {
        backgroundColor: '#8277CA',
        paddingRight: '52px',
        paddingLeft: '52px',
        paddingTop: '6px',
        paddingBottom: '6px',
        borderRadius: '3px',
        marginTop: '12px',
        marginBottom: '16px',

    }
})
