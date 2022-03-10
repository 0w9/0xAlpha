const axios = require("axios")
const express = require("express");
const fs = require("fs");
const mongoose = require('mongoose');
const pino = require("pino");
const TwitterModel = require("./TwitterModel");
let twitterConfig = JSON.parse(fs.readFileSync('/Users/lennard/nft-portfolio-management-1/backend/scrapers/config.json'));
const {
	performance
} = require('perf_hooks');

const logger = pino({
	transport: {
		target: 'pino-pretty',
		options: {
			colorize: 'true'
		}
	},
});

async function fetchTweets() {
	var startTime = performance.now()
	mongoose.connect(twitterConfig.mongoDB_uri);

	try {
		const ids = fs.readFileSync('/Users/lennard/nft-portfolio-management-1/backend/scrapers/id_collection.json');
		const id_json = JSON.parse(ids);

		const twitter_id_arr = Object.keys(id_json).map(key => id_json[key][0].twitter);

		for (let i = 0; i < twitter_id_arr.length; i++) {
			let uri = `https://api.twitter.com/2/users/${twitter_id_arr[i]}/tweets?exclude=replies,retweets&tweet.fields=id,created_at,text,author_id`
			const res = await axios.get(uri, {
				headers: {
					'Authorization': twitterConfig.bearer_token
				}
			}).then(res => res.data);

			let tweetsMap = res.data ?.map(x => ({
				id: x.id,
				created_at: x.created_at,
				text: x.text.replace(/(\r\n|\n|\r)/gm, " "),
				author_id: x.author_id
			}));

			for await (const tweet of tweetsMap) {
				const countQuery = TwitterModel.where({
					text: tweet.text
				}).count();

				if (countQuery !== 0) {
					const tweetModel = TwitterModel({
						id: tweet.id,
						created_at: tweet.created_at,
						text: tweet.text,
						author_id: tweet.author_id
					});
					const res = await tweetModel.save();
					logger.info(`Created a Tweet object with the ID: ${res._id} | Saved to "tweets" collection.`);
				}
			}

			var endTime = performance.now()
			logger.info(`Fetched all tweets in ${endTime - startTime} ms!`)
		}
	} catch (error) {
		console.log(`Error fetching tweets: ${error}`);
		var endTime = performance.now()
	}
}

module.exports = fetchTweets;