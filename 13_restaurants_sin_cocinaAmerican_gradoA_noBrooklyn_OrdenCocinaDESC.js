var myCursor=db.restaurants.find({cuisine:{$ne:"American"},grades:{$elemMatch:{grade:"A"}},borough:{$ne:"Brooklyn"}}).sort({cuisine:-1});
while (myCursor.hasNext()) {printjson(myCursor.next())};
myCursor.close();