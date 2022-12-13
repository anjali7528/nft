/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { useEffect, useState } from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {StyleSheet, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createNativeStackNavigator();
const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:'transparent'
  }
}

const App = () => {
  const [apiData, setApiData] = useState([]);

// const fetchData = async () =>{

//   const apiKey= "8Ae4LcS0lE6oeTM7DHxS7aWC4Fnqeg9b";
//   const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTMetadata`;
//   const contractAddr = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";
//   const tokenId = "1";
// const tokenType = "erc721";

// var config = {
//   method: 'get',
//   url: `${baseURL}?contractAddress=${contractAddr}&tokenId=${tokenId}`,
//   headers: { }
// };
// axios(config)
// .then(response => console.log(JSON.stringify(response.data, null, 2)))
// .catch(error => console.log(error));
// }
 
// fetchData();

  return (
   
    <NavigationContainer theme={theme}>
       <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
