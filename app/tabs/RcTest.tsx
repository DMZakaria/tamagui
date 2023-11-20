import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

export function SimpleRcList(props) {
  // Generate a list of 100 elements
  const data = Array.from({ length: 100 }, (_, index) => ({
    key: String(index),
    text: `Item ${index + 1}`
  }));

  // Render item function for the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1600480505021-e9cfb05527f1?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }} // Replace with your image source
        style={styles.image}
      />
      <Text>{item.text}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
    // <ScrollView>
    //   {Array.from({ length: 100 }).map((_, i) => (
    //     <View key={i}>
    //       <Text>{i}</Text>
    //     </View>
    //   ))}
    // </ScrollView>
  );
}

export function RcList(props) {
  return (
    <ScrollView>
      {Array.from({ length: 100 }).map((_, i) => (
        <CardRcPlus
          key={i}
          uri={
            "https://images.unsplash.com/photo-1600480505021-e9cfb05527f1?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      ))}
    </ScrollView>
  );
}

export function CardRcPlus(props) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1600480505021-e9cfb05527f1?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }} // Replace with your image source
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Your Text Here</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16
  },
  textContainer: {
    flex: 1,
    marginRight: 16
  },
  text: {
    fontSize: 16
  },
  button: {
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 8
  },
  buttonText: {
    color: "#fff",
    fontSize: 16
  }
});
