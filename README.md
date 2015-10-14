# UCI Courses API 
- The API server is deployed on Heroku at <insert api website here>

## Introduction
Welcome! I originally built this as an internal tool to build a UCI app that relies on course times and location. While building this out, I thought why not just go ahead and build an API for all of you ambitious UCI developers so that you guys can create amazing apps as well!
### Things to note
- When talking about the department endpoint, the API is referring to the abbreviated format (department code).
  - Eg. for all Computer Science courses, the parameter for :department would be `COMPSCI`. 
- For a list of all department codes, please refer to the UCI Webreg. There is a dropdown in the form that has reveals the list. You can easily go into the source code of the html page and copy the entire list!

## API Routes

### Courses
- Internal Uses
  - GET `/courses/id/:courseId`
    - Returns a course by `courseId`
- Public Uses
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

## TODO
- Set Scrapy to scheduler in Heroku
- Setup CORS
  - Set up development/test/production configurations
- Format data that enters into database
- Python, when pull in new data, if the row exist, update it, rather than build a new one