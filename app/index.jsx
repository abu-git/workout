import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, FlatList } from 'react-native'
import exercises from '../assets/data/exercises.json'
import ExerciseListItem from '../components/ExerciseListItem'


export default function ExcersisesScreen() {

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />

            <FlatList
                data={exercises}
                contentContainerStyle={{ gap: 5 }}
                keyExtractor={(item, index) => item.name + index}
                renderItem={({ item }) => <ExerciseListItem item={item} /> }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: 'ghostwhite',
      
      justifyContent: 'center',
      padding: 10,
    }
});