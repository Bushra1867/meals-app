import React from "react";
import MealItem from "../Components/MealItem";
import { FlatList, View, StyleSheet } from 'react-native'


function MealList({items}) {
    function renderMealHandler(itemData) {
        const item = itemData.item;
        const MealProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }
        return (
            <MealItem {...MealProps} />
        );


    }
    return(
        <View style={styles.mealView}>
            <FlatList 
             data={items}
             keyExtractor={(item) => item.id }
             renderItem={renderMealHandler}

             />
        </View>
    )


}

export default MealList;

const styles = StyleSheet.create({
    mealView : {
        flex: 1,
        padding: 15,

    }
});