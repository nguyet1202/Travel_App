import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Image,
} from 'react-native';
import React, { useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import { PostContext } from '../../context/PostContext';

const RecommendPost = () => {
  const {isloading,data,getListRecomPosts} = useContext(PostContext);
  const navigation = useNavigation();
  useEffect(() => {
    getListRecomPosts();
    return () => {};
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Chi Tiết', item)}>
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
    width: 75,
    height: 75,
    borderRadius: 20,
    opacity: 0.9,
    borderRadius: 100,
  },
  item: {
    position: 'relative',
    width: 90,
    display: 'flex',
    flexDirection: 'row',
    height: 120,
    marginTop: 0,
  },
  tilte: {
    position: 'absolute',
    top: 80,
    textAlign: 'center',
    width: 80,
    height: 60,
    opacity: 1.5,
    borderRadius: 7,
  },
  tilteText: {
    textAlign: 'center',
    color: '#044040',
    fontSize: 11,
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
