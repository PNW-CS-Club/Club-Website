-- create database club_website;

begin;

create table users(
	username VARCHAR(255) primary key,
	password_hash VARCHAR(255) not null
);

create table blog(
	blog_id SERIAL primary key,
	username VARCHAR(255) not null,
	title VARCHAR(255) not null,
	s3_pointer VARCHAR(255) not null,
	foreign key (username) references users(username)
);

create table event(
	evend_id SERIAL primary key,
	username VARCHAR(255) not null, 
	event_name VARCHAR(255) not null,
	foreign key (username) references users(username)
);


commit;