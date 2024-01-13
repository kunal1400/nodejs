// single element in array
db.otp.find({
    hobbies: 'cricket'
}); 

 // all elements in array
db.otp.find({ 
    hobbies: {
        $all: ['cricket']
    }
});

// size of array
db.otp.find({ 
    hobbies: {
        $size: 1
    }
});

// Fetching data from array by conditions
db.otp.find({
    dailyMoney:{
        $elemMatch:{
            $gt: 500
        }
    }
})

// Pushing records in array with unique array
db.otp.updateOne({
        hobbies:"cricket"
    },
    {
        $addToSet: {
            hobbies: "hockey"
        }
    }
)

// Updating multiple values in array with array
db.otp.updateMany(
    {
      hobbies:"cricket"
    },
    {
      $addToSet:{
        hobbies:{
          $each:["hockey","kabbadi"]
        }
      }
    }
)

// Removing first element from array if -1 and last element if 1
db.otp.updateOne(
    {
        _id: ObjectId('65a1753b9f153a764170f80a')
    },
    {
        $pop:{
            hobbies: -1
        }
    }
)

// Removing elements from array based on condition
db.otp.updateOne(
    {
        _id: ObjectId('65a178729f153a764170f80e')
    },
    {
        $pull:{
            dailyMoney:{
                $gt:200
            }
        }
    }
)
