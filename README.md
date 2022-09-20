## Wallet System

The Wallet system is basic application to handle wallet transanctions and other stuffs:

- creating new wallet
- make transactions on any specific wallet
- get all the details of wallet on real time

The app demonstrates how decoupling content from its presentation enables greater flexibility and facilitates shipping higher quality software more quickly.

<a href="https://the-example-app-nodejs.herokuapp.com/" target="_blank"><img src="https://images.contentful.com/qz0n5cdakyl9/4GZmvrdodGM6CksMCkkAEq/700a527b8203d4d3ccd3c303c5b3e2aa/the-example-app.png" alt="Screenshot of the example app"/></a>

You can see a hosted version of `The node.js example app` on <a href="https://the-example-app-nodejs.contentful.com/" target="_blank">Heroku</a>.
## Requirements

* Node 14
* Git
## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/ashu2010sn/walletsystem.git
cd walletsystem
```

```bash
yarn install
```

## Steps to start the application

To start the express server, follow these Steps

```bash
cp .env.example .env
```

update your credentials in .env file

```bash
yran start
```

Open [http://localhost:3000](http://localhost:3000) and take a look around.


## Endpoints

```bash
/setup
```
To setup a new wallet and get the id of new wallet

```bash
/transact/:walletId
```
To perform any transaction on given wallet id

```bash
/transactions
```
query params: walletId, skip:Number, limit:Number 
To get the data of transactions

```bash
/wallet/:id
```
To get the details of wallet
