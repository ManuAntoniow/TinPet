//REACT
import { useEffect } from "react";
import { FlatList, Text, StyleSheet, View} from "react-native"

//REDUX
import { useSelector, useDispatch, connect } from "react-redux"
import { filteredDog, selectDog } from "../../store/actions/dogs.action"

const DogScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoryDogs = useSelector((state) => state.dogs.filteredDog)
  const category = useSelector((state) => state.categories.selected)

  useEffect(() => {
    dispatch(filteredDog(category.id))
  }, [])

  const renderDog = ({ item }) => (
    <Text style={styles.title}>{item.name}</Text>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={categoryDogs}
        keyExtractor={(item) => item.id}
        renderItem={renderDog}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontFamily: "Fredoka",
    margin: 10,
    fontSize: 30,
  },
})

export default connect()(DogScreen); 