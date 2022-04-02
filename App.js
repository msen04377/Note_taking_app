import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,TouchableHighlight } from 'react-native';
import {useDispatch,useSelector} from 'react-redux'
import { Provider } from 'react-redux';
import store from './redux/store';
import {incrementCounter,decrementCounter,resetCounter} from './redux/actions/counter'

function AppScreen() {
  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counter)
  console.log(counter)
  return (
    <View style={styles.container}>
    <Text style={styles.text}>{counter}</Text>
    <View style={{ flexDirection: "row"}}>
      <TouchableHighlight style={{ ...styles.button, backgroundColor: "red" ,padding:'15px'}} onPress={()=>dispatch(decrementCounter())}>
        <Text>-</Text>
      </TouchableHighlight>
      <TouchableHighlight style={{ ...styles.button, backgroundColor: "grey",padding:'15px' }} onPress={()=>dispatch(resetCounter())}>
        <Text>Reset</Text>
      </TouchableHighlight>
      <TouchableHighlight style={{ ...styles.button, backgroundColor: "limegreen",padding:'15px' }} onPress={()=>dispatch(incrementCounter())}>
        <Text>+</Text>
      </TouchableHighlight>
    </View>
  </View>
  );
}


export default function App() {
  return (
    <Provider store={store}>
        <AppScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 100,
    fontWeight: "bold",
  },
  button: {
    width: 100,
    height: 50,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2
  }
});
