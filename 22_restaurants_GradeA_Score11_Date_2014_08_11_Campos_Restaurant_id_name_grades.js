var myCursor=db.restaurants.find({grades:{$elemMatch:{grade:"A",score:11,date:ISODate("2014-08-11T00:00:00Z")}}},
{"restaurant_id":1,"name":1,"grades":1});
while (myCursor.hasNext()) {printjson(myCursor.next())};
myCursor.close();