# AI Education Helper

A React JS web application designed for both Android and iOS that allows users to input math or science problems and view interactive solutions.

## Features

### Home Screen
- Photo input button for capturing problems with camera
- Text input field for manually entering problems
- Clean, minimalist UI design

### Solution Page
- Horizontal card carousel displaying different solving methods
- Card preview of each solution approach
- Visual emphasis on the selected card, with others slightly faded

### Detailed Solution Page
- Step-by-step solution breakdown
- Interactive visualizations for applicable problems
- Clear typography and spacing for readability

## Getting Started

### Prerequisites
- Node.js (v12 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/ai-education-helper.git
```

2. Navigate to the project directory:
```
cd ai-education-helper
```

3. Install dependencies:
```
npm install
```

4. Start the development server:
```
npm start
```

The application will open in your default browser at http://localhost:3000.

## Technologies Used

- React.js
- React Router for navigation
- Swiper.js for carousel functionality
- CSS3 for styling (no external UI libraries)

## Project Structure

- `/src/components/Home` - Components for the input screen
- `/src/components/Solution` - Components for the solution methods carousel
- `/src/components/DetailedSolution` - Components for the step-by-step solution view

## Future Enhancements

- Backend integration for actual problem solving
- User accounts and saved solutions
- Dark mode support
- More interactive visualizations
- Mobile app wrapper using React Native

## License

This project is licensed under the MIT License - see the LICENSE file for details.
