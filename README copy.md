# Final Project : zkNews

This project on which news and articles are published by its registered members, aims at giving users confidence to submit and to follow the news and/or articles as anonymously by help of Semaphore and ZKP in order to serve freedom of speech within a secure platform. There is also a reward mechanism which supports the survival of the system. And all users are able to encourage members publisihing on the system to do their job better.

- Demo video: https://www.youtube.com/watch?v=LbdWAydgKjQ
- Testnet site: https://testnet.zkask.one
- 'Live'' site: https://zkask.one

# Features

## Post news

- create AMA sessions which may be public or secured with an access code (ie. audience would need an access code to join the AMA session - useful for study groups where only students can join, or corporate groups where only employees can join)
- update status of the AMA session
  - start: audience may join and post questions
  - pause: audience may join but cannot post questions
  - resume: audience may post questions
  - end: session has ended
- list created AMA sessions

## Like/Dislike the posts

- list AMA sessions that are paused/active (ie. ready for audiences to join)
- join a public session or enter access code to join a private AMA session
- post a question to an AMA session anonymously
- vote on other audience's questions anonymously

## Fund the posts

- list AMA sessions that are paused/active (ie. ready for audiences to join)
- join a public session or enter access code to join a private AMA session
- post a question to an AMA session anonymously
- vote on other audience's questions anonymously

## Withdrawal the funds

# Testing

`yarn test`

<img src="https://github.com/violetwee/zkAsk/blob/main/screenshots/tests.png" width="800px" height="auto"/>

# Setup database (mysql)

Create two tables: ama_sessions and ama_questions. Run the create scripts in /scripts folder.

Rename .env.example to .env and input the database connection properties.

# Test with Frontend UI

- `yarn install` to install all dependencies
- `yarn dev` to start a local node. Import a few of the test accounts into Metamask for testing purposes.
- `yarn deploy --network localhost` to deploy the smart contracts to the local node.

<img src="https://github.com/violetwee/zkAsk/blob/main/screenshots/frontend.png" width="800px" height="auto"/>

Copy the AMA contract address to lib/config.json

Then, browse to http://localhost:3000 to access the frontend UI.

# Deploy to Harmony Testnet

Run `yarn deploy --network testnet`

# Project Resources

Project template is forked from Semaphore Boilerplate.

- [Semaphore Boilerplate](https://github.com/cedoor/semaphore-boilerplate)
- [Semaphore](https://github.com/appliedzkp/semaphore)
- [Hardhat](https://hardhat.org/)
- [Solidity](https://docs.soliditylang.org/en/v0.8.13/)
- [Harmony Testnet Faucet](https://faucet.pops.one/)
