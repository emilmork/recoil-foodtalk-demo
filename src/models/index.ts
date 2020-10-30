export enum Category {
    Cozy = "Cozy", Fast = "Fast", Healthy = "Healthy", Vegan = "Vegan"
}

export enum RecipeType {
    Breakfast = "Breakfast", Dinner = "Dinner", Lunch = "Lunch"
}

export type Recipe = {
    name: string,
    desc: string,
    categories: Category[],
    types: RecipeType[],
}

export type RecipeFilter = {
    selectedCategories: Category[],
    selectedTypes: RecipeType[],
    search: string
}

