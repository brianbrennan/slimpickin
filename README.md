# Slimpickin
A DOM Element Selection Tool

##What is it?

Slimpickin is a small tool designed to make selecting DOM elements much easier. At only 6kb, its simple and barebones methods allow you to only have the tools you need for DOM manipulation

##Installation

Installing Slimpickin is extremely simple. Simply download the source file from this repository, and add it to a script tag on your web page. 

    <script src="js/slimpickin.js"></script>
    
##How to use

Once again, Slimpickin shines with its simplicity. If you already use a JS library like JQuery, then Slimpickin's syntax will be fairly familiar to you. To select any DOM element, simply pass a selector string to Slimpickin, like so:

    s('p'); // Will get all p tags in the DOM
    
Slimpickin's instances can be called in the above manner, or on individual levels. If you would like to select the third paragraph element in the DOM, for instance, you would write the following:

    s('p', 2); //Note the new parameter, and that it is 0 index based
  
##Methods

Slimpickin is designed to include only the most essential DOM selection functions. 
