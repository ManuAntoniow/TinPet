//REACT
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { COLORS } from "../../../constants/colors";
import { addDog } from "../../../store/actions/places.action";
import ImageSelector from "../../../components/ImageSelector";
import LocationSelector from "../../../components/LocationSelector";

//REDUX
import { useSelector, useDispatch } from 'react-redux'

//COMPONENT
import GridItem from '../../../components/GrifItem'

const DogScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    console.log(route, "Nueva Direccion");
  }, [route]);

  const handleTitleChange = (text) => setTitle(text);

  const handleSave = () => {
    dispatch(addDog(title, image));
    navigation.navigate("DogList");
  };

  return (
    <>
      <View style={styles.screen}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Add new Dog</Text>
        </View>
        <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={handleTitleChange}
          />
          <ImageSelector onImage={setImage}/>
          <LocationSelector
            onLocation={setLocation}
          />
          <Button
            title="Grabar direccion"
            color={COLORS.MAROON}
            onPress={handleSave}
          />
        </View>
      </ScrollView>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: "Fredoka",
    marginTop: 40,
    fontSize: 25,
    alignItems: 'center',
  },
  container: {
    padding: 10,
    marginTop: 20,
    margin: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  input: {
    height: 20,
    margin: 12,
    borderBottomWidth: 1,
    color: '#ccc',
  },
  label: {
    fontFamily: "Fredoka",
    fontSize: 20,
  },
})

export default DogScreen