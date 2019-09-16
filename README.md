# burger
Week 14 project - Node.js application with Express, Handlebars, Mysql, Heroku

## Description


## Prerequisites
* install node.js
* run 'npm i' to install required packages
* run schema.sql in MySQL Workbench to create database

## Application structure

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

## Built with
* javascript
* node.js
* npm packages:
  - [mysql](https://www.npmjs.com/package/mysql)
  - [express-handlebars](https://www.npmjs.com/package/express-handlebars)
  - [cli-table](https://www.npmjs.com/package/cli-table)
* MySQLWorkbench
* Heroku

## Folder structure of MVC

**Models** folder contains model class files. Typically model class includes public properties, which will be used by application to hold and manipulate application data.

**Controllers** folder contains class files for the controllers. Controllers handles users’ request and returns a response. MVC requires the name of all controller files to end with “Controller”.

**View** folder stores the HTML files related to application display and user interface. Typically view file is a .cshtml file where you write html and C# or VB.NET code.