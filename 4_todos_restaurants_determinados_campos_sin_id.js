var myCursor=db.restaurants.find({}, {"restaurant_id":1, "name":1, "borough":1, "address.zipcode":1, "_id":0});
while (myCursor.hasNext()) {printjson(myCursor.next())};
myCursor.close();