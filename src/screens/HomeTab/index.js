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
import { useNavigation } from '@react-navigation/native';
// import Post from '../../components/Post/posts';
import RecommendPost from '../../components/Post/RecommendPost';
import Hotplaces from '../../components/Post/Hotplaces';
// import { ScrollView } from 'react-native-gesture-handler';
const HomeTab = ({item}) => {
  const navigation = useNavigation();
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
        <View>
          <View style={styles.topmain}>
            <Text style={{color:'#FF7029', fontSize: 18, fontWeight: 'bold'}}>
              Đề Xuất Cho Bạn
            </Text>
          </View>
          <RecommendPost />
        </View>
        <View>
          <View style={styles.hotplaces}>
            <Text style={{color: '#FF7029', fontSize: 18, fontWeight: 'bold'}}>
              Địa điểm hot trong năm
            </Text>
            <TouchableOpacity style={styles.seeallButton} onPress={() => navigation.navigate('Tất cả bài review hot', item)}>
              <Text
                style={{
                  color: '#FF7029',
                  fontSize: 18,
                  paddingRight: 8,
                  textDecorationLine: 'underline',
                }}>
                Xem tất cả
              </Text>
              <Image
                source={require('../../assets/images/Vector.png')}
                style={{width: 10, height: 16}}
              />
            </TouchableOpacity>
          </View>
          <Hotplaces />
        </View>
      </ScrollView >
    </View>
  );
};

export default HomeTab;

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
    paddingBottom: 10,
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
    paddingRight: 25,
    paddingBottom: 15,
    paddingTop: 7,
  },
});
