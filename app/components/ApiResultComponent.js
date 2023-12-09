import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {  getPageList } from '../redux/actions/PageList'


export function ApiResultComponent() {

  const pageList = useSelector(state => state.pageList)

  const disptch = useDispatch()
  console.log("Appjs" + JSON.stringify(pageList));

  useEffect(() => {
    disptch(getPageList())
  }, [])

  return (

    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Get Employee"
          onPress={() => (disptch(getPageList()))}
        />
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.flatListContainer}>
          <FlatList
            data={pageList.pageList}
            renderItem={({ item }) => <Text style={styles.flatListItem}>{item.employee_name}</Text>}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonContainer: {
    flex: 0.1,
  },
  dataContainer: {
    flex: 0.9,
  },
  textStyle: {
    fontSize: 20
  },
  flatListContainer: {
    flex: 1,
    paddingTop: 22,
  },
  flatListItem: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
