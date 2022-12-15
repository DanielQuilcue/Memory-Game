import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
const cards = [
 // "🥹",
  // "🗣️",
  // "🦷",
  // "🍑",
  // "🌪️",
  // "🌎",
  "🐷",
  "🪝",
  "⚛️",
  "🔑",
  "🥕",
  "🥑",
  // "👻",
  // "🥶",
  // "🥵",
];
export default function App() {
  const [board, setBoard] = React.useState(() => shuffle([...cards, ...cards]));

  const [selectedCards, setSelectedCards] = React.useState([]);
  const [matchedCards, setMatchedCards] = React.useState([]);
  const [score, setCore] = React.useState(0);

  const handleTapCard = index => {

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memory</Text>
      <View style={styles.board}>
        {board.map((card, index) => {
          return (
            <Card
              key={index}
              // isTurnedOver={isTurnedOver}
              // onPress={() => handleTapCard(index)}
              >{card}
            </Card>
          )
        })}
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: "900"
  },
  board:{
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

/**
 *  Return the array shuffled into a random order.
 *  Do not edit this function.
 */
function shuffle(array) {
  for(let i = array.length - 1; i > 0; i--) {
    const randomIndex =  Math.floor(Math.random() * ( i + 1 ));

    // Swap the elements at i and randomIndex.
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]]
  }
  return array;
}