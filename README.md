Tic Tac Toe Tech Test - in Javascript
=================

Description:
-------
The program contains the business logic for the game of tic tac toe. The code can be combined easily any user interface, whether web or command line to provide an enjoyable gaming experience. The game can be played in a 3x3 grid.

### Instructions for how to run the program

```
$ git clone https://github.com/peter-miklos/tic_tac_toe_tech_test_js.git
$ open SpecRunner.html
```
Use Chrome Console to interact with the code.
User stories
-------
```
As a User
So that I can spend my spare time
I want to play with tic tac toe game

As a User
So that I can beat another human
I want to play with another user instead of the computer

As a User
So that I can see my name as winner
I want to add my game before playing

As a User
So that I can know which field to claim
I want to see the grid
```

Tests
-------
### Feature tests
The program's main features are tested in Chrome Console:
```
TBD
```
### Unit tests
The following unit tests are used:
```
Player
  #getName
    returns the player's name
Game
  #getPlayer1
    returns player1
  #getPlayer2
    return player2
  #getWinner
    returns the winner of the game
  #getGrid
    calls the getGrid method on the grid
    returns the value returned by the grid
  #play
    calls the claimField method on the grid
    confirms that the field is claimed
    raises error if there is a winner, and game is over
    raises error if grid is full and game is over
    calls the isGridFull method on the grid
    raises error if the same player wants to play again
    calls the isValidChoice on the grid
    raises error if the choice is invalid
    calls playerWins method on the grid
    player is added to winner variable if player wins the game
    confirms that the player won the game
Grid
  #claimField
    add the player into the requested field
  #getGrid
    returns a copy of the grid
  #isValidChoice
    returns true if field is not taken
    returns false if field is taken
    returns false if coordinates are out of grid
  #isGridFull
    returns true if there is no more empty field in the grid
    returns false if there is still empty field in the grid
  #playerWins
    returns true for player1 if all fields are claimed in a row
    returns true for player1 if all fields are claimed in a column
    returns true for player1 if all fields are claimed in diagonal, from left to right
    returns true for player1 if all fields are claimed in diagonal, from right to left
```
