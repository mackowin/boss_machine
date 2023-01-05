# :space_invader: Boss Machine #
CodeCademy Project: create an entire API to serve information to a Boss Machine

## Table of Contents ##
* [General Info](#General-Info)
* [Technologies Used](#Technologies-Used)
* [Source](#Source)
* [Screenshots](#Screenshots)
* [Project Status](#Project-Status)

## General Info ##
This project creates an entire API to serve information to a Boss Machine, a unique management application for today's most accomplished (evil) entrepreneurs. It created routes to manage 'minions', brilliant 'million dollar ideas', and to handle all the annoying meetings that keep getting added.
You can view a video demonstration of the final app here:

<video width="100%" height="100%" controls>
   <source src="https://s3.amazonaws.com/codecademy-content/programs/build-apis/solution-videos/BossMachine480.mov" type="video/mp4">
 The markdown processor does not support the video tag.
</video>

## Technologies Used ##
* HTML
* CSS
* Express.js
* Custom middleware
* Setting up the server and API rooutes

Routes Required

* `/api/minions`
  * GET /api/minions to get an array of all minions.
  * POST /api/minions to create a new minion and save it to the database.
  * GET /api/minions/:minionId to get a single minion by id.
  * PUT /api/minions/:minionId to update a single minion by id.
  * DELETE /api/minions/:minionId to delete a single minion by id.
* `/api/ideas`
  * GET /api/ideas to get an array of all ideas.
  * POST /api/ideas to create a new idea and save it to the database.
  * GET /api/ideas/:ideaId to get a single idea by id.
  * PUT /api/ideas/:ideaId to update a single idea by id.
  * DELETE /api/ideas/:ideaId to delete a single idea by id.
* `/api/meetings`
  * GET /api/meetings to get an array of all meetings.
  * POST /api/meetings to create a new meeting and save it to the database.
  * DELETE /api/meetings to delete _all_ meetings from the database.

## Source ##
[CodeCademy](http://www.codecademy.com)

## Screenshots ##
<img width="654" alt="Screen Shot 2023-01-05 at 11 35 53 AM" src="https://user-images.githubusercontent.com/59709289/210865632-557dcdf4-45d7-45c1-91d1-38859c290b7b.png">
<img width="645" alt="Screen Shot 2023-01-05 at 11 36 23 AM" src="https://user-images.githubusercontent.com/59709289/210865640-59139850-2fce-4386-aeb9-a0fa3cf8a728.png">
<img width="643" alt="Screen Shot 2023-01-05 at 11 36 56 AM" src="https://user-images.githubusercontent.com/59709289/210865655-cf8db87c-066c-4a04-99f1-918e57a10d6f.png">

## Project Status ##
Completed.
