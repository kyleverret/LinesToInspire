
$(document).ready(function(){
  replaceQuote();
  $("body,.btn").css({"backgroundColor": colorPick()});
});

  $("#newQuote").click(function(){
    replaceQuote();
      $("body,.btn").css({"backgroundColor": colorPick()});
    });


//replaceQuote changes the text of the quote, source, and what is sent to Twitter.

function replaceQuote(){
    var ranQuote = listCall(myQuotes);
    $("#quote").text(function(){
      return ("\"" + ranQuote.quote + "\"");
    });
  $("#author").text(function(){
    return ("- " + ranQuote.source);
  });
  $("#tweetit").attr("href", "https://twitter.com/intent/tweet?text="+"\"" + ranQuote.quote + "\"" + "  - " + ranQuote.source +"\"");
}


// listCall takes an array and returns a random key-value pair from the array.

function listCall(callList){
  var arrayNum = Math.floor(Math.random()*(callList.length));
  return callList[arrayNum];
}

//create a random RGB color;

function colorPick(){
  var x = randomNum(255);
  var y = randomNum(255);
  var z = randomNum(255);
  if (x == 255 & y == 255 & z == 255) {x -= 50};
  return 'rgb(' + x + ', ' + y + ', ' + z + ')';
}

//create a random number with a maximum value parameter;
function randomNum(max){
      return Math.floor(Math.random()*max);
    }



//array containing quotes and source. Additional key value pairs may be added. The listCall function takes the length of the myQuotes array to determine which random quote to choose.

var myQuotes = [
  {
    quote: "If you can't count, cut.",
    source: "Jack Verret"
  },
  {
  quote: "One man's trash is another man's treasure.",
    source: "one of my Dad's favorite quotes."
  },
  {
  quote: "An eye for an eye leaves the whole world blind.",
    source: "Ghandi"
  },
  {
  quote: "It is what it is.",
    source:  "common saying in small-town Texas courthouses."
  },
  {
  quote: "Never judge a man by his dog, only by whether he has one.",
    source: "K. Verret"
  },
  {
  quote: "You can't always get what you want, but if you try sometimes, you just might find, you get what you need.",
    source: "Rolling Stones"
  },
  {
  quote: "Do not worry about tomorrow, tomorrow has enough worry for itself.",
    source: "Jesus Christ"
  },
  {  
    quote: "Do not seek to follow in the footsteps of sages; seek what they sought.",
    source: "Matsuo Basho"
  },
    {  
    quote: "All component things in the world are changeable.",
    source: "Siddhartha Gautama (Buddha)"
  }
];

