import { Tweets } from '../models/Tweet'

export const queryTweets = async (id) => {
  return await Tweets.findById(id).exec()
}
