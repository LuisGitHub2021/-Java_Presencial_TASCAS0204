db.restaurants.distinct("cuisine");
var myCursor=db.restaurants.find({cuisine:{$nin:["American","Chinese"]},name:{$ne:{$regex:"^Wil"}},
cuisine:{$in:["Seafood","Mediterranean","Japanese","English"]}},
{"restaurant_id":1,"name":1,"borough":1,"cuisine":1});
while (myCursor.hasNext()) {printjson(myCursor.next())};
myCursor.close();
