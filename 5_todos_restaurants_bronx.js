var myCursor=db.restaurants.find({borough:"Bronx"});
while (myCursor.hasNext()) {printjson(myCursor.next())};
myCursor.close();