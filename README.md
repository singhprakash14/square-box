# Matrix Game

A simple interactive 3x3 matrix game built with React where players click boxes in sequence and watch them animate in their original order.

## Features

1. **Interactive 3x3 Matrix**
   - Clean, responsive grid layout
   - Visual feedback on interaction
   - Smooth transitions and animations

2. **Game Mechanics**
   - Click boxes to turn them green
   - Each box can only be clicked once
   - Tracks the sequence of clicks
   - Automatic sequence replay when complete

3. **Sequence Animation**
   - After clicking all boxes, watch them turn orange
   - Boxes animate in the original click sequence
   - 500ms delay between each animation step

4. **Reset Functionality**
   - Reset button appears after completion
   - Clears all boxes and sequence
   - Allows for multiple playthroughs

## How to Play

1. Start clicking any box in the 3x3 matrix
2. Each clicked box turns green
3. Continue clicking unselected boxes
4. After clicking all 9 boxes:
   - The game automatically starts the replay
   - Boxes turn orange in your original click sequence
5. Click "Reset Game" to start over

## Technical Implementation

### Components

- **App Component**: Main game component managing state and logic
- **Matrix Container**: Grid layout for the 3x3 matrix
- **Box Elements**: Individual clickable boxes with state-based styling

### State Management

- `clickSequence`: Tracks the order of box clicks
- `showFinal`: Controls the final animation state
- `boxes`: Manages the current state of each box

### Styling

- CSS Grid for matrix layout
- Flexbox for centering and alignment
- CSS transitions for smooth animations
- Responsive design principles

## Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local server URL

## Technologies Used

- React 18.3
- Vite
- CSS3
- JavaScript (ES6+)
