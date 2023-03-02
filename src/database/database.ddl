create table user
(
    id            integer                   not null
        primary key autoincrement
        unique,
    username      text                      not null,
    email         text                      not null,
    creation_date text default CURRENT_DATE not null,
    password_hash text                      not null,
    password_salt text                      not null
);

create table exercise
(
    id            integer                   not null
        primary key autoincrement
        unique,
    author_id     integer                   not null
        constraint author_id
            references user
            on delete cascade,
    creation_date text default CURRENT_DATE not null,
    difficulty    integer                   not null,
    tags          text                      not null,
    content       text                      not null
);

create table comment
(
    id            integer                   not null
        primary key autoincrement
        unique,
    exercise_id   integer                   not null
        constraint exercise_id
            references exercise
            on delete cascade,
    author_id     id                        not null
        constraint author_id
            references user
            on delete cascade,
    creation_date text default CURRENT_DATE not null,
    content       text                      not null
);

