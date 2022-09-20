## Wallet System

The Wallet system is basic application to handle wallet transanctions and other stuffs:

- creating new wallet
- make transactions on any specific wallet
- get all the details of wallet on real time

## Heroku Info
Web URL: https://wallet-app-demo.herokuapp.com/
Git URL: https://git.heroku.com/wallet-app-demo.git

## Requirements

* Node 14
* Git
* Mongo DB
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
type: Post
body:{
    name: String,
    amount: Number
}


```bash
/transact/:walletId
```
To perform any transaction on given wallet id
type: Post
body:{
    amount: Number,
    description: String
}

```bash
/transactions
```
To get the data of transactions
type: Get
query params: walletId, skip:Number, limit:Number 

```bash
/wallet/:id
```
To get the details of wallet
type: Get

