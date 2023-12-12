var myCursor=db.restaurants.find({borough:{$in:["State Island", "Queens", "Bronx", "Brooklyn"]}},{"restaurant_id":1, "name":1, "borough":1, "cuisine":1});
while (myCursor.hasNext()) {printjson(myCursor.next())};
myCursor.close();