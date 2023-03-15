require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const Recipes = require('./models/recipeschema')


const mongoURI = process.env.MONGODB
const db = mongoose.connection

app.use(express.json())
app.use(cors())

app.get('/recipes', async (req, res) => {
    const allRecipes = await Recipes.find({})
    res.json(allRecipes)
})

app.post('/recipes', async (req, res) => {
    const newRecipe = await Recipes.create(req.body)
    res.json(newRecipe)
})

app.put('/recipes/:id', async (req, res) => {
    const updatedRecipe = await Recipes.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.json(updatedRecipe)
})

app.delete('/recipes/:id', async (req, res) => {
    const deleteRecipe = await Recipes.findByIdAndRemove(req.params.id)
    res.json(deleteRecipe)
})

app.listen(3000, () => {
    console.log('listening...')
})




mongoose.connect(mongoURI)
.then(()=>{
    console.log("Connected to Atlas")
})
