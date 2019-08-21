database:

`create database oststream`
connect to it (`\c oststream`)
`create user api`;
`alter role api with login`
`python manage.py makemigrations`
`python manage.py migrate`




todo:
database role management
user auth tokens
user auth tokens restricting data
