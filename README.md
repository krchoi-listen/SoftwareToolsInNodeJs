# SoftwareToolsInNodeJs

## Introduction of the project
This project is a practice of using Node.JS by converting example codes from **Software Tools in Pascal** into Node.JS

- **Software Tools in Pascal**
    - published in 1981 by Addison Wesley
    - ISBN: 0-201-10342-7
    - authors
        - Brian W. Kernighan (Bell Laboratories)
        - P. J. Plauger (Whitesmiths, Ltd)
    - context of the book
        - create unix tools like cp, sed, wc, find ... by Pascal
    - I bought this book in 90's

## Project initialization

### initialization with typescript
```
npm init -y
npm i typescript
npm i --save-dev @types/node
tsc --init
```
### install and configure jest
```
npm i --save-dev jest
npm i --save-dev @types/jest

jest --init
✔ Would you like to use Typescript for the configuration file? … no
✔ Choose the test environment that will be used for testing › jsdom (browser-like)
✔ Do you want Jest to add coverage reports? … yes
✔ Which provider should be used to instrument code for coverage? › babel
✔ Automatically clear mock calls, instances and results before every test? … yes
```

### install and configure tslint
```
npm i tslint

// if it is installed globally
tslint --init
// if not 
create tslint.json
```

### jest needs babel, install babel
```
npm i --save-dev babel-jest @babel/core @babel/preset-env
npm i --save-dev @babel/preset-typescript

create babel.config.js
```
