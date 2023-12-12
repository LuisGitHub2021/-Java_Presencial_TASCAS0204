var myCursor= db.restaurants.find({borough:"Bronx"}).limit(5);
while (myCursor.hasNext()) {printjson(myCursor.next())};
myCursor.close();

//con forEach

var myCursor=db.restaurants.find({borough:"Bronx"}).limit(5);
myCursor.forEach(printjson);
myCursor.close();


//se pueden mostrar directamente sin iterador, es un rango inferior a 20, menor 16MB, con pretty, pero el doc es más legible con printjson
db.restaurants.find({borough:"Bronx"}).limit(5).pretty()