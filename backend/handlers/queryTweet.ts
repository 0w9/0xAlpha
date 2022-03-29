import { Tweet } from '../models/Tweet'

export const queryTweets = async (id) => {
  return await Tweet.findById(id).exec()
}
