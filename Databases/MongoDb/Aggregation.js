/**
 * $project should be the last step of pipeline, used to specify which fields to return to client
 */

// Mongodb aggregation pipeline sequence for optimization
db.otp.aggregate([
    { $addFields: { address: "7 vidhya nagar" } },
    { $match: { gender: "male" } },
    { $project: { _id: 1, firstName: 1, age: 1, hobbies: 1, gender: 1, address: 1 } },
    { $sort: { firstName: 1 } }
])

// Lookup in mongodb
db.comments.aggregate([
    {
        $lookup: {
        from: "movies",
        localField: "movie_id",
        foreignField: "_id",
        as: "movie_details",
        },
    },
    {
        $limit: 1
    }
])