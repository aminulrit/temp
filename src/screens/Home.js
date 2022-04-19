import {View,Text,SafeAreaView,StatusBar,StyleSheet,Image,TextInput} from 'react-native';
import React from 'react';
import COLORS from '../consts/COLORS';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.yellow} barStyle="dark-content" />


      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={[{fontSize: 30,fontFamily:'Quicksand-Bold'}, styles.textDark]}>Hi Hosenur 👋</Text>
          <Text style={[styles.textDark,{fontFamily:'Quicksand-Medium',fontSize:15}]}>
            Today Is A Good Day To Learn Something New
          </Text>
        </View>
        <Image source={require('../images/avatar.jpg')} style={styles.avatar} />
      </View>

      <View style={{margin:10}}>
        <TextInput  placeholderTextColor={COLORS.black} placeholder='Search' style={[styles.textDark,{fontFamily:'Quicksand-Medium',color:COLORS.black,fontSize:15,backgroundColor:COLORS.white,borderRadius:40,padding:10,paddingHorizontal:20}]}/>
      </View>
    
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    flex: 1,
  },
  textLight: {
    color: COLORS.white,
  },
  textDark: {
    color: COLORS.black,
  },
  header: {
    backgroundColor: COLORS.yellow,
    padding: 20,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  headerText: {
    width: '70%',
    paddingRight: 20,
  },
});
