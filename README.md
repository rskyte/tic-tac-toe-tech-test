## Tic-Tac-Toe Tech Test

Business logic and simple console interface for a game of tic-tac-toe written in Javascript and tested with Jasmine.

#### The brief
Rules:

- There are two players in the game (X and O)
- Players take turns until the game is over
- A player can claim a spot if it is not already taken
- A turn ends when a player claims a spot
- A player wins if they claim all the spots in a row, column or diagonal
- A game is over if a player wins
- A game is over when all spots are taken

#### Challenges Overcome
- Writing an elegant solution for checking each possible winning condition, then making this scalable for a game board of any size
- Getting to grips with mocking in Jasmine

#### Setup - Getting the Repo

```
$ git clone  https://github.com/rskyte/tic-tac-toe-tech-test
$ cd tic-tac-toe-tech-test
```
#### Setup - Playing

To play open the ./src/game.html file in Google Chrome or Mozilla Firefox and access the developer tools.
In the console type:

```
game = new Game();
game.setup();
```

#### Running Tests

Open the SpecRunner.html file in any browser to run the tests. Expected output:

![test output](/public/tests.png?raw=true)

#### ToDo List
- turnHandler class isn't necessary, ideally it's responsibilities would be refactored out into the game class
- a browser-based user interface that allows players to interact with a visual representation of the game
