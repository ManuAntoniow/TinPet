import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GridItem = ({ item, onSelected }) => {
  return (
    <View style={styles.gridITem}>
      <TouchableOpacity
        style={{ ...styles.container, backgroundColor: item.color }}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  gridITem: {
    flex: 1,
    margin: 15,
    height: 50,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  title: {
    fontFamily: "Fredoka",
  },
});