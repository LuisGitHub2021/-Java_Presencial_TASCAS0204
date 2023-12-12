var myCursor=db.restaurants.find({}).sort({name:1});
while (myCursor.hasNext()) {printjson(myCursor.next())};
myCursor.close();