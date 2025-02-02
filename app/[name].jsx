import { Text, View, StyleSheet, ScrollView } from "react-native"
import { useLocalSearchParams, Stack } from "expo-router"
import exercises from '../assets/data/exercises.json'
import { useState } from "react"


export default function ExerciseDetailsScreen(){
    const params = useLocalSearchParams()
    
    const exercise = exercises.find(item => item.name === params.name)

    const [seeMoreInstruction, setSeeMoreInstruction] = useState(false)

    if(!exercise){
        return(
            <Text>Excercise not found</Text>
        )
    }

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{ title: exercise.name}} />
            <View style={styles.panel}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseSubtitle}>
                    <Text style={styles.subValue}>{exercise.muscle}</Text> | <Text style={styles.subValue}>{exercise.equipment}</Text> 
                </Text>
            </View>
            
            <View style={styles.panel}>
                <Text style={styles.instructions} numberOfLines={seeMoreInstruction ? 0 : 3}>{exercise.instructions}</Text>
                <Text onPress={() => setSeeMoreInstruction(!seeMoreInstruction)} style={styles.seeMore}>{seeMoreInstruction ? 'See less' : 'See More'}</Text>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 10
    },  
    exerciseName: {
        fontSize: 20, 
        fontWeight: '500'
    },
    exerciseSubtitle: {
        color: 'dimgray',
    },
    subValue: {
        textTransform: 'capitalize'
    },
    instructions: {
        fontSize: 16,
        lineHeight: 22
    },
    panel: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    seeMore: {
        alignSelf: 'center',
        padding: 5,
        fontWeight: '600',
        color: 'gray'
    }
})