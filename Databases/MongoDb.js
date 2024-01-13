// Write query to fine only one record from mysql database
db.otp.insertMany([
    {name:"Rahul", age:20, city:"Delhi", gender:"male", hobbies:['cricket','football']},
    {name:"Rohit", age:18, city:"Delhi", gender:"male", hobbies:['cricket']},
    {name:"Raj", age:25, gender:"male", hobbies:['basketball','karate']},
    {name:"diksha", age:15, gender:"female", hobbies:['karate']},
    {name:"Shivani", age:13, gender:"female", hobbies:['kungfu'], dailyMoney:[100,200,300,400]},
])

// Greater than/equal in mongodb
db.otp.find({age:{$gt: 20}});
db.otp.find({age:{$gte: 20}});
db.otp.find({age: {$not:{$gt: 15}}})

// Greater than/equal in MySql
select * from otp where age > 20;
select * from otp where age >= 20;

// Less than/equal in mongodb
db.otp.find({age:{$lt: 20}});
db.otp.find({age:{$lte: 20}});

// Less than/equal in MySql
select * from otp where age < 20;
select * from otp where age <= 20;

// Equal in mongodb
db.otp.find({age:{$eq: 20}});
db.otp.find({age:{$ne:15}});

// Equal in MySql
select * from otp where age = 20;
select * from otp where age != 15;

// In/Not in in mongodb
db.otp.find({age:{$in:[15,13]}});
db.otp.find({age:{$nin:[15,13]}});

// In/Not in in MySql
select * from otp where age in (15,13);
select * from otp where age not in (15,13);

// And in mongodb
db.otp.find({$and:[{gender:'female'},{age: 13}]})

// And in MySql
select * from otp where gender='female' and age=13;

// Or/nor in mongodb
db.otp.find({$or:[{gender:'female'},{age: {$gte: 13}}]})
db.otp.find({$nor:[{gender:'female'},{age: {$gte: 13}}]})

// Or in MySql
select * from otp where gender='female' or age >= 13; 

// Check key exists or not in mongodb
db.otp.find({otp:{$exists:true}})
db.otp.find({age:{$exists:true, $gte:18}})

// Check if key type in mongodb
db.otp.find({age:{$type:"string"}})
db.otp.find({age:{$type:"bool"}})
db.otp.find({age:{$type:"number"}})

