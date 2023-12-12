db.restaurants.find().forEach(printjson)

//while o forEach

var myCursor=db.restaurants.find({});
while (myCursor.hasNext()) {printjson(myCursor.next())};
myCursor.close();