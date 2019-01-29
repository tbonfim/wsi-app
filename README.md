
## Project Details


This project was developed as the assessment for Williams-Sonoma, following the instructions:


Welcome to the Williams-Sonoma Coding Challenge!


* Using the json file provided below, given an input of products, design a page that:
  * 	Consumes the JSON of products<br>
  * 	Builds the product details page with all products<br>
  * 	Displays the product details, including price, product name and the main hero image<br>
  * 	Interacts intuitivley; if you click on the image, you should see an overlay with a carousal of all thumbnail images[JSON URL](https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json)
 

* Guidelines:
  * 	Use any view framework of your choice<br>
  * 	As much as possible, stick to vanilla JavaScript for DOM handling (queries, events, etc.)<br>
  * 	Spend your time in design and implementation. We are not looking for the quickest solution.<br>
  * 	Detail your build system and tests in README.md – how do we run the tests and run the project?<br>
  * 	Showcase your ES6 skills and your UX/UI chops<br><br>

* Bonus:
  * 	Responsive experience – 1 column on mobile to 3 columns on desktop
  *   Accessibility and SEO



## Tech Stack

For this implementation I decided to use [React](https://reactjs.org/) as a view library and [Bootstrap](https://getbootstrap.com/) as the css framework. I also used another packages that worths mentioning here:

1. axios: Promise based HTTP client for the browser and node.js - Actually, the request mock is commented inside the code, I just let it there to simulate a real world situation
2. enzyme: Helper for unit test
3. react-currency-format: Usefull component to format 

Due to the simplicity of this test, it wasn't necessary to go through the complete react lifecycle, but productList component uses `componentDidMount` in order to fetch data; Also, since there's no input fields in the test, the state of the components werent explored deeply, although the Carousel showing/hiding is controlled by the state - Including a parent-child component callback to refer to the parent state. 

The main reason I decide to use Bootstrap 4 for this solution was the grid system it provides, and, this way, making this app responsive. I also decided to use as much as possible all classes, reducing the need of writting much css ans using always that was possible, Bootstrap utilities classes (Margins, colors).


Another important thing to point out is that I could have used Bootstrap modal component to implement modal carousel, but this way I wouldn't show the use of React state handling, and also I had a chance to write some CSS. 


For more information about the solution, please feel free to reach me out: [Thiago Bonfim](mailto:tbonfim@avenuecode.com)

## Project instructions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the dependencies.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>


## TL:DR
Run `npm install` then `npm start` (app will be running at [http://localhost:3000](http://localhost:3000)); To run tests do `npm test`