const locationsArray:Array<any>=[]


class Locations{
	name:string;
	city:string;
	zipCode:string;
	address:string;
	current;
	image;
	locationsArray;

	constructor (name, city, zipCode, address, image, current){
		this.name= name;
		this.city= city;
		this.zipCode= zipCode;
		this.address= address;
		this.image= image;
		this.current= current;
		locationsArray.push(this);
	}
	render(){
		return `
			<div class = "col-sm-12 col-md-5 col-lg-3 p-1 info-container">
			 <div class="card" style="">
              	<img class="card-img-top" src="${this.image}" alt="Card image cap">
              	<div class="card-body">
                	<h3 class="card-title">${this.name}</h3>
                	<p class="card-text">  
						<ul class="list-group bg-dark p-0">
						  <li class="list-group-item bg-dark text-light info-item ">City: ${this.city}</li>
						  <li class="list-group-item bg-dark text-light info-item">Zip-Code:${this.zipCode}</li>
						  <li class="list-group-item bg-dark text-light info-item">Address: ${this.address} </li>
						  <li class="list-group-item bg-dark text-light info-item">Visited: ${this.current}</li>
					 	</ul>
			 		</p>              
	              </div>
	            </div>          
	        </div>`					 	
	}
}





class Restaurant extends Locations {
	phone:string;
	cuisine:string;
	homepage:string;


	constructor(name, city, zipCode, address, image, phone, cuisine, homepage, current){
		super(name, city, zipCode, address, image, current);
		
		this.phone = phone;
		this.cuisine = cuisine;
		this.homepage = homepage;
	}
	render(){
		return `
			<div class = "col-sm-12 col-md-5 col-lg-3 p-1 info-container">
			 <div class="card" style="">
              	<img class="card-img-top" src="${this.image}" alt="Card image cap">
              	<div class="card-body">
                	<h3 class="card-title bg-dark">${this.name}</h3>
                	<p class="card-text">           
			  		 <ul class="list-group bg-dark p-0 list-group-flush ">
					  <li class="list-group-item bg-dark text-light info-item ">City: ${this.city}</li>
					  <li class="list-group-item bg-dark text-light info-item">Zip-Code:${this.zipCode}</li>
					  <li class="list-group-item bg-dark text-light info-item">Address: ${this.address} </li>
					  <li class="list-group-item bg-dark text-light info-item">Phone: ${this.phone} </li>
					  <li class="list-group-item bg-dark text-light info-item">Cuisine: ${this.cuisine} </li>
					  <li class="list-group-item bg-dark text-light info-item">Home Page: <a href="${this.homepage}">${this.homepage}</a>
 </li>
 					  <li class="list-group-item bg-dark text-light info-item">Visited: ${this.current}</li>
					 </ul>
			 		</p>              
	              </div>
	            </div>          
	        </div>`
	}
}		





class Events extends Locations{
	eventDate;
	eventTime;
	ticketPrice:number;
	homepage:string;



	constructor(name, city, zipCode, address, image, eventDate, eventTime, ticketPrice, homepage, current){
		super(name, city, zipCode, address, image, current);
		this.eventTime = eventTime;
		this.eventDate = eventDate;
		this.ticketPrice = ticketPrice;
		this.homepage= homepage;
	}
			//<div class = "col-sm-12 col-md-5 col-lg-3 p-1 info-container align-items-end">
	render(){
		return `
		<div class = "col-sm-12 col-md-5 col-lg-3 p-1 info-container">
          <div class="card" style="">
              <img class="card-img-top" src="${this.image}" alt="Card image cap">
              <div class="card-body">
                <h3 class="card-title">${this.name}</h3>
                <p class="card-text">
					<ul class="list-group bg-dark p-0 list-group-flush ">               
					  <li class="list-group-item bg-dark text-light info-item ">City: ${this.city}</li>
					  <li class="list-group-item bg-dark text-light info-item">Zip-Code:${this.zipCode}</li>
					  <li class="list-group-item bg-dark text-light info-item">Address: ${this.address} </li>
					  <li class="list-group-item bg-dark text-light info-item">Event Date: ${this.eventDate} </li>
					  <li class="list-group-item bg-dark text-light info-item">Event Time: ${this.eventTime} </li>
					  <li class="list-group-item bg-dark text-light info-item">Entrance: ${this.ticketPrice}.- EUR</li>
					  <li class="list-group-item bg-dark text-light info-item">Home Page: <a href="${this.homepage}">${this.homepage}</a>
 </li>
 					  <li class="list-group-item bg-dark text-light info-item">Visited: ${this.current}</li>					  
				 	</ul>
		 		</p>              
              </div>
            </div>          
        </div>`
	}
}



var location1 = new Locations("St. Charles Church",
 "Vienna", "1010", "Karlsplatz 1", "Images/karl.jpg", "2014-09-14 20:30");
var location2 = new Locations("Schönbrunn",
 "Vienna", "1130", "Maxingstraße 13b", "Images/schoenb.jpg", "2020-01-19 14:15")

var location3 = new Restaurant("Lemon Leaf",
 "Vienna", "1050", "Kettenbrückengasse 19", "Images/lemon.png", "+43 1 58 528 56", "Thai", "www.lemonleaf.at", "2020-02-14 10:15")
var location4 = new Restaurant("SIXTA",
 "Vienna", "1050", "Schönbrunner Straße 21", "Images/sixta.png", "+43 1 58 528 56", "Classic", "http://www.sixta-restaurant.at/", "2020-03-10 16:40")

var location6 = new Events("Kris Kristofferson",
 "Vienna", "1200", "Nordwestbahnhof", "Images/kris.jpg","Fr., 15.11.2021", "20:00", 0, "http://kriskristofferson.com/", "2019-07-16 09:30");
var location7 = new Events("Lenny Kravitz",
 "Vienna", "1200", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1, 1150 Wien", "Images/lenny.jpg","Sat, 29.02.2016", "19:30", 0, "www.lennykravitz.com/", "2016-02-29 14:40");
var location5 = new Events("Bau Lücken Konzert",
 "Vienna", "1200", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1, 1150 Wien", "Images/blk.jpg","22.08.2019", "20:00", 0, "", "2019-07-12 12:30");
for(let i in locationsArray){
document.getElementById("row1").innerHTML += locationsArray[i].render();
}


var asc = new Array;
asc = locationsArray.sort(function(a,b){
	let x = new Date (a.current);
	let y = new Date (b.current); 
	console.log(x); // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return x-y;
});
console.log(asc)

//sort algorithm

const sortedActivities = locationsArray.slice().sort((a, b) => b.current - a.current)
