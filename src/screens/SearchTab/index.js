import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useState,useEffect} from 'react';
import {PostContext} from '../../context/PostContext';
import CardItem from '../../components/Post/CardItem';
const Search = ({navigation}) => {
  const {isloading, data, setdata, getListHotPosts} = useContext(PostContext);
  const [search, setSearch] = useState('');
  const searchFilterFunction = text => {
    console.log(data);
    if (text !== '') {
      const datasearched = data.filter(item =>
        item.tilte
          .toUpperCase()
          .includes(text.toUpperCase().trim().replace(/\s/g, '')),
      );
      setdata(datasearched);
      console.log(data);
    } else {
      getListHotPosts();
    }
    setSearch(text);
  };
  useEffect(() => {
    getListHotPosts();
  }, []);
  return (
    <SafeAreaView>
      <TextInput
        onChangeText={text => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search Here"
      />
      <ScrollView>
        {isloading ? (
          <ActivityIndicator color="#00ff00" size="large" />
        ) : (
          <FlatList
            style={styles.container}
            numColumns={2}
            data={data}
            keyExtractor={item => item.post_id}
            renderItem={({item}) => {
              return <CardItem item={item} navigation={navigation} />;
            }}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Search;

const styles = StyleSheet.create({
  container: {
    width: '92%',
    marginLeft: 21,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
