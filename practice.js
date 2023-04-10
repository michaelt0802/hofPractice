// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var total = 0;

  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      total++;
    }
  });

  return total;

};

// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, user) {
  var userArray = [];

  _.each(tweets, function(tweet, index, collection) {
    if (tweet['user'] === user) {
      userArray.push(tweet);
    }
  });

  return userArray;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {

  return _.filter(fruits, function(fruit) { return fruit === targetFruit; });

};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {

  return _.filter(fruits, function(fruit) { return fruit[0] === letter; });

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  return _.filter(desserts, function(dessert) { return dessert['type'] === 'cookie'; });

};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  return _.filter(tweets, function(tweet) { return tweet['user'] === user; });

};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  return _.map(fruits, function(fruit) { return fruit.toUpperCase(); });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {
  var map = _.map(desserts, function(dessert) {
    if (dessert['ingredients'].includes('flour') === true) {
      dessert['glutenFree'] = false;
    } else {
      dessert['glutenFree'] = true;
    }

    return dessert;
  });

  return map;
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {

  return _.map(tweets, function(tweet) { return tweet['message']; });

};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function (groceries, coupon) {

  var map = _.map (groceries, function(item) {
    var price = item['price'].replace(/^\D+/g, '');
    item['salePrice'] = '$' + (Math.round((price * (1 - coupon) * 100)) / 100).toString();

    return item;
  });

  return map;

};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {

  var total = _.reduce(products, function(memo, item) {
    var price = parseFloat(item['price'].match(/\d+(?:\.\d+)?/g)) * 100;

    return memo + price;
  }, 0);

  return total / 100;

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {

  var dessertsSeen = [];
  var output = _.reduce(desserts, function(memo, dessert) {
    var type = dessert['type'];
    if (dessertsSeen.includes(type) === false) {
      dessertsSeen.push(type);
      memo[type] = 1;
    } else {
      memo[type] += 1;
    }

    return memo;
  }, {});

  return output;

};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {

  var output = _.reduce(tweets, function(memo, tweet) {
    var user = tweet['user'];

    if (memo[user] === undefined) {
      memo[user] = 1;
    } else {
      memo[user] += 1;
    }

    return memo;
  }, {});

  return output;

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {
  var output = _.reduce(movies, function(memo, movie) {

    if (1990 < movie['releaseYear'] && movie['releaseYear'] < 2000) {
      memo.push(movie['title']);
    }

    return memo;
  }, []);

  return output;

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {
  console.log(movies);

  var output = _.reduce(movies, function(memo, movie) {
    if (movie['runtime'] < timeLimit) {
      memo = true;
    }

    return memo;
  }, false);

  return output;
};
