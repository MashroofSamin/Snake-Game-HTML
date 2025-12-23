# Snake-Game

Overview:
  
  This project is a browser-based implementation of the classic Snake game built using HTML, CSS, and vanilla JavaScript.
  The goal of the project was to practice real-time game logic, canvas rendering, keyboard input handling, and persistent state management in a clean and structured way.

  The player controls a snake moving on a grid-based board, collecting apples to grow longer and increase score. The game ends when the snake collides with the wall or with itself.


Key Features:
  
  Interactive grid rendered using the HTML `<canvas>` element
  
  Keyboard controls using Arrow keys and WASD
  
  Random apple generation that avoids spawning on the snake
  
  Collision detection for walls and self-intersection
  
  Real-time score tracking
  
  Persistent high score stored using `localStorage`
  
  Restart button to reset the game state
  
  Visually styled board and UI using CSS


Implementation Details
  
  The game board is rendered on an HTML canvas and divided into a fixed grid.
  
  The snake is represented as an array of `{x, y}` coordinate objects.
  
  Movement is handled by shifting the snake body forward and calculating a new head position based on direction.
  
  Direction changes are buffered to prevent illegal reverse movement.
  
  Apple positions are randomly generated and re-rolled if they overlap with the snake.
  
  The game loop runs on a timed interval and separates update logic from rendering.
  
  High scores persist across sessions using browser `localStorage`.


How to Run
  
  1. Ensure a modern web browser is installed.

  2. Project structure should include:
    index.html
    style.css
    index.js

  3. Open `index.html` in a browser to start the game.


How to Play
  
  1. Use Arrow keys or WASD to control the snake’s movement.

  2. Eat apples to grow longer and increase your score.

  3. The game ends if the snake hits a wall or collides with itself.

  4. Click the **Restart** button to start a new game.

  5. The highest score is saved automatically and persists between sessions.


Skills Demonstrated
  
  JavaScript game loop design
  
  Canvas-based rendering
  
  Grid-based movement and coordinate math
  
  Collision detection
  
  Keyboard event handling
  
  State management and persistence
  
  Separation of structure, style, and logic

Author: Mashroof Samin
