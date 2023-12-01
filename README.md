# Slider with Hover Effect

This repository contains a simple slider implementation with a hover effect, crafted using HTML and CSS. The project showcases various features, including responsiveness, image manipulations, and a 3D wave animation on hover.

## Main Branch (`main`)

In the `main` branch, you will find the code implemented solely with HTML and CSS. The key features include:

- **Responsive Design:** The blocks adapt to different screen sizes using viewport units (`vw` and `vh`) and the `calc()` function.

- **Image Effects:** Images are styled with the `filter` property, applying grayscale and brightness effects.

- **Hover Animation:** The wave effect is achieved through the use of the `transform` property, employing `translateZ()` and `rotateY` for each element and its adjacent blocks.

- **3D Effect:** The `perspective` property is applied to create a 3D effect when interacting with the slider on hover.

## Production Branch (`production`)

In the `production` branch, JavaScript will be introduced to enhance the slider's functionality. Additionally, a production-ready build of the project can be generated in the `dist` folder using Gulp.

To build the project, run the following commands:

```bash
npm install     # Install project dependencies
gulp build      # Build the project and generate the 'dist' folder
```
The resulting `dist` folder contains the optimized and minified files suitable for hosting on a web server.


