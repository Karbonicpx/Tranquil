import { View, StyleSheet, Text, FlatList, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from "expo-status-bar";

// Getting the width of the device
const { width } = Dimensions.get('window');

export default function HomeInterface() {
  const data = [1, 2, 3]; // Placeholder data, just for showing the cards

  // Function that will render the card items
  const renderCard = ({ item }) => (
    <View style={styles.card}>

      <Text style={styles.cardText}>Card {item}</Text>
    </View>
  );

  return (

    // Rendering the background
    <LinearGradient
      colors={["#160E49"]}
      start={{ x: 1, y: 0.2 }}
      end={{ x: 1, y: 1.2 }}
      style={styles.background}
    >
      
      <StatusBar style="light" />
      {/* Rendering the headerBar*/}
      <View style={styles.headerBar}>
        <Text style={styles.text}>Hello World</Text>
      </View>

      {/* Rendering the slider */}
      <FlatList
        style = {styles.cardSlider}
        data={data} // Nothing in data, because I am just showing the slider layout
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCard} // Rendering the individual card elements
        horizontal // Setting the slider to be horizontal
        pagingEnabled // Enabling the user to slide throught the slides
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  // Aligning the card slider to be at the center
  cardContainer: {
    alignContent: "center",
    alignItems: "center"
  },
  // Individual styling of the cards
  card: {
    backgroundColor: '#24213A',
    width: width * 0.85, // Using width to make the card width responsive
    height: 250,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: (width * 0.075),  // This makes the user not able to be at the "Between" of the cards
    shadowColor: "#17132F",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },

  cardText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  headerBar: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#24213A",
    borderRadius: 10,

    shadowColor: "#202020",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 1,

    elevation: 8,
  },

  text: {
    position: "absolute",
    color: "red",
    fontSize: 20,
    fontFamily: "comic-sans",
    top: 40,
  },

  background: {
    flex: 1,
  },
});