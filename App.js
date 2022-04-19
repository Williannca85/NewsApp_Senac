import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import MyList from './src/components/MyList';//retirado as {}, somente vai ser importado o MyList.

export default function App() {   

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <MyList></MyList>
      </View>
    </SafeAreaView>
  );
}
