// for navigator language
// var lang = window.navigator.language;
// you can change the language
var lang = 'de';

//change weather params here:
//units: metric or imperial
var weatherParams = {
    'q':'Schladen,de',
    'units':'metric',
    'lang':lang
};

//var feed = 'http://feeds.nos.nl/nosjournaal?format=rss';
//var feed = 'http://www.nu.nl/feeds/rss/achterklap.rss';
//var feed = 'http://www.nu.nl/feeds/rss/opmerkelijk.rss';
//var feed = 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml';
//var feed = 'http://www.heise.de/newsticker/heise-top-atom.xml';
var feed = 'http://www.tagesschau.de/xml/rss2';


// compliments:
var morning = [
            'Good morning, handsome!',
            'Enjoy your day!',
            'How was your sleep?'
        ];
        
var afternoon = [
            'Hello, beauty!',
            'You look sexy!',
            'Looking good today!'
        ];
       
var evening = [
            'Wow, you look hot!',
            'You look nice!!',
            'Hi, sexy!'
        ];