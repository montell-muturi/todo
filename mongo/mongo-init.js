db.users.insertMany([
    {
        _id: ObjectId("623ee48975da9b62d7f2e99e"),
        username: "JohnK.",
        email: "johnkamau@gmail.com",
        password: "$2a$15$am4KJZO6aR4y8rSzBFbfgOK03t4bby1cLnyH1vTmw7fpQgzrsKjiG",
    },
    {
        _id: ObjectId("623ee49a02158768ae15e762"),
        username: "JaneW.",
        email: "janewambui@yahoo.com",
        password: "$2a$15$am4KJZO6aR4y8rSzBFbfgOK03t4bby1cLnyH1vTmw7fpQgzrsKjiG",
    },
]);

db.todos.insertMany([
    {
        userId: "623ee48975da9b62d7f2e99e",
        dateCreated: "Thu Mar 24 2022 11:07:59 GMT+0300 (East Africa Time)",
        title: "House Repairs",
        items: [
            {
                _id: ObjectId("623f0c1555eb83ddc35fd574"),
                title: "Repair kitchen lights", isChecked: true
            },
            {
                _id: ObjectId("623f0c1f1364e9b99d6effe6"),
                title: "Clean basement", isChecked: false
            },
            {
                _id: ObjectId("623f0c235d9d4d6792b638db"),
                title: "Remove mouldy wallpaper", isChecked: false
            },
            {
                _id: ObjectId("623f0c286be410da46111772"),
                title: "Adjust crooked floorboards", isChecked: false
            },
        ],
    },
    {
        userId: "623ee48975da9b62d7f2e99e",
        dateCreated: "Thu Mar 24 2022 11:07:59 GMT+0300 (East Africa Time)",
        title: "Christmas Shopping",
        items: [
            {
                _id: ObjectId("623f0c33c61fd708ac453b37"),
                title: "Boots", isChecked: true
            },
            {
                _id: ObjectId("623f0c38378725187b5b8372"),
                title: "Scarf", isChecked: true
            },
            {
                _id: ObjectId("623f0c3daedcb6ac0d1cf1f8"),
                title: "Laptop", isChecked: true
            },
            {
                _id: ObjectId("623f0c418a1067d8616e47ef"),
                title: "Google Colab Pro", isChecked: false
            },
        ],
    },
    {
        userId: "623ee49a02158768ae15e762",
        dateCreated: "Thu Mar 24 2022 11:07:59 GMT+0300 (East Africa Time)",
        title: "2020 Resolutions",
        items: [
            {
                _id: ObjectId("623f0c46f53a1113c02ef2f0"),
                title: "Not die", isChecked: true
            },
            {
                _id: ObjectId("623f0c4e3aa2bfef2f8ab25d"),
                title: "Reach 2021", isChecked: true
            },
            {
                _id: ObjectId("623f0c53d74c85472434a465"),
                title: "Eat Chinese food", isChecked: false
            },
            {
                _id: ObjectId("623f0c578241c9f457d925a9"),
                title: "Meditate more", isChecked: false
            },
        ],
    },
    {
        userId: "623ee49a02158768ae15e762",
        dateCreated: "Thu Mar 24 2022 11:07:59 GMT+0300 (East Africa Time)",
        title: "Buy things for my cat",
        items: [
            {
                _id: ObjectId("623f0c5c2c8bae946869fbc0"),
                title: "A new kitten bed", isChecked: true
            },
            {
                _id: ObjectId("623f0c60430a9544fd479fbc"),
                title: "Neck tag", isChecked: false
            },
            {
                _id: ObjectId("623f0c644d6534ddbe89dee3"),
                title: "Fur comb", isChecked: false
            },
            {
                _id: ObjectId("623f0c680a6901ae24593e07"),
                title: "Fur shampoo", isChecked: false
            },
        ],
    }
]);