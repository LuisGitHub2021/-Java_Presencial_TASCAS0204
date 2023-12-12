db.restaurants.aggregate({$match:{"address.coord.1":{$gt:42,$lt:52}}},
{$project:{restaurant_id:"$restaurant_id",name:"$name",
address_building:"$address.building",address_street:"$address.street",address_zipcode:"$address.zipcode",address_coord:"$address.coord"}}
)