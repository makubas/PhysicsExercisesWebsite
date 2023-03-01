# Physics Exercises Website - WIP

## Quick information about a project

I have made this project while learning ExpressJS framework and JS in general.

I had previous knowledge of how to make a backend of a website in Django - Python framework operating on MVC model

I have also made a "similar" project of [simple e-commerce shop](https://github.com/makubas/webshop-django) in mentioned Django in the past.

In this project I could use external libraries for some things, such as database model creation (Sequelize etc.), or authentication of users, but I decided to do it on my own to learn how to do it.

I also wrote a database generation script for this project. It can generate an example of database used by the website.

I wasn't doing this project with intent to publish it as a working website on a server that everyone could see. 

It was made purely for me to learn and demonstrate my programming skills.

### Side note

Website's frontend isn't looking good because my intention was to focus on backend!

## Used technologies

- JavaScript backend in Express framework
- SQLite database
- EJS html templating language

## Idea

Project is a website with a browsable database of physics exercises, that users are be able to add, see, comment on, and modify.
People can create their own accounts and log-in to them.

## URLs structure

- / - homepage with options to search / sort / filter exercises
- /users - a group of URLs related to users
  - /users/add - form with options to register and log in
  - /users/:nickname - page displaying information about specified user
  - /users/me - page with settings for currently logged-in user
- /exercises - a group of URLs related to exercises
  - /exercises/add - form for adding new exercise
  - /exercises/:id - displaying information about specific exercise
    - /exercises/:id/edit - page with editing options for exercise

## Planned functionalities

- Tags for exercises, like high school / university
- Ability to easily browse through exercises based on topic and how hard it is
- Option to comment/rate exercises

## Database models

- **Exercise**:
  - **id** - int - id
  - **date** - datetime - creation date
  - **creator** - int - id of user who created exercise
  - **content** - text - content of an exercise, description of the problem
  - **rating** - int - from 1 to 5 user rating (rounded)
  - **difficulty** - int - from 1 to 5 scale of how difficult the exercise is
  - **tags** - text - tags separated with spaces

- **Comment**:
  - **id** - int - id
  - **exercise_id** - int - id of exercise that comment is made on
  - **date** - datetime - creation date
  - **content** - text - content of a comment

- **User**:
  - **id** - int - id
  - **username** - text - visible username of user
  - **email** - text - email
  - **date** - datetime - registration date
  - **password_hash** - text - hashed password
  - **password_salt** - text - unique hash salt for each users' password

