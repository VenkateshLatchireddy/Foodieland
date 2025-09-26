# Recipe Card App

A recipe card application built with React that displays various recipes with beautiful animations. The app uses lazy loading for images and animates the recipe cards when they come into view.

## Features

- **Responsive Layout**: The app is designed to be responsive and adapts to different screen sizes, from large desktops to small mobile devices.
- **Lazy Loading**: Images are lazily loaded to improve performance, showing only when they are in the viewport.
- **Hover Effect**: When hovering over a recipe card, a subtle lift effect is applied.
- **Animation**: Recipe cards animate into view when they are scrolled into the viewport using the Intersection Observer API.
- **Grid Layout**: The cards are displayed in a grid layout, and the number of cards per row adjusts based on screen size.

## Technologies Used

- **React**: For building the user interface.
- **CSS**: For styling and animations.
- **Intersection Observer API**: To detect when a recipe card enters the viewport and apply animations.
- **Lazy Loading**: To load images only when they are in the viewport.

## Project Setup

To get started with this project locally, follow these steps:

## Assignment Screenshots: images are downloaded from meta AI, images credits to whatsapp META AI
![Foodieland](https://raw.githubusercontent.com/VenkateshLatchireddy/Foodieland/src/assets/s6.png)
![Foodieland](https://raw.githubusercontent.com/VenkateshLatchireddy/Recipe-Contest/main/recipe-contest/src/assets/s1.png)
![Foodieland](https://raw.githubusercontent.com/VenkateshLatchireddy/Recipe-Contest/main/recipe-contest/src/assets/s2.png)
![Foodieland](https://raw.githubusercontent.com/VenkateshLatchireddy/Recipe-Contest/main/recipe-contest/src/assets/s7.png)
![Foodieland](https://raw.githubusercontent.com/VenkateshLatchireddy/Recipe-Contest/main/recipe-contest/src/assets/s8.png)

![Foodieland](https://raw.githubusercontent.com/VenkateshLatchireddy/Recipe-Contest/main/recipe-contest/src/assets/s3.png)

![Foodieland](https://raw.githubusercontent.com/VenkateshLatchireddy/Recipe-Contest/main/recipe-contest/src/assets/s4.png)

![Foodieland](https://raw.githubusercontent.com/VenkateshLatchireddy/Recipe-Contest/main/src/recipe-contest/assets/s5.png)

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Clone the Repository

```bash
git clone https://github.com/VenkateshLatchireddy/Recipe-Contest.git



Install Dependencies

Navigate to the project directory and install the required dependencies:

cd recipe-card-app

npm install


Run the Application

Once the dependencies are installed, you can run the application locally:

npm start

This will start the app on http://localhost:3000.

Folder Structure


The project structure is organized as follows:

recipe-card-app/
│
├── assets/              # Images used in the recipe cards
│   ├── Spaghetti-Carbonara.jpg
│   ├── Mango-Smoothie.jpg
│   └── ...              # Other images
│
├── src/     
    |----assets/            # Source files
│   ├── components/  
    |---data/    # React components (RecipeCard.js)
│   ├── styles/          # Stylesheets (RecipeCard.css)
│   ├── App.jsx           # Main React component
│   └── index.js         # Entry point for React
│
├── .gitignore           # Git ignore file
├── package.json         # npm dependencies and scripts
└── README.md            # Project documentation



Styling

The app uses custom CSS to achieve a clean, modern look. The styles are responsive, ensuring that the recipe cards adjust to different screen sizes.

CSS Features:

Hover Effect: When you hover over a recipe card, it lifts slightly, and the box-shadow increases.

Fade-In Animation: Recipe cards fade in and move upward when they come into the viewport, thanks to the Intersection Observer API.

Grid Layout: The recipe cards are displayed in a grid layout, with the number of cards per row adjusting based on the screen width.

License
This project is open-source and available under the MIT License.


### Customization

Make sure to replace the following:

1. `your-username` with your GitHub username in the clone command.
2. You can modify the **License** section depending on your choice of license (MIT is used here as an example).

This `README.md` should provide a detailed overview of your project and instructions for anyone who wants to contribute or run the project locally.


