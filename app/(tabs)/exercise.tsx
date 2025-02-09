import NotFoundScreen from '@/app-example/app/+not-found';
import React  from 'react';
import{ StyleSheet,
        Alert,
        Text,
        View,
        FlatList,
        ScrollView,
        TouchableHighlight,
        TouchableOpacity
      } from 'react-native';

import HTMLView from 'react-native-htmlview';

const DATA = [
  {
    id:"1",
    title:"Exercise 3",
    description: `<div><p>Create Login Screen<p>
<p>Login screen fields</p>
    
     <p>• Email</p>
     <p>• Password</p>
  </div>`
  },
  {
    id:"2",
    title:"Exercise 4",
    description: `<div><p>Create Register Screen<p>
<p>Register screen fields</p>

    <p>• Image: <span>Allows user to select image</span></p>
    <p>• Name</p>
    <p>• Email</p>
    <p>• Password</p>
  </div>`
  },
  {
    id:"3",
    title:"Exercise 5",
    description: ""
  },
  {
    id:"4",
    title:"Exercise 6",
    description: ""
  },
  
];

const Item = ({title, description}) => {
  const onPress = () => {
    console.log("1");
  }
  return( 
    <TouchableHighlight>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <HTMLView value={description} addLineBreaks={false} stylesheet={stylehtml}/>
      </View>
    </TouchableHighlight>
  );
}

export default function App() {
  

const renderItem = ({item})=>( 
  <Item title={item.title} description={item.description}/>
);
return (
  <ScrollView style={styles.container}>
    <FlatList
       data={DATA}
       renderItem={renderItem}
       keyExtractor={item => item.id}
    />
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:15,
    padding:2,
  },
  item: {
    backgroundColor: '#white',
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: 5,
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 500,

  }
});
const stylehtml = StyleSheet.create({
  p: {
    fontSize: 18,
  },
  span: {
    fontSize: 12,
  },  
  h3: {
    fontSize: 18,
  }
})
