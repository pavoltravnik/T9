# T9

T9 fullstack app

![](https://github.com/pavoltravnik/T9/blob/master/image.png)

## Requirements

- [Docker CE](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Set up environment with [nginx](https://www.nginx.com/) and [certbot](https://certbot.eff.org/)

## Backend
Backend service is build up by docker simply by running comand:

```
docker-compose up -d
```

Tests:

```
cd backend; npm i; npm run test
```


### Functions

**/api/cartesian**

Backend returns a cartesian product of given string to limited length of 10 numeric symbols.
Given example is made solely based on given instructions and handling its limitations.

**/api/dictionary**

Search based on javascript dictionary.

**Credits:**

- [Cartesian product](https://eddmann.com/posts/cartesian-product-in-javascript/)
- [English UK spelling dictionary in UTF-8.](https://github.com/wooorm/dictionaries/tree/master/dictionaries/en-GB)


## Frontend
Simple React Native app, which is connected to backend.

Configuration possible to change in file [config.js](https://github.com/pavoltravnik/T9/blob/master/frontend/config.js)

Tests:

```
cd frontend; npm i; npm run test
```