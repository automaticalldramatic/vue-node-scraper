# Vue + Node scraper

> A web scraper built on Vue.js using cheerio and express on a node server for APIs

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8090
npm run dev

# build for production with minification
npm run build

# start the node server
npm run server

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Project Details

The project is built using the following technologies -
* VueJS as a front end framework
* Cheerio as a library to parse the DOM
* Express as the framework for writing server side code
* NodeJS to run the API server

### API

The code for the API resides in the `./server` directory. The directory has been structured for a small application that requires separation of concern and is only required to serve APIs or to carry out queued jobs. The directory structure is -

```
server/
|__ api/
|____controllers/
|____ helpers/
|____ models/
|____ routes.js
|___config
|___lib
|____scraper
|______index.js
|______document.js
|___server.js

```

The inflection point for the app is server.js which sets the app environment and starts an API server. Now, the routes define all the routes and call a controller based on the route matched. These controllers are places in `./conroller`. Controllers in turn use `Models` to get data, which use `helpers` to format data

I have abstracted away the logic to fetch a URL to scrape. The library `Scraper` written takes care of queueing, sanitizing arguments and a bunch of other things along with exposing the `Cheerio` interface. This could then be used by Helpers to mutate data. This data is returned to controllers to be returned by the API.

There is basic error handling done to handle `OPTIONS` header and to gracefully throw an error for not matching routes and other problems you could face with an API.

#### Assumptions taken with the API

* The anchors scraped on the page are only for one level. There is no follow setting to recursively crawl links and start building a map in some sort of a datastore
* There is no database configured. There are a bunch of datastores that could be used to store this sort of data, based on what we plan to do with it
* Assuming the app is deployed on Heorku / AWS / GCP - `process.env.PORT` will be available then
* There is a queue setup but this is nowhere close to a production setup where there would be auto scale clusters with some process manager (read PM2 / forever)

----

### FrontEnd

The front end is built using the shiny new framework Vue.js

This is the structure for the front end.

```
src/
|__ api/
|__ assets/
|__ components/
|__ router/
|__ store/
|__ App.vue/
|__ main.js/

```

The app instantiates from `main.js`. We create a `new Vue` instance and load it with our routes and store. Store is a flux-like way to do state management. Everything on the app is attached to a state, which is changed using mutators and actions. All API calls go through actions, which in turn call a mutator to mutate the state of the app, which in turn triggers changes on the template. Each template is scoped with its own styles.

The code for mutators and actions can be found in `store/` - index.js creates a new instance of Vuex store and includes getters (which are used by Vue components to retrieve data) and mutators / actions which are used to update data.

----

### Tests

I have not written extensive test cases, but just for the purpose to demo how unit tests and e2e tests should work.

Tests could be found under `test/`. There are karma unit tests under the `unit/` directory and e2e tests using Nightwatch under the `e2e` directory. Karma can use Phantom or Chrome or another web-driver, please modify the config in karma.conf.js as per your requirement.

Also, Nightwatch right now is using Selenium.

My e2e test, for demo purposes just tests the Home page and see if a text is displayed on the screen for e2e
My unit test, loads the Home component and uses the $el selector to select a component and verifies if a text exists.

----

### Further Improvements

* The parser cannot parse javascript enabled pages right now, we could use PhantomJS or another web driver to parse dynamic pages
* We can have the node app config based and load the config from environment variables.
* We can scrape much more data and start dumping it in a data store. Which can later be used to run a map-reduce job to retrieve some insights and create a page rank sort of a feature
* Write extensive test cases covering data returned from API tied in to e2e tests.

----

This was a fun project. Feel free to write to me on mailme@rizwaniqbal.com in case of doubts / queries.




