const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    
        picture: String,
        title: String,
        recipe: String

    
})

const Recipes = mongoose.model('Recipes', recipeSchema)

module.exports = Recipes