var quotes;

function quoteSetup() {
  quotes = [
    ['My Name is Jim, most people call me...Jim\"',
      'Jim \"The Waco Kid\", Blazing Saddles'
    ],
    ['Mongo only pawn...in game of life.',
      'Mongo, Blazing Saddles'
    ],
    ['I must have killed more men than Cecil B DeMille.',
      'Jim, Blazing Saddles'
    ],
    ['Excuse me while I whip this out.',
      'Bart, Blazing Saddles'
    ],
    ['Tragedy is when I cut my finger. Comedy is when you fall into an open sewer and die.',
      'Mel Brooks'
    ],
    ['If God wanted us to fly, He would have given us tickets.',
      'Mel Brooks'
    ],
    ['Bad taste is simply saying the truth before it should be said.',
      'Mel Brooks'
    ],
    ['Well, just being stupid and politically incorrect doesn\'t work. You can be politically incorrect if you\'re smart.',
      'Mel Brooks'
    ],
    ['How could this happen? I was so careful. I picked the wrong play, the wrong director, the wrong cast. Where did I go right?',
      'Max Bialystock, The Producers'
    ],
    ['Ah, Bialystock and Bloom, I presume! Heh heh, forgive the pun!',
      'Roger De Bris, The Producers'
    ],
    ['Don\'t be stupid, be a smarty. Come and join the Nazi party.',
      'Singer, The Producers'
    ],
    ['Wait Master, it might be dangerous ..., you go first.',
      'Igor, Young Frankenstein'
    ],
    ['Alive! It\'s alive! It\'s alive!',
      'Dr. Frederick Frankenstein'
    ],
    ['Remember the famous Russian proverb: "The hungrier you get, the tastier the meal." On the other hand, the French have a proverb: merde!',
      'Ostap Bender, The Twelve Chairs'
    ],
    ['[remembering his former master Vorobyaninov] I loved him... he hardly ever beat us!',
      'Tikon, The Twelve chairs'
    ],
    ['Ladies and Gentlemen: In the interest of clarity and sanity, the rest of this movie will not be in Polish.',
      'Announcer, To Be or Not To Be'
    ],
    ['What he did to Hamlet, we are now doing to Poland.',
      'Colonel Erhardt, To Be or Not To Be'
    ],
    ['[As Hitler] All I want is peace. Peace! Peace! A little piece of Poland, a little piece of France.',
      'Frederick Bronski, To Be or Not To Be'
    ],
    ['Shut up, I\'m having a rhetorical conversation!',
      'Max Bialystock, The Producers'
    ],
    ['It\’s pronounced "Fronkensteen"',
      'Dr. Frankenstein, Young Frankenstein'
    ],
    ['What hump?',
      'Igor, Young Frankenstein'
    ],
    ['God has given us these fifteen—  Oy! Ten — ten commandments!',
      'Moses, History of the World Part 1'
    ],
    ['My grandfather used to work for your grandfather. Of course the rates have gone up.',
      'Igor, Young Frankenstein'
    ],
    ['I understand now! It\'s not heights I\'m afraid of... it\'s PARENTS!',
      'Dr. Vicktor Lillolman, High Anxiety'
    ],
    ['I\'m Josephus, and I\'m the main course over at the Colosseum!',
      'History of the World Part 1'
    ],
    ['Oh, thank you doctor', 
     'Inga, Young Frankenstein'
    ],
    ['Good night, Herr Doktor. Good night, Frau Blücher. (horses whinny)',
      "Frau Blücher, Dr. Frederick Frankenstein"
    ],
    ['Candygram for Mongo',
     'Bart, Blazing Saddles'
    ]
  ];
};
quoteSetup();

var colors = [];

// random color patterns
function colorSetup() {
  colors.push(['#4ABDAC', '#FC4A1A', '#F7B733', '#706060']);
  colors.push(['#FC4A1A', '#F7B733', '#706060', '#4ABDAC']);
  colors.push(['#F7B733', '#706060', '#4ABDAC', '#FC4A1A']);
  colors.push(['#706060', '#4ABDAC', '#FC4A1A', '#F7B733']);

  colors.push(['#F7B733', '#706060', '#4ABDAC', '#FC4A1A']);
  colors.push(['#FC4A1A', '#F7B733', '#706060', '#4ABDAC']);
  colors.push(['#4ABDAC', '#FC4A1A', '#F7B733', '#706060']);
  colors.push(['#706060', '#4ABDAC', '#FC4A1A', '#F7B733']);
}
colorSetup();

function setColors() {
  var colorIndex = Math.floor(Math.random() * colors.length);
  var c = colorIndex;
  console.log("color: " + c + " " + colors[c][0] + " " + colors[c][1] + " " + colors[c][2] + " " + colors[c][3]);
  var body = document.getElementsByTagName("body");
  for (i = 0; i < body.length; i++) {
    body[i].style.backgroundColor = colors[colorIndex][0];
  }
  // quote-display sets the text color for quote and author
  document.getElementById("quote-display").style.color = colors[colorIndex][1];
  document.getElementById("quote-display").style.background = colors[colorIndex][2];
  document.getElementsByTagName("button").style.color = colors[colorIndex][3];
}

var quote;
var author;
var quoteIndex;

function displayQuote() {
  var quoteIndex = Math.floor(Math.random() * quotes.length);
  quote = quotes[quoteIndex][0];
  author = quotes[quoteIndex][1];
  document.getElementById('quote-text').innerHTML = quote;
  document.getElementById('quote-speaker').innerHTML = author;
}

newQuoteButton.onclick = function() {
  displayQuote();
  setColors();
}

tweetButton.onclick = function() {
  // use up to twitter limit of 140 characters
  // extra is 2 for open and close quotes, 1 space after quote, author.length + 1 space + "#quotes"
  var afterQuoteSpace = 13 + author.length;
  //console.log(afterQuoteSpace);
  var usableQuote;
  if (afterQuoteSpace + quote.length < 140) {
    usableQuote = '"' + quote + '" -' + author;
  } else {
    usableQuote = '"' + quote.slice(0, 140 - author.length - 15) + '..." -' + author;
  }

  var quoteToTweet = encodeURI(usableQuote) + '&' + 'hashtags=quotes';
  window.open("https://twitter.com/intent/tweet?text=" + quoteToTweet);
}