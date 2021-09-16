# carousel-builder

Turn a series of images into a carousel with only a few DOM requirements! Features 5-second auto-advance in addition to controls. Style to your liking.

## install

Install with npm:

```
npm install carousel-builder
```

## use

- Your carousel structure will consist of an arbitrary number of `<img>` elements wrapped in a `<div class="carousel-slide">` wrapped in a `<div class="carousel-frame">`.
- You will also need two elements (`<button>` or otherwise), one with `class="carousel-prev"` and one with `class="carousel-next"`, to act as controls.
- You may optionally include navigation dots by adding an element `<ol class="carousel-dots">` with `<li>` elements equal to your number of images. Just be sure to style `.carousel-dots`, `carousel-dots li`, and `.active-dot` on your stylesheet and _carousel-builder_ will link the dots to your images. Not only will you be able to see where you are in the slideshow, but also you'll be able to click a dot to instantly slide to the corresponding image!
- Example HTML:

```html
<div class="carousel-frame">
  <div class="carousel-slide">
    <img src="image1.jpg" />
    <img src="image2.jpg" />
    <img src="image3.jpg" />
    <img src="image4.jpg" />
  </div>
  <button class="carousel-prev"></button>
  <button class="carousel-next"></button>
  <ol class="carousel-dots">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ol>
</div>
```

Note that buttons and dots are inside the frame in this example, but they are not required to be.

- _Required_ CSS styles (add to these as you like):

```css
.carousel-frame {
  overflow: hidden;
}

.carousel-slide {
  display: flex;
  width: 100%;
  height: 100%;
}

.carousel-slide img {
  width: 100%;
  object-fit: cover;
}
```

## sample

[live demo](http://asbelljc.github.io/carousel-builder)
