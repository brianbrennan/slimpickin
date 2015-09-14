# Slimpickin
A DOM Element Selection Tool

##What is it?

Slimpickin is a small tool designed to make selecting DOM elements much easier. At only 7KB, its simple and barebones methods allow you to only have the tools you need for DOM manipulation

##Installation

Installing Slimpickin is extremely simple. Simply download the source file from this repository, and add it to a script tag on your web page. 

    <script src="js/slimpickin.js"></script>
    
##How to use

Once again, Slimpickin shines with its simplicity. If you already use a JS library like JQuery, then Slimpickin's syntax will be fairly familiar to you. To select any DOM element, simply pass a selector string to Slimpickin, like so:

    s('p'); // Will get all p tags in the DOM
    
Slimpickin's instances can be called in the above manner, or on individual levels. If you would like to select the third paragraph element in the DOM, for example, you would write the following:

    s('p', 2); //Note the new parameter, and that it is 0 index based
    
Slimpickin also has the option of having a DOM element as a constructor parameter. This is extremely useful when implementing in functions, as it allows for the 'this' keyword to be used.

    s('p').on('click', function(){
        s(this).css('color', 'red');
    } // sets color of clicked paragraph to red
    
Method chaining is a useful feature in Slimpickin. This allows you to call multiple functions one after the other, so long as the prior method returns a Slimpickin Object

    s('p').css('color','red').attr('value', '5').insert('Hey there');
    //sets all paragraph color to red, value to five, and inserts 'Hey There';
    

  
##Methods

Slimpickin is designed to include only the most essential DOM selection functions. As such, the following are the supported functions that can be called on a Slimpickin instance. Note that some methods return Slimpickin themselves, allowing method chaining for easier coding

#####innerHtml(String)

If no parameter provided, returns element's inner HTML as an **Array**

Else, sets the inner HTML of the elements to the String provided, and returns **Slimpickin Object**

  

#####outerHtml(String)

If no parameter provided, returns element's outer HTML as an **Array**

Else, sets the outer HTML of the elements to the String provided, and returns **Slimpickin Object**

  
  

#####css(String, String)

If second parameter provided, sets css style of first parameter to second parameter. Returns **Slimpickin Object**.

Else, returns css attribute of first parameter, as an **Array**



#####attr(String, String)

If second parameter provided, sets attribute of first parameter to second parameter. Returns **Slimpickin Object**.

Else, returns attribute of first parameter, as an **Array**



#####class(String)

If no parameter provided, returns element's classes as an **Array**

Else, sets the class of the elements to the given String. Returns **Slimpickin Object**

***NOTE: This is not an additive method. The provided String will overwrite all classes***



#####_id(String)

If no parameter provided, returns element's id's as an **Array**

Else, sets the id of the elements to the given String. Returns **Slimpickin Object**

***NOTE: This is not an additive method. The provided String will overwrite all id's. Also note that the id will be added to all selected elements. This is not ideal, and should be reserved for single DOM elements***



#####addClass(String)

Adds given parameter as a class to the selected elements. Returns **Slimpickin Object**



#####addId(String)

Adds given parameter as a id to the selected elements. Returns **Slimpickin Object**



#####removeClass(String)

Removes given parameter as a class to the selected elements. Returns **Slimpickin Object**

#####removeId(String)

Removes given parameter as a id to the selected elements. Returns **Slimpickin Object**

#####hasClass(String)

Returns an **Array** of Booleans based on if the selected element has the given parameter as a class.

#####hasId(String)

Returns an **Array** of Booleans based on if the selected element has the given parameter as an id.

#####at(Number)

Returns **Element Object** at the given parameter position

#####first()

Returns first **Element Object** of selected

#####last()

Returns lastt **Element Object** of selected

#####each(callback)

Performs the given callback function x number of times, where x is the number of selected elements

Returns **Slimpickin Object**

#####insert(String)

Adds the given String to the end of the elements' inner HTML.

Returns **Slimpickin Object**

#####presert(String)

Adds the given String to the beginning the elements' inner HTML.

Returns **Slimpickin Object**

#####append(String)

Adds the given String after the elements' outer HTML.

Returns **Slimpickin Object**

#####prepend(String)

Adds the given String before the elements' outer HTML.

Returns **Slimpickin Object**

#####wrap(String, String)

Adds the given Strings to before and after the elements' outer HTML, respectively

Returns **Slimpickin Object**

#####on(String, callback)

Adds an event listener to all selected elements, based on the first parameter. Performs provided callback with event listener. 

Returns **Slimpickin Object**

#####click(callback)

Adds a click event listener to all selected elements. Performs provided callback with event listener. 

Returns **Slimpickin Object**

#####hover(callback, callback2)

Adds a mouseover event listener to all selected elements. Performs provided callback with event listener. If second callback provided, will add mouseout event listener that performs second callback. 

Returns **Slimpickin Object**







