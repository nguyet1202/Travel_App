import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
// import Post from '../../components/Post/posts';
// import RecommendPost from '../../components/Post/recommendPost';
// import Hotplaces from '../../components/Post/hotplaces';
// import { ScrollView } from 'react-native-gesture-handler';
const DetailPage = () => {
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
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={{
            uri: 'https://cdnimg.vietnamplus.vn/uploaded/hotnnz/2022_05_12/5_bai_bien_hoang_so_dep_nhat4_1.jpg',
          }}
          resizeMode="cover"
          style={styles.BGimage}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Travel App
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
              paddingBottom: 35,
            }}>
            Cùng bạn trên những chuyến đi
          </Text>
        </ImageBackground>
      </View>
      <ScrollView vertical style={styles.mainContent}>
        <View style={styles.topmain}>
          <Text style={{color: '#FF7029', fontSize: 18, fontWeight: 'bold'}}>
            {}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  header: {
    width: 395,
    height: 230,
  },
  BGimage: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.9,
  },
  mainContent: {
    position: 'absolute',
    width: 405,
    // height: 612,
    left: -4,
    top: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  topmain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 35,
    paddingBottom: 15,
    paddingTop: 20,
  },
  seeallButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  hotplaces: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 35,
    paddingBottom: 15,
    paddingTop: 0,
  },
});
