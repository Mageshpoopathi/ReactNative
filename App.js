
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity } from 'react-native';
import LoginPage from './Components/LoginPage'
export default function App() {
  return (
    <View style={styles.container}>
      <LoginPage/>
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});