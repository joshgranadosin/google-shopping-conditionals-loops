var data = require("./products.json");

var question1a = function()
{
	var count = 0;
	for (var i = 0; i < data['items'].length; i++)
	{
		if (data['items'][i].kind === 'shopping#product')
		{
			count++;
		}
		else
		{

		}
	}

	console.log("Total number of items that are of type 'shopping#product' is " + count);
}

var question1b = function()
{
	console.log("The count information is also stored near the top of the .json file under itemsPerPage and currentItemCount");
}

var question2 = function()
{
	var count = 0;
	for (var i = 0; i < data['items'].length; i++)
	{
		if (data['items'][i].product.inventories[0].availability === "backorder")
		{
			console.log(data['items'][i].product.title);
			count++;
		}
	}
	console.log("..." + count + " items found");
}

var question3 = function()
{
	var count = 0;
	for (var i = 0; i < data['items'].length; i++)
	{
		if (data['items'][i].product.images[1])
		{
			console.log(data['items'][i].product.title);
			count++;
		}
	}
	console.log("..." + count + " items found");
}

var question4 = function()
{
	var count = 0;
	for (var i = 0; i < data['items'].length; i++)
	{
		if (data['items'][i].product.brand === "Canon")
		{
			console.log(data['items'][i].product.title);
			count++;
		}
	}
	console.log("..." + count + " items found");
}

var question5 = function()
{
	var count = 0;
	for (var i = 0; i < data['items'].length; i++)
	{
		if ((data['items'][i].product.author.name.indexOf("eBay") >= 0) && (data['items'][i].product.brand === "Canon"))
		{
			console.log(data['items'][i].product.title);
			count++;
		}
	}
	console.log("..." + count + " items found");	
}

var question6 = function()
{
	for (var i = 0; i < data['items'].length; i++)
	{
		console.log(data['items'][i].product.title 
			   + "\n    Brand: " + data['items'][i].product.brand
			   + "\n    Price: $" + data['items'][i].product.inventories[0].price.toFixed(2)
			   + "\n    Image Link(s): " + data['items'][i].product.images[0].link);
		var imageCount = 1;
		while (data['items'][i].product.images[imageCount]){
			console.log("               " + data['items'][i].product.images[imageCount].link);
			imageCount++;
		}
		console.log("");
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