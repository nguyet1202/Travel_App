import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const RecommendPost = () => {
  const [data, setdata] = useState([]);
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    getListPosts();
    return () => {};
  }, []);
  getListPosts = () => {
    const apiURL = 'https://6395736090ac47c6806b55bc.mockapi.io/posts';
    fetch(apiURL)
      .then(res => res.json())
      .then(resjson => {
        setdata(resjson);
      })
      .catch(error => {
        console.log('error: ', error);
      })
      .finally(() => setisloading(false));
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Image style={styles.img} source={{uri: item.image}} />
        <TouchableOpacity style={styles.tilte}>
          <Text style={styles.tilteText}>{item?.tilte}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyMessageStyle}>Empty</Text>
      </View>
    );
  };

  return (
    <>
      {isloading ? (
        <ActivityIndicator color="#00ff00" size="large" />
      ) : (
        <FlatList
          style={styles.container}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          ListEmptyComponent={renderEmpty}
          contentContainerStyle={styles.contentContainer}
          data={data}
          keyExtractor={item => item.post_id}
          renderItem={renderItem}
        />
      )}
    </>
  );
};

export default RecommendPost;

const styles = StyleSheet.create({
  container: {
    width: '92%',
    marginLeft: 15,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  img: {
    // margin: 20,
    width: 75,
    height: 75,
    borderRadius: 20,
    opacity:0.9,
    borderRadius: 100,
  },
  item: {
    position: 'relative',
    // backgroundColor: 'white',
    width: 90,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent:'center',
    // alignItems:'center',
    height: 120,
    marginTop: 0,
  },
  tilte: {
    position: 'absolute',
    top: 80,
    // left: 10,
    textAlign: 'center',
    width: 80,
    height: 60,
    // backgroundColor: 'rgba(255, 255, 255, 0.6)',
    opacity:1.5,
    borderRadius: 7,
  },
  tilteText: {
    // left:20,
    textAlign: 'center',
    color: '#044040',
    fontSize: 11,
    fontWeight: 'bold',
    paddingTop:6,
  },
  emptyMessageStyle: {
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  buttoninfor:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:5,
    paddingRight:5
  },
  smallinfor:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop:10,
    paddingLeft:3,
    paddingRight:3,
  }
});
