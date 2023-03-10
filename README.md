<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">React Vegetaria Recipe by Gabriele Stringano</h3>

  <p align="center">
  A tool for researching information about vegetarian recipes. Powered by  APIs and React
    <br />
    <a href="https://capable-maamoul-4da65e.netlify.app/"><strong>Try the program »</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#how-it-work">How it Works</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## 💡About The Project

As a Start2impact student, I developed this application to put my newly acquired knowledge of JavaScript, React, Redux into practice.

<p align="right">(<a href="#top">back to top</a>)</p>

<ol>

### Built With


* [![Javascript][Javascript.js]][Javascript-url]
* [![NodeJs][NodeJs.js]][NodeJs-url]
* [![React][React.js]][React-url]
* [![Redux][Redux.js]][Redux-url]
* <a href="https://spoonacular.com/food-api">External Service->spoonacular API </a>

<p align="right">(<a href="#top">back to top</a>)</p>

</ol>

<!-- How it Works + ScreenShot -->

## ⚙️How it Works

- The site allows users to search vegetarian recipes by name and views informations such as: title, serving, and ingredients. In English.<br/>
The text box is an Input element. By pressing on the Search button, the browser will contacts the external service (spoonacular) by an action (Redux) to gets the list of recipes according to the name indicated in the text box. The list of recipes is saved in the Store by a dispatch (Redux).
- it's possible to display other recipes by pressing on the Next button, and it's possible to go back with the Previous button. Buttons work due to an eventListener that triggers an action that modifies the offsett in the Store (Redux).
- Pressing in the button of any recipe will execute a new request to the external service; The 'Link' element (React-Router-Dom) brings the user to the page '/research/:id' that displays informations such as: title, serving, and ingredients.
- The APIKEY is required to use the API, it's stored in a .env file.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## ❗Getting Started

To get a local copy up and running follow these simple example steps:
<ol>
<li> Go to https://github.com/Gabriele-Stringano/react_vegetarian_recipe and press the green button </li>
<li> Select Download zipper </li>
<li> Open the zipper and extract the folder </li>
<li> Open a text editor and add the extracted folder </li>
<li> Install the dependencies: npm install</li>
<li> Run the Program: npm start</li>
<li> The browser should open automatically</li>
</ol>

### Prerequisites
You need to own these programs:
<ul>
    <li> A text editor-IDE </li>
    <li> A program to unzip files</li>
    <li> Instal Node.js</li>
</ul>


<!-- CONTACT -->
## 📲Contact

Email: - gabrielestringano@gmail.com </br>
LinkedIn: - https://www.linkedin.com/in/gabriele-stringano/

My Projects: - https://github.com/Gabriele-Stringano/
<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## 📚Acknowledgments

List of resources I used:

* [GitHub](https://github.com)
* [Start2Impact](https://www.start2impact.it/)
* [Visual-Studio](https://code.visualstudio.com/)
* [ChatGPT](https://openai.com/)
* [Best-README-Template](https://github.com/ferneynava/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot1]: public/imagesReadme/ScreenshotStore.png
[product-screenshot2]: public/imagesReadme/ScreenshotAction.png
[product-screenshot3]: public/imagesReadme/ScreenshotRouting.png
[Javascript.js]: https://img.shields.io/static/v1?message=Javascript&logo=JavaScript&labelColor=5c5c5c&color=efd81d&logoColor=white&label=%20&style=FOR-THE-BADGE
[Javascript-url]: https://en.wikipedia.org/wiki/JavaScript
[NodeJs.js]: https://img.shields.io/badge/Js-Node.js-brightgreen
[NodeJs-url]: https://nodejs.org/en/
[React.js]: https://img.shields.io/badge/Js-React-lightblue
[React-url]: https://reactjs.org/
[Redux.js]: https://img.shields.io/badge/Js-Redux-purple
[Redux-url]: https://redux.js.org/introduction/getting-started
