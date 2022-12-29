import {
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
} from 'react-native';
import React, { useEffect,useContext} from 'react';
import CardItem from './CardItem';
import { PostContext } from '../../context/PostContext';

const Hotplaces = ({navigation}) => {
  const {isloading,data,getListHotPosts} = useContext(PostContext);
  useEffect(() => {
    getListHotPosts();
    return () => {
    };
  }, []);
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
          renderItem={({item}) => {
            return <CardItem item={item} navigation={navigation} />;
          }}
        />
      )}
    </>
  );
};

export default Hotplaces;

const styles = StyleSheet.create({
  container: {
    width: '92%',
    marginLeft: 15,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
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
});
