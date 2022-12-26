import {useState} from 'react';
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
import {useRoute} from '@react-navigation/native';
const DetailPage = () => {
  const route = useRoute();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={{uri: route.params.image}}
          resizeMode="cover"
          style={styles.BGimage}></ImageBackground>
      </View>
      <View vertical style={styles.mainContent}>
        <View style={styles.topmain}>
          <Text
            style={{
              color: '#FF7029',
              width: '100%',
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {route.params.tilte}
          </Text>
          <View style={styles.smallinformation}>
            <Text
              style={{
                color: '#FF7029',
                fontSize: 10,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingRight: 5,
              }}>
              {route.params.Adress}
            </Text>
            <Text
              style={{
                color: '#FF7029',
                fontSize: 10,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingLeft: 5,
                textDecorationLine: 'underline',
              }}>
              {route.params.createAt}
            </Text>
          </View>
        </View>
        <View style={styles.contentReview}>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 'bold',
                // paddingLeft: 15,
                paddingBottom:15,
              }}>
              Thông tin review
            </Text>
          </View>
          <View style={styles.Viewcontent}>
            <Text style={styles.content}>{route.params.Content}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    width: 400,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  topmain: {
    backgroundColor: '#E6EEFA',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 25,
    paddingRight: 35,
    paddingBottom: 15,
    paddingTop: 20,
  },
  smallinformation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contentReview:{
    width:'97%',
    padding:20,
    
  },
  content:{
    textAlign:'justify',
    color:'#042940',
    fontSize:16,
    lineHeight:35,
  }
});
