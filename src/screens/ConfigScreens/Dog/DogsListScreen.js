import { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import PlaceItem from "../../../components/PlaceItem";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../../../constants/colors";

const DogsListScreen = ({ navigation }) => {
  const places = useSelector((state) => state.places.places);

  useEffect(() => {
    console.log(places);
  }, [places]);

  const renderItem = ({ item }) => (
      <PlaceItem
        title={item.title}
        image={item.image}
        address={item.address}
        onSelect={() => navigation.navigate("DogDetail", { placeId: item.id })}
      />
  )

  return (
    <>
      <View style={styles.conteiner}>
        <TouchableOpacity onPress={() => navigation.navigate("Dog")} style={styles.button}>
          <Ionicons
            name="md-add"
            color= "black"
            size={30}
          />
          <Text style={styles.label}>Add Dog</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginTop: 45,
    marginLeft: 15,
  },
  button: {
    backgroundColor: COLORS.primary,
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    borderRadius: 10,
  },
  label: {
    fontFamily: "Fredoka",
    margin: 10,
    fontSize: 20,
  },
})

export default DogsListScreen;