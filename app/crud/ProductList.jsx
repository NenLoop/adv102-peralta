
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Pressable, Modal, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useFonts } from 'expo-font'
import { useProductContext, useProductDispatchContext } from './ProductContext.jsx';

export default function ProductList() {
    const [loaded, error] = useFonts({
        'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf')
      })
    const products = useProductContext();

    const renderItem = ({item}) => (
        <List product={item}></List>
    );
    return(
        <View>
            <Text style={styles.headerText}> Products </Text>
            <FlatList
             data={products}
             renderItem={renderItem}
             keyExtractor={item => item.id}
             />
        </View>
    );
}

const List = ({product}) => {
    const [image, setImage] = useState(product.image);
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const dispatch = useProductDispatchContext();
    const [isEditing, setIsEditing] = useState(false);

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


    return(
        <View style={styles.container}>
            <Modal animationType='fade'
             transparent="true"
            visible={isEditing}>
                <View style={styles.modal}>
                    <Text style={styles.normalText}>Product No.{product.id}</Text>
                    <Image source={image} style={{ marginTop: '8px', marginBottom: '4px',height: 96, width: 96}}/>
                    <Pressable onPress={pickImage}><Text style={styles.titleText}>Change Image</Text></Pressable>
                    <TextInput style={styles.textInput} onChangeText={(name) => setName(name)} value={name}/>
                    <TextInput style={styles.textInput} onChangeText={(price) => setPrice(price)} value={price}/>
                    <Pressable style={styles.button} onPress={() => {dispatch({type: 'update', product: { ...product, image: image, name: name, price: price}}); setIsEditing(false)}}><Text>Save</Text></Pressable>

                </View>
            </Modal>
            <View>
                <Text style={styles.normalText}>Product No. {product.id}</Text>
                <Text style={styles.titleText}>{product.name}</Text>
                <Text style={styles.titleText}>(₱ {product.price})</Text>
                <View style={styles.container}>
                    <Pressable style={styles.editButton} onPress={() => setIsEditing(true)}><Text style={styles.titleText}>Edit</Text></Pressable>
                    <Pressable style={styles.delButton} onPress={() => {dispatch({type: 'delete', id: product.id})}}><Text style={styles.titleText}>Delete</Text></Pressable>
                </View>

            </View>

            <Image source={{uri: product.image}} style={styles.image} />
            
        </View>
    );

}

const styles = StyleSheet.create({
    modal: {
        position: 'fixed',
        inset: 0,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '300px',
        height: '300px',
        margin: 'auto',
        backgroundColor: 'white',
        border: '1.5px solid gray',
        borderRadius: '12px'

    },
    textInput: {
        fontFamily: 'Roboto-Regular',
        fontSize: '16px',
        backgroundColor: 'white',
        padding: '5px',
        border: '1px solid black',
        marginTop: '5px',
        marginBottom: '3px',
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

    },
    container: {
        margin: '8px',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: '6px',
        padding: '8px',
        backgroundColor: 'white'

    },
    headerText: {
        fontFamily: 'Roboto-Regular',
        fontSize: '18px',
        fontWeight: '600',
        margin: '10px'

    },
    normalText: {
        fontFamily: 'Roboto-Regular',
        fontSize: '16px',
        marginTop: '5px',
    },
    titleText: {
        fontFamily: 'Roboto-Regular',
        fontSize: '12px',
        marginTop: '2px',
        marginBottom: '2px',

    },
    editButton: {
        left: '-15px',
        backgroundColor: '#FAC69A',
        paddingTop: '3px',
        paddingBottom: '3px',
        paddingRight: '8px',
        paddingLeft: '8px',
        borderRadius: '3px',
    },
    delButton: {
        backgroundColor: '#F99C9E',
        paddingTop: '3px',
        paddingBottom: '3px',
        paddingRight: '8px',
        paddingLeft: '8px',
        borderRadius: '3px',

    },
    image: {
        height: 96, 
        width: 96,
        top: 10
    }
})