# javascript-image-hover

Simple demo showing how to update a preview area when hovering over thumbnail images. The project consists of an HTML file with three sample images, a CSS file for basic styling, and a JavaScript file implementing two functions:

* `upDate(previewPic)` – called on `mouseover`, logs some info, updates the text and background image of the `#image` div.
* `undo()` – called on `mouseout`, resets the div back to its original state.

## Running locally

You can serve the directory with a static server, e.g.: 

```bash
python3 -m http.server 8000
```

and then open `http://localhost:8000/index.html` in a browser. Hover over the thumbnails to see the preview update and check the console output for debugging messages.

## Hosting / sharing

To share the page you can either copy the HTML/CSS/JS into a CodePen (or similar) and publish it, or push the files to a GitHub repository and enable GitHub Pages on the `main` branch. The code is deliberately minimal so it works in any static-hosting environment.
