
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';

const LoginPage=()=> {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <Text style={styles.title}> [ExpleoSurance]</Text>
      <Text style={styles.label}> Enter Username :</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
      />
       <Text style={styles.label}> Enter Password :</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
      />
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Custom Button Pressed!')}
      >
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>
      <View style={styles.ThirdContainer}>
      <TouchableOpacity style={styles.RegistrationLink}><Text>Register new User </Text></TouchableOpacity>
      <TouchableOpacity style={styles.ChangePasswordlink}><Text>Forgot password</Text></TouchableOpacity>
      </View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent:'center'
  },
  innerContainer:{
    margin:10,
    borderRadius:10,
    backgroundColor: 'white',
    justifyContent:'center'
  },
  title:{
    fontSize:40,
    margin:10,
  },
  label:{
    fontSize:15,
    marginLeft:5,
  },
  input:{
    borderRadius:10,
    borderWidth:0.5,
    backgroundColor:'white',
    borderColor:'black',
    margin:10,
  },
  button:{
    margin:10,
    padding:10,
    borderRadius:10,
    backgroundColor:'white',
    width:100,
    alignSelf:'center',
  },
  buttonText:{
    fontSize:20,
    textAlign:'center',
  },
  ThirdContainer:{
    alignItems:'center',
  },
  RegistrationLink:{
    margin:5
  },
  ChangePasswordlink:{
    margin:10
  }
});
export default LoginPage;