const axios = require("axios")
const express = require("express");
const fs = require("fs");
const mongoose = require('mongoose');
const pino = require("pino");

let twitterConfig = JSON.parse(fs.readFileSync('/Users/lennard/nft-portfolio-management-1/backend/scrapers/config.json'));

//const logger = pino({transport: {target: 'pino-pretty',options: {colorize: 'true'}},});

async function getTweetsById(user_id) {
		let uri = `https://api.twitter.com/2/users/${user_id}/tweets?exclude=replies,retweets&tweet.fields=id,created_at,text,author_id`
	    const res = await axios.get(uri, {headers: {'Authorization': twitterConfig.bearer_token}}).then(res => res.data);

		let tweetsMap = []
		tweetsMap = res.data?.map(x => ({id: x.id, created_at: x.created_at, text: x.text.replace(/(\r\n|\n|\r)/gm, " "), author_id: x.author_id})); 
	return tweetsMap;
}

async function fetchTweets() {
    console.time("Fetch tweets");
	
	const ids = fs.readFileSync('/Users/lennard/nft-portfolio-management-1/backend/scrapers/id_collection.json');
	const id_json = JSON.parse(ids);

	const twitter_id_arr = Object.keys(id_json).map(key => id_json[key][0].twitter);	
	const all_tweets = [];

	for(let i = 0; i < twitter_id_arr.length; i++) {
		let uri = `https://api.twitter.com/2/users/${twitter_id_arr[i]}/tweets?exclude=replies,retweets&tweet.fields=id,created_at,text,author_id`
	    const res = await axios.get(uri, {headers: {'Authorization': twitterConfig.bearer_token}}).then(res => res.data);

		let tweetsMap = res.data?.map(x => ({id: x.id, created_at: x.created_at, text: x.text.replace(/(\r\n|\n|\r)/gm, " "), author_id: x.author_id})); 
		all_tweets.push(tweetsMap);
	}
	console.log(all_tweets);

	console.timeEnd("Fetch tweets");
	
}

module.exports = fetchTweets;
