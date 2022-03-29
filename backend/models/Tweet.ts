import mongoose from 'mongoose'

// make schema with params
const tweetSchema = new mongoose.Schema({
  id: String,
  created_at: Date,
  text: String,
  author_id: String,
})

// make model
export const Tweet = mongoose.model('Tweet', tweetSchema)
