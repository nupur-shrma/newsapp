import React,{useEffect,useState} from "react";
import { View,Text,FlatList,StyleSheet, SafeAreaView, Image } from "react-native";
import Header from "./components/header";

const App = () => {

  const [data,setData] = useState([])
  const [text,setText] = useState('example')

  useEffect(()=>{
    const checkData = async() => {
      await fetch(`https://gnews.io/api/v4/search?q=${text}&token=dd125624ec824678bf3e449dc9c93c36`)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log('data',data.articles);
          setData(data.articles)
      });
    }
    checkData();
  },[text])

  console.log('data1',data)

  const renderItem = ({ item }) => (
    <View style={styles.newsCard}>
        <Image source={{uri:item.image}}
          style={{width: 383, height: 200}} />
        <View style={styles.bottomView}>
          <Text style={styles.Title}>{item.title}</Text>

          <Text style={styles.content}>{item.content}</Text>

          <Text style={styles.published}>Published on {item.publishedAt}</Text>

          <Text style={styles.published}>india.com</Text>

        </View>
      </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header value={text} onChangeText={(input)=>{setText(input)}}/>
      <FlatList
      data={data}
      keyExtractor={item=>item.title}
      renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  newsCard:{
    padding:20,
  },
  bottomView:{
    backgroundColor:'#dcdcdc',
    //flex:1,
    padding:20,
  },
  Title:{
    color:'black',
    fontWeight:'600',
    fontSize:20,
  },
  content:{
    padding:5,
    color:'black',
    fontWeight:'400',
    fontSize:15,
  },
  published:{
    padding:5,
    color:'black',
    fontSize:15,
  },
})

export default App;
