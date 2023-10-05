import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,Pressable, Text } from 'react-native'
import Login from './Pages/Login';
import Home from './Pages/Home';
import Cadastro from './Pages/Cadastro';
import ResetPassword from './Pages/ResetPassword';

const Stack = createNativeStackNavigator()

export default function App() {
  //const navigation = useNavigation();

  
  return (
    <NavigationContainer initialRouteName="Login">
      <Stack.Navigator>
        <Stack.Screen name="Login" screenOptions={{ headerTitleAlign: "center" }} options={({ navigation, route })=>(
          {headerTitle: () => <Text style={styles.title}>Log In</Text>, headerTitleAlign: 'center',    headerStyle: {
            backgroundColor: '#fff',
            elevation:0,
            boderWidth: 0,
            textAlign:"center",
            flex:1 ,
            alignSelf: 'center',
            shadowOpacity: 0,
 
          },
          headerTintColor: '#0000',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            backgroundColor: 'red',
          }, 
          headerRight: () => (
            <Pressable style={styles.button} color="transparent"  onPress={()=>{
              navigation.navigate('Cadastro')
            }} accessibilityLabel={'Botão para ir para a tela de cadastro'}>
            <Text style={styles.text}>Cadastrar-se</Text>
          </Pressable>
          ),

          }
        )} component={Login} />
        <Stack.Screen name="Cadastro" options={({ navigation, route })=>(
          {headerTitle: () => <Text style={styles.title}>Sign Up</Text>, headerTitleAlign: 'center',    headerStyle: {
            backgroundColor: '#fff',
            elevation:0,
            borderWidth: 0,
            textAlign:"center",
            flex:1 ,
            alignSelf: 'center',
            shadowOpacity: 0,
 
          },
          headerTintColor: '#0000',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            backgroundColor: 'red',
          }, 
          headerRight: () => (
            <Pressable style={styles.button} color="transparent"  onPress={()=>{
              navigation.navigate('Login')
            }} accessibilityLabel={'Botão para ir para a tela de login'}>
            <Text style={styles.text}>Login</Text>
          </Pressable>
          ),

          }
        )} component={Cadastro} />
        <Stack.Screen name="ResetPassword" options={({ navigation, route })=>(
          {headerTitle: () => <Text style={styles.title}>Redefinir Senha </Text>, headerTitleAlign: 'center',    headerStyle: {
            backgroundColor: '#fff',
            elevation:0,
            borderWidth: 0,
            textAlign:"center",
            flex:1 ,
            alignSelf: 'center',
            shadowOpacity: 0,
 
          },
          headerTintColor: '#0000',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: 'bold',
            backgroundColor: 'red',
          }, 
          headerRight: () => (
            <Pressable style={styles.button} color="transparent"  onPress={()=>{
              navigation.navigate('Login')
            }} accessibilityLabel={'Botão para ir para a tela de login'}>
            <Text style={styles.text}>Login</Text>
          </Pressable>
          ),

          }
        )} component={ResetPassword} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',

  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    textDecorationLine: 'underline',
    color: '#097303',
    marginTop: '10%',
  },
  textLeft: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#BDBDBD',
    marginTop: '8%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    marginTop: '8%',
  },
})
