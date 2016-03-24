//This connects the .json file to the .js script
var data = require("./products.json");

//This answers the first part of Question 1
var question1a = function()
{
	var count = 0;
	for (var i = 0; i < data['items'].length; i++)			//Go through all the items
	{
		if (data['items'][i].kind === 'shopping#product')	//Looks for kind shopping product
		{
			count++;
		}
		else
		{

		}
	}

	console.log("Total number of items that are of type 'shopping#product' is " + count);
}

//This answers the second part of Question 1
var question1b = function()
{
	console.log("The count information is also stored near the top of the .json file under itemsPerPage and currentItemCount");
}

//This answers question 2
var question2 = function()
{
	var count = 0;
	for (var i = 0; i < data['items'].length; i++)		//Go through all the items
	{
		if (data['items'][i].product.inventories[0].availability === "backorder")	//looks for things in backorder
		{
			console.log(data['items'][i].product.title);							//displays items in backorder
			count++;
		}
	}
	console.log("..." + count + " items found");
}

//This answers question 3
var question3 = function()
{
	var count = 0;
	for (var i = 0; i < data['items'].length; i++)		//Go through all the items
	{
		if (data['items'][i].product.images[1])			//Checks for a second image (assumes there's at least 1)
		{
			console.log(data['items'][i].product.title);
			count++;
		}
	}
	console.log("..." + count + " items found");
}

//This answers question 4
var question4 = function()
{
	var count = 0;
	for (var i = 0; i < data['items'].length; i++)		//Go through all the items
	{
		if (data['items'][i].product.brand.toLowerCase() === "canon")	//Checks for brand Canon, case insensitive
		{
			console.log(data['items'][i].product.title);				//Displays all Canon products found
			count++;
		}
	}
	console.log("..." + count + " items found");
}

//This answers question 5
var question5 = function()
{
	var count = 0;
	for (var i = 0; i < data['items'].length; i++)		//Go through all the items
	{
		if ((data['items'][i].product.author.name.toLowerCase().indexOf("ebay") >= 0) && (data['items'][i].product.brand.toLowerCase() === "canon"))
			//product author "eBay" is not necessarily in the beginning, checks for string eBay and brand Canon
		{
			console.log(data['items'][i].product.title);	//Displays Canon products by eBay
			count++;
		}
	}
	console.log("..." + count + " items found");	
}

//This answers question 6
var question6 = function()
{
	for (var i = 0; i < data['items'].length; i++)		//Go through all the items
	{
		console.log(data['items'][i].product.title 		//Lots of parameters to display
			   + "\n    Brand: " + data['items'][i].product.brand
			   + "\n    Price: $" + data['items'][i].product.inventories[0].price.toFixed(2)
			   + "\n    Image Link(s): " + data['items'][i].product.images[0].link);
		var imageCount = 1;
		while (data['items'][i].product.images[imageCount]){	//Checks for more image links
			console.log("               " + data['items'][i].product.images[imageCount].link);
			imageCount++;
		}
		console.log("");	//Just a way to make it look nicer
	}
}

//question1a();
//question1b();
//question2();
//question3();
//question4();
//question5();
//question6();

//console.log(data["items"]);