import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
                style={styles.button}
                onPress={() =>navigation.navigate('CreateDB')}
            >
                <Text style={{ color: '#fff' }}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
            >
                <Text style={{ color: '#fff' }}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
            >
                <Text style={{ color: '#fff' }}>List</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
            >
                <Text style={{ color: '#fff' }}>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 45,
        borderRadius: 10,
        backgroundColor: '#000',
        marginTop: 20
    }
})