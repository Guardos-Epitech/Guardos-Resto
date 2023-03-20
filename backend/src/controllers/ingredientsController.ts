import mongoose from 'mongoose';

import {ingredientsSchema} from '../models/ingredientsInterfaces';

export async function createNewIngredient(name: string, id: number) {
  const IngredientSchema = mongoose.model('IngredientsMVP',
    ingredientsSchema);
  const upload = new IngredientSchema({
    _id: id,
    name: name,
  });
  await upload.save();
  console.log('Ingredient ' + name + ' saved ' + ' with id ' + id);
}

export async function getAllIngredients() {
  const IngredientSchema = mongoose.model('IngredientsMVP',
    ingredientsSchema);
  return IngredientSchema.find();
}

export async function getIngredientByName(name: string) {
  const IngredientSchema = mongoose.model('IngredientsMVP',
    ingredientsSchema);
  return IngredientSchema.find({name: name});

}

export async function deleteIngredient(name: string, id: number) {
  const IngredientSchema = mongoose.model('IngredientsMVP',
    ingredientsSchema);
  await IngredientSchema.deleteOne({_id: id});
  console.log('Ingredient ' + name + ' deleted ' + ' with id ' + id);

}

export async function findMaxIndexIngredients() {
  const IngredientSchema = mongoose.model('IngredientsMVP',
    ingredientsSchema);
  const ingredients = await IngredientSchema.find()
    .sort({_id: -1})
    .limit(1);
  if (ingredients.length === 0) return 0;
  return ingredients[0]._id;
}
