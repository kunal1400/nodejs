db.survey.insertMany([
    {
        _id: 1,
        results: [
            {
                item: "A",
                score: 5,
                answers: [ { q: 1, a: 4 }, { q: 2, a: 6 } ]
            },
            {
                item: "B",
                score: 8,
                answers: [ { q: 1, a: 8 }, { q: 2, a: 9 } ]
            }
        ]
    },
    {
        _id: 2,
        results: [
            {
                item: "C",
                score: 8,
                answers: [ { q: 1, a: 8 }, { q: 2, a: 7 } ]
            },
            {
                item: "B",
                score: 4,
                answers: [ { q: 1, a: 0 }, { q: 2, a: 8 } ]
            }
        ]
    }
])

db.survey.updateMany({}, {
    $pull: {
        results: {
            answers: {
                q: 1,
                a: {
                    $gt: 8
                }
            }
        }
    }
})
