import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, ActivityIndicator, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import firestore from '@react-native-firebase/firestore';
import { collection } from 'firebase/firestore';

const AddItem = ({ navigation }) => {
    let [listData, setListData] = useState([]);
    let [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);


    async function getUser() {
        //  setLoading(true)
        await firestore()
            .collection('users')
            .onSnapshot((querySnapshot) => {
                let temp = [];
                console.log('Total users: ', querySnapshot.size);
                querySnapshot.forEach((documentSnapshot) => {
                    console.log('user Id: ', documentSnapshot.id);
                    let userDetails = {};
                    userDetails = documentSnapshot.data();
                    userDetails['id'] = documentSnapshot.id;
                    temp.push(userDetails);
                    setListData(temp);
                    // setLoading(false)
                });
            });
    }

    useEffect(() => {
        getUser()
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {/* <ActivityIndicator size ={20}animating={loading}/> */}
            <FlatList
                data={listData}
                // onRefresh={()=>getUser()}
                refreshing={loading}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                renderItem={({ item, index }) => {
                    return (
                        <View>
                            <TouchableOpacity style={styles.userCard} key={index} onPress={() => navigation.navigate('UpdateScreen', { item })}>
                                <Text style={styles.userCardText}>{index + 1}</Text>
                                <Text style={styles.userCardText}>{item.username}</Text>
                                <Text style={styles.userCardText}>{item.email}</Text>


                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
            <View>
                <TouchableOpacity style={{ height: 50, width: 100, backgroundColor: '#000', marginBottom: 30, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 140 }}

                    onPress={() => navigation.navigate('CreateDB')}>
                    <Text style={{ color: '#fff' }}>Add Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    userCard: {
        width: 120 * 3,
        height: 55,
        backgroundColor: "#000",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: 10

    },
    userCardText: {
        color: "#ffffff",
        fontSize: 16,
    },
})