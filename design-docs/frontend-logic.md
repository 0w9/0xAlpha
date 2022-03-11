# Task 1
Get the collection off eligible NFTs from a users wallet
- Implementation: Use the Opensea API endpoint to get the list of all NFTs in a users' wallet then check to see if they have any of the eligible NFT projects. 

# Task  2
Deploy backend scrapper as an API
- Scrapper should send data to the db
- The api should fetch the data from the db 
# Task 3
Would like to receive annoucements from discord, twitter, and email for each
NFT project and display the announcements
- Using the backend scrapper store the data in mongodb 
- Structure: 
    - /announcements
    - /announcements/<nft-group-id>
    - /announcements/<nft-group-id>/tweets
    - /announcements/<nft-group-id>/email
    - /announcements/<nft-group-id>/discord-announcements
    - /announcements/<nft-group-id>/tweets/<tweet-id>
    - /announcements/<nft-group-id>/email/<email-id>
    - /announcements/<nft-group-id>/discord-announcements/<discord-announcements-id>



# Task 4
Be able to naviagte to a single page the displays annoucements for a singular
NFT project
- Implementaion: Use the api routes to retrieve the announcemnts for a specific nft project 

# Task 5 
Be able to view a alert indicating the number of announcements that the user
hasn't viewed, in the form of the notification bell
- Implementation: Have a property that checks if a user has looked at an announcement 

# Models
