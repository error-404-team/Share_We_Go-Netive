import React from 'react'
import { View, StyleSheet, Platform, Button } from 'react-native'
import { handleFbLogin } from './lib/auth'


class FacebookSignIn extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={handleFbLogin}
                    title="Sign in with facebook"
                    color="#3c50e8"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ...Platform.select({
        android: {
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F5FCFF',
            }
        }
    })
});

export default FacebookSignIn;