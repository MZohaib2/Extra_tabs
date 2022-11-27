var kg_rate = prompt ("Put your Chicken Kg rate");
var g_value = prompt ("How many grams of a Chicken you want to buy?");
var convert_kg = parseInt (kg_rate);
var convert_g = parseInt (g_value);
var g_price = convert_kg / 1000;
var total = convert_g * g_price;

alert ("Sorry sir, prompt was not breaking from us, so we did use the alert")
var recieve_price = prompt ("Chicken 1 kg 500 How much do you need, Tell me your budget")
var convert_userprice = parseInt(recieve_price)
var us_price = convert_userprice / 500;
var total12 = us_price * 1000

function firstFunc(){
    document.write ("<h1> First and Second Prompt Result</h1>")
    document.write ("<br>Your Chicken Gram Price <br><br> <b> PRICE:</b>", total,)
    document.write("<br><br><hr><h1>Third Prompt Result</h1>")
    document.write("<br> Or Take Your Chicken <br><br> <b> Gram:</b>",total12)
}
firstFunc()