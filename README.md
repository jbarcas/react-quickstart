# React TypeScript Quikstart

The idea of this project is to make things easier at creating a new TypeScript React/Node.js project. It is not a bootstrap starter, it is a funll functional mini-project that you can use as starting point. It is complemented with its corresponding Node.js api, which will be included in another git repository. The main technologies used are the following:

- [TypeScript][typescript] programming language.
- [React][react] framework for building the user interface.
- [Redux][redux] library to manage the state of the React application.
- [Node.js][nodejs] as runtime environment.
- [Sequelize][sequelize] object-relational mapping.
- [PostgreSQL][postgresql] database.
- [JWT][jwt] for athentication and authorization.
- [Jest][jest] and [Mocha][mocha] test frameworks.
- [Travis CI][travis] as Continuous Integration tool.


## Getting Started

To get started simply clone the `react-quickstart` repository and install the dependencies as ahown below.

### Prerequisites

You need git to clone the `react-quickstart` repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of Node.js tools to initialize and test `react-quickstart`. You must have Node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Cloning `react-quickstart` repository

Clone the react-quickstart repository using [git](git):

```
git clone https://github.com/jbarcas/react-quickstart.git
cd react-quickstart
```

If you just want to start a new project without the react-quickstart commit history then you can do the following:

```bash
git clone --depth=1 https://github.com/jbarcas/react-quickstart.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Installing Dependencies

In the root folder, issue:

```
npm install
```

### Runnig the application

In the root folder, issue:

```
npm run start
```

The system will automatically open your default web browser on page `http://localhost:3000/`.


## Testing

// TODO: write about unit and end-to-end testing.


## Continuous Integration

// TODO: write about CI and Travis.

[typescript]: https://www.typescriptlang.org/
[react]: https://reactjs.org/
[redux]: https://redux.js.org/
[nodejs]: https://nodejs.org/
[sequelize]: http://docs.sequelizejs.com/
[jwt]: https://jwt.io/
[jest]: https://jestjs.io/
[mocha]: https://mochajs.org/
[postgresql]: https://www.postgresql.org/
[travis]: https://travis-ci.org/
[author]: mailto:jesus.barros.castro@gmail.com
