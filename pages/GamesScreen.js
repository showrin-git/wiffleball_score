import React, {Component} from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Container, Button, Text, View } from 'native-base';
import ListGamesComponent from '../components/ListGames';
import CreateGameComponent from '../components/CreateGame';

class GamesScreen extends Component{
  render(){
    return (
      <Container>
        <View style={styles.view}>
          <CreateGameComponent></CreateGameComponent>
          <ListGamesComponent></ListGamesComponent>
          <Button
            onPress={() => this.props.navigation.navigate('HomeScreen')}
            transparent
            style={styles.button}
          >
            <Text style={styles.text}>ホーム画面へ</Text>
          </Button>
        </View>
     </Container>   
    );
  }        
}

const styles = StyleSheet.create({
  view:{
    flexDirection:'row',
    justifyContent: 'center',
  },
  button:{
    top:Dimensions.get('window').height/2 - 100,
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    backgroundColor:'rgba(200,200,200,0.6)',
  },
  text:{
    fontSize:20,
  }
});
export default GamesScreen;