import mongoose from 'mongoose'
import { Tweets } from '../models/Tweet'

export const createTweet = (
  id: String,
  created_at: Date,
  text: String,
  author_id: String,
) => {
  Tweets.create(
    {
      id: id,
      created_at: created_at,
      text: text,
      author_id: author_id,
    },
    function (err, tweet) {
      if (err) {
        console.log('Error:', err)
      } else {
        console.log('Saved the tweet:', tweet)
      }
    },
  )
}
