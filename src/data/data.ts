import { Category, RecipeType } from "../models";

export default {
  categories: Object.values(Category),
  types: Object.values(RecipeType),
  recepies: [
    {
      name: "Pancakes",
      desc: "Fast to make, fast to eat",
      categories: [Category.Cozy],
      types: [RecipeType.Dinner],
    },
    {
      name: "Chicken tikka",
      desc: "Juicy and tasty",
      categories: [Category.Fast],
      types: [RecipeType.Dinner],
    },
    {
      name: "Hamburger",
      desc: "To the whole family",
      categories: [Category.Fast, Category.Cozy],
      types: [RecipeType.Lunch],
    },
    {
      name: "Omelett",
      desc: "To the whole family",
      categories: [Category.Fast, Category.Healthy],
      types: [RecipeType.Breakfast],
    },
    {
      name: "Creamy pasta",
      desc: "Proper evening food",
      categories: [Category.Cozy],
      types: [RecipeType.Dinner],
    },
    {
      name: "Fish & ships",
      desc: "When you are out of time",
      categories: [Category.Fast],
      types: [RecipeType.Dinner, RecipeType.Lunch],
    },
    {
      name: "Fish soup",
      desc: "Perfect for the date",
      categories: [Category.Fast],
      types: [RecipeType.Dinner, RecipeType.Lunch],
    },
    {
      name: "Crayfish",
      desc: "Perfect for the date",
      categories: [Category.Cozy, Category.Healthy],
      types: [RecipeType.Dinner, RecipeType.Lunch],
    },
    {
      name: "Crumble",
      desc: "Enjoy all year",
      categories: [Category.Cozy],
      types: [RecipeType.Dinner, RecipeType.Lunch],
    },
    {
      name: "Baked potato",
      desc: "Perfect your spud technique then pile our filling ideas high.",
      categories: [Category.Fast, Category.Cozy],
      types: [RecipeType.Dinner],
    },
    {
      name: "Lasagna",
      desc: "The perfect italian lasagna!",
      categories: [Category.Healthy, Category.Vegan],
      types: [RecipeType.Dinner]
    }
  ],
}
