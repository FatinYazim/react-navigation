import { View, Text, Button, Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function HomeScreen(props) {
    
    const Tab = createBottomTabNavigator();

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
onPress={() => props.navigation.navigate("Setting")}
  title="Settings"
  color="#841584"
  accessibilityLabel="Configure your app settings"
/>
<Pressable 
onPress={() => props.navigation.navigate("Profile")}
style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,

    marginTop: 4,
    backgroundColor:"blue", 
paddingHorizontal: 8, 
paddingVertical: 6, 
borderRadius: 2,}}>
    <Ionicons name="person-circle-outline" size={24} color="white" />
    <Text style={{color:"white", fontSize: 16}}>
       Profile 
    </Text>
</Pressable>
      </View>
    );
  }

  export default HomeScreen;