//REACT
import { StyleSheet, Text, View, FlatList } from 'react-native'

//REDUX
import { useSelector, useDispatch } from 'react-redux'
import { selectedCategory  } from '../../store/actions/category.action'

//COMPONENT
import GridItem from '../../components/GrifItem'

const DogCategoriesScreen = ({navigation}) => {

  const categories = useSelector(state => state.categories.categories)
  const dispatch = useDispatch()

  const handleSelectedCategory = (item) => {
    dispatch(selectedCategory(item.id))
    navigation.navigate("Dog")
  }

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  )

  return (
    <>
      <View style={styles.screen}>
        <Text style={styles.title}>Dogs</Text>
      </View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: "Fredoka",
    margin: 10,
    fontSize: 50,
  },
})

export default DogCategoriesScreen