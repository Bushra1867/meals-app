import React from 'react';
import { CATEGORIES } from '../data/categries-data';
import { FlatList } from 'react-native';
import CategoryGrideView from '../Components/CategoryGrideView';
function CategoriesScreen ({navigation}) {
  function pressHandler(itemData){
    navigation.navigate('MealView', {categoryId: itemData.item.id})
  }
  function RenderItemFtnc (itemData){
    return <CategoryGrideView title={itemData.item.title} color ={itemData.item.color} 
    onPress={pressHandler.bind(this,itemData)}/>
  }
 
  return (
   
    <FlatList 
        data= {CATEGORIES}
        keyExtractor={(item)=> {item.id}}
        renderItem={RenderItemFtnc}
        numColumns={2}/>
  
  )

}

export default CategoriesScreen;
