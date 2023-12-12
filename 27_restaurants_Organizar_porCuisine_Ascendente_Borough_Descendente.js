var myCursor=db.restaurants.find({}).sort({cuisine:1,borough:-1});
while (myCursor.hasNext()) {printjson(myCursor.next())};
myCursor.close();
