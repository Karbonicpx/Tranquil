import { View, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeInterface(){

    return(
        <LinearGradient 
        colors={["#000000", "#3350B0"]}
        start={{x: 1, y: 0.2}}
        end = {{x: 1, y: 0.9}}
        style = {styles.background}>

        </LinearGradient>  
    )

    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: 1000
    }
})