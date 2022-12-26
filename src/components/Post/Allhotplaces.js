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
import CardItem from './CardItem';

const ALLHotplaces = ({navigation}) => {
  const [data, setdata] = useState([]);
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    getListHotPosts();
    return () => {};
  }, []);
  getListHotPosts = () => {
    const apiURL = 'https://6395736090ac47c6806b55bc.mockapi.io/Hots';
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

  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyMessageStyle}>Empty</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      {isloading ? (
        <ActivityIndicator color="#00ff00" size="large" />
      ) : (
        <FlatList
          style={styles.container}
          numColumns={2}
          ListEmptyComponent={renderEmpty}
          contentContainerStyle={styles.contentContainer}
          data={data}
          keyExtractor={item => item.post_id}
          renderItem={({item}) => {
            return <CardItem item={item} navigation={navigation} />;
          }}
        />
      )}
    </ScrollView>
  );
};

export default ALLHotplaces;

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
    width: 170,
    height: 220,
    borderRadius: 20,
    opacity: 0.9,
    // borderRadius: 100,
  },
  item: {
    position: 'relative',
    // backgroundColor: 'white',
    width: 180,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent:'center',
    // alignItems:'center',
    // height: 200,
    marginTop: 10,
  },
  tilte: {
    position: 'absolute',
    top: 150,
    left: 10,
    textAlign: 'center',
    width: 150,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    opacity: 1.5,
    borderRadius: 7,
  },
  tilteText: {
    // left:20,
    textAlign: 'center',
    color: '#044040',
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 6,
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
  buttoninfor: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
  },
  smallinfor: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 3,
    paddingRight: 3,
  },
});
