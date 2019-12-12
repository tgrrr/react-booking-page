# React Booking Page

[![Netlify Status](https://api.netlify.com/api/v1/badges/834c41c1-c2c5-4c77-9e17-f2b1394279f3/deploy-status)](https://app.netlify.com/sites/reactbookingpage/deploys)

Live demo: [https://reactbookingpage.tgrrr.com/](https://reactbookingpage.tgrrr.com/)

## [**Origin story**](http://github.com/tgrrr/react-booking-page)

```bash
git clone git@github.com:tgrrr/react-booking-page.git
```

## How to build

```bash
docker build . -t tgrrr/cra-docker
```

### How to run with Docker

- Pull `create-react-app` from `docker`

```bash
docker pull tgrrr/cra-docker
docker run -p 8080:80 tgrrr/cra-docker
```

**Note:** including `-p 8080:80` lets us use `localhost:8080`, rather than assigning a random port

### How to run with `npm` or `yarn`

```bash
npm install
npm start
```

```bash
yarn start
```

---

<details>
<summary>TODO</summary>
<br>

- [ ] loading skeletons
- [ ] load table in two parts: one after initial booking loads, then again after product calls
- [ ] Currency and number format: eg https://www.npmjs.com/package/react-number-format
- [ ] Move these todo's into BDD scenarios

### Task Scenario

- [ ] ![Bookings Table Design Mockup](https://user-images.githubusercontent.com/908155/43172577-41114f3c-8ff3-11e8-849a-18c6cbb8f1f0.png)

- [x] Using the API, which returns booking data
  - [x] renders the bookings
  - [ ] grouped by seller
  - [x] as human friendly tables

#### Requirements

- [x] Design must align closely with the high-fidelity mock-up above (base font is 12px Roboto Light).
- [ ] Bookings should be grouped by seller, displaying the seller's name, with each seller having their own table.
- [ ] Bookings in the past, i.e. end date of the booking is before today, should **not** be visible, if all bookings for a seller are in the past an *"no active bookings" placeholder* should appear.
- [ ] Bookings that are 'live', i.e. today is **between** the start and end dates, should be highlighted **green**
- [ ] Booking should be sorted by start date

The table should have the following columns and formats:

- [x] `ID` - first five characters of **booking id**, all upper-case e.g. 'c703e947-f39a-4143-8fb4-5854fa4412f3' as `'C703E'`
- [x] `Product Name` - as is from the **product** API resource.
- [x] `Quantity` - a *formatted string* representation of the **booking quantity** number e.g. 150000 as `'150,000'`
- [x] `Rate` - a *formatted string*, currency representation of the **product rate** number e.g. 3050 as `'$30.50'`
- [x] `Cost` - a *formatted string*, currency representation of the **booking cost**, which is a calculation of **product rate**, *charged per thousand*, multiplied by **booking quantity** e.g. a rate of 3500, and a quantity of 200000 as `'$7,000'`
- [x] <u>Optionally</u> add Start/End Date columns.
</details>

<details>
<summary>API details:</summary>
<br>

### API

- [x] Make `get` requests to [`https://blooming-fortress-38880.herokuapp.com/`](https://blooming-fortress-38880.herokuapp.com/).

The API is returned as a JSON object for each resource like so:

```typescript
{
  size:       number, // length of the data array or 1 if an object
  data:       Resource[] | Resource, // the resouce as listed below
  updatedAt?: string, // ISO8601 date string. ONLY on the booking resource
}
```

#### Bookings

`/bookings`
Returns an array of booking objects

`/bookings/:id`
Returns a single booking object by id

```typescript
{
  id:        string, // uuidv4 hash e.g 'b1254f94-d717-4dc4-b7f6-06b3c00d77a1'
  name:      string, // buyers's organisation name, e.g. 'Adslot'
  quantity:  number, // whole number booked quantity e.g. 150000
  startDate: string, // an ISO8601 string e.g. '2019-01-25T02:00:00.000Z'
  endDate:   string, // an ISO8601 string e.g. '2019-01-25T02:00:00.000Z'
  productId: string, // uuidv4 hash id of the booked product e.g '18db1481-0932-4706-a88e-187ddcc41017'
}
```

> The bookings API will also return an `updatedAt` (as an ISO8601 string) attribute.

#### Products

`/products`
Returns an array of product objects

`/products/:id`
Returns a single product object by id

```typescript
{
  id:       string, // uuidv4 hash e.g '18db1481-0932-4706-a88e-187ddcc41017'
  name:     string, // e.g. 'Homepage Banner Ad'
  rate:     number, // rate is the cent amount per 1000 booked quantity, e.g. 5000 is '$50.00'
  sellerId: string, // uuidv4 hash id of the seller whom owns the product e.g 'c703e947-f39a-4143-8fb4-5854fa4412f3'
}
```

#### Sellers
`/sellers`
Returns an array of seller objects

`/sellers/:id`
Returns a single seller object by id

```typescript
{
  id:   string, // uuidv4 hash e.g 'c703e947-f39a-4143-8fb4-5854fa4412f3'
  name: string, // seller's organisation name, e.g. 'Adslot'
}
```

</details>


<details>
<summary>Stack</summary>
<br>
## State:

* `React` with context API and/or `Redux`

## Style

- [x] `CSS` = use CSS modules
* JavaScript in `ES6`, `ES5`, `TypeScript` or `CoffeeScript`

## Packages: 

* `DayJS` or `moment`
* `Bootstrap`
* `lodash` or `underscore`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Notes: [Create React App](./docs/CREATE-REACT-APP.md)

</details>

