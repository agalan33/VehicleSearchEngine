CREATE TABLE dealer(did serial primary key , dname varchar(20), dlocation varchar(20));
CREATE TABLE employee(eid serial primary key, first_name varchar(20), last_name varchar(20), age int, email varchar(30), password varchar(20), did int references dealer(did));
CREATE TABLE vehicle(vid serial primary key, vbrand varchar(20), vmodel varchar(20), vyear varchar(20), vprice double precision, data_added varchar(40), vcolor varchar(10), did int references dealer(did));
CREATE TABLE speficication (sid serial primary key, horse_power int, edition varchar(10), cylinders int, miles_per_gallon int);