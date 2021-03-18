# Connect-four
Who will connect four  first?


# Overview:

    The game I picked is Connect Four. The reason why I picked this game was because it seems like I would be using a lot of the functionailites we learned in class. I didn't want to pick something more complicated because I am still getting the hang of JS.


# Game rules:

    The game is played on a 6x7 grid with 2 player who take turns by clicking through the sqaures in the grid to place their colored chip. They would be able to place it in any direction to the lowest available space within the grid. Once a player has four pieces of thier chip in a row, they win the game it the turn ends.

# Wireframes:

    See attached png files


# User stories

    * When you the page, you will see any emppty grid and a start button to play start the game.
    * When player 1 picks a square, their colored chip will fill the space and stay there.
    * When player 2 picks a square, their colored chip will fill in space and stay there. They are not allowed to pick an already filled space.
    * When there are 4 colors in a row, the game will end and it will say which player has won the game. You will be able to click the start button to play again.

# MVP checklist:

    * boxed grid for game
    * all squares are empty
    * each square can be played by either red/blue chip by either player
    * chip must be placed at lowest point of grid on column
    * players turn ends only after they played a chip
    * after 4 chip is placed by each play, game will see if there are 4 colors in a row:
            -IF yes, game ends and player wins
            -IF no, next player will be able to place their chip down.
    * have a reset button

# Stretch goals

    * better design the UI in css.
        - turn square grid into circles.
        - make the design of grid itself nicer
    * add a timer for each turn
    * have a pop up that says which player one
