# UCI Courses API 

> Welcome! I originally built this as an internal tool to build a UCI app that relies on course times and location. While building this out, I thought why not just go ahead and build an API for all of you ambitious UCI developers so that you guys can create amazing apps as well!

## Table of Contents

1. [Usage](#Usage)
    1. [Routes](#Routes)
    1. [Things to Note](#things-to-note)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Running API Locally](#running-api-locally)
    1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

> The API server is deployed on Heroku at `uci-course-api.heroku.com`

### Routes

  - GET `/courses/title/:title`
    - Returns all courses and relevant sessions by course `title`
  - GET `/courses/department/:department`
    - Returns all courses and relevant sessions by `department`
  - GET `/courses/number/:number`
    - Returns all courses and relevant sessions by course `number`
  - GET `/courses/department/:department/title/:title`
    - Returns all courses and relevant sessions by department and course `title`
  - GET `/courses/department/:department/number/:number`
    - Returns all courses and relevant sessions by department and course `number`
  - For specialized requests on endpoints, please send me a pm

### Things to Note
  - When talking about the department endpoint, the API is referring to the abbreviated format (department code).
    - Eg. for all Computer Science courses, the parameter for :department would be `COMPSCI`. 
  - For a list of all department codes, please refer to the UCI Webreg. There is a dropdown in the form that has reveals the list. You can easily go into the source code of the html page and copy the entire list!

## Requirements

- Node
- PostgreSQL

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
```

### Running API Locally

Start up PostgreSQL server with correct relations setup, and from within the root directory:

```sh
npm run start
```

Then send your requests to [localhost:8080](http://localhost:8080/)

### Roadmap

View the project roadmap [here](https://github.com/djchie/uci-course-api/issues)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.