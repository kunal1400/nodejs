// $currentDate, $set
db.otp.updateOne({
        _id: ObjectId("65a17d419f153a764170f80f")
    }, 
    {
        $currentDate: {
            lastUpdatedOn: true, 
            createdOn: true
        }
    },
    {
        $set: {
            otp: 2233
        }
    }
)

// $inc
db.otp.updateOne({
        _id: ObjectId("65a17d419f153a764170f80f")
    }, 
    {
        $inc: {
            age: -10, 
            otp: 2
        }
    }
)

// $rename
db.otp.updateMany({},
    {
        $rename: {
            name: "firstName"
        }
    }
);

// $unset
db.otp.updateOne({
        hobbies: "cricket"
    },
    {
        $unset: {
            city: ""
        }
    }
)

