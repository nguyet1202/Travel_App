import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const CardItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('DetailPage')}>
      <Image style={styles.img} source={{uri: item.image}} />
      <TouchableOpacity style={styles.tilte}>
        <Text style={styles.tilteText}>{item?.tilte}</Text>
        <View style={styles.buttoninfor}>
          <TouchableOpacity style={styles.smallinfor}>
            <Image
              source={{
                uri: 'https://xuonginthanhpho.com/wp-content/uploads/2020/03/map-marker-icon.png',
              }}
              style={{width: 12, height: 12, marginTop: 1}}
            />
            <Text style={{color: '#000000', fontSize: 10, fontWeight: 'bold'}}>
              {item?.Adress}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallinfor}>
            <Image
              source={{
                uri: 'https://newtechco.com.vn/wp-content/uploads/2019/06/icon-dung-thoigian.png',
              }}
              style={{width: 12, height: 12, marginRight: 3}}
            />
            <Text style={{color: '#000000', fontSize: 10, fontWeight: 'bold'}}>
              {item?.createAt}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CardItem;

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
    opacity: 2,
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
