# Mercado Libre - Challenge Developer FrontEnd

## Install proyect

- `cd /api` and `npm install`
- `cd /frontend` and  `npm install`


## Run proyect
- `cd /api` and `npm start`: Middleware is on port: 5000
- `cd /frontend` and `npm start`: Frontend is on port: 3000

**Note:** in this case, you need run the project in separated consoles.

**Windows:** I create **start.bat** whit this scripts:
```
    @echo off
    start cmd /c "cd api && npm start"
    start cmd /c "cd frontend && npm start"

```
- You can execute this file to run both project.

## Description Job.

- Frontend is working with React `^17.0.2`.
    - Lodash.
    - node-sass.

- Api is workin with node-fetch `^2.6.1`
    - nodemon.


