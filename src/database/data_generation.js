const faker = require("@faker-js/faker").faker;
const config = require("./../../config.json");

export function createRandomUser(){
    return {
        id: null,
        username: faker.internet.userName(),
        email: faker.internet.email(),
        creation_date: null,
        password: faker.internet.password(),
    }
}

export function createRandomExercise() {
    return {
        id: null,
        author_id: null,
        creation_date: null,
        difficulty: faker.datatype.number({min: 1, max: 5}),
        tags: null,
        content: `Random exercise content: ${faker.lorem.sentences(faker.datatype.number({min: 2, max:7}))}`
    }
}

export function createRandomComment() {
    return {
        id: null,
        exercise_id: null,
        author_id: null,
        creation_date: null,
        content:  `Random comment: ${faker.lorem.sentences(faker.datatype.number({min:1, max: 3}))}`
    }
}