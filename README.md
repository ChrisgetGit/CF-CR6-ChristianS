# CF-CR6-ChristianS

Travel-o-Matic blog

You enjoy travelling to different places, visiting events and eating good food in restaurants. You want to create a TypeScript-based system that presents all of your experiences in a web-page.

What is common to a place, event and restaurant is a location. Since you know about classes, you decided that your base class named Location should hold information about city, ZIP-code, address (a single line like “Kettenbrueckengasse 23” would be enough), and a teaser image. That base class has the function render() which displays the object’s properties on the screen as HTML.

A restaurant must also display telephone number, type of cuisine (“Chinese”, “Indian”, “Viennese”, …)  and a web address. Restaurant objects inherit the basic properties (like ZIP-code) from the Location class. The display function must, of course, be updated.

Same goes for the events - they have their additional properties like EventDate (“12.10.2019”) and EventTime (“17:00”) and ticket price (in EUR) that also need to be displayed in addition to the base class Location properties.   

For the regular points of this CodeReview, you need to create a structure of TypeScript/JavaScript classes, their respective constructors and their display() function that will display the relevant data of places, events and restaurants that you have visited.

Regular points:

    (05 points) Create a GitHub Repository named: CF-CR6-YourName. Push the files into it and send the link through the learning management system (lms). See an example of a GitHub link below:

    (15 points) create the class Locations based on the specifications above.

    (20 points) create at least 2 Locations objects by invoking a constructor call and save them in an array (class constructors usage is mandatory, do not use JSON and parsing).

    (10 points) add a display() function to the Locations class that can display the Locations’ object as an HTML string. Use Bootstrap to solve design and responsiveness issues in an easy manner.

    (10 points) use looping functionality to display the object saved in the array on the screen.

    (20 points) create classes Restaurant and Events with their respective properties. Invoke constructors, and save resulting objects in the same array used for location objects. Make sure that all info is displayed considering there are objects with different properties. 

    (10 points) create a display() function for the classes restaurant and event respectively. display() is capable of displaying relevant information of its class as HTML. Again, use Bootstrap to solve design and responsiveness.

    (10 points) Assure that the responsiveness of the page is as follows: for small screens, you see the teaser of one object (without the image) in a row. On medium screens, you see two teasers in a row (with image). On large screens, you see four objects in a row (with image).


Bonus Points:

    (10 points) You have decided to add an additional date/time for every location that you visited. You add that information “Created: 24.03.2019 12:45” to respective teaser displays.

    (10 points)  You want to use the newly added entry to add two additional pages to your system index-asc.html  and index-desc.html  Those pages are sorting the array of locations (places, events, restaurant) ascending/descending based on the “Created” date/time property.
