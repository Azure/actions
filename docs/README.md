# github-actions
Github Actions - Jekyll Website

### Requirements to run:
1. Install [Docker](https://docs.docker.com/get-docker/).

The home page already has the following libraries included:
1. [Bootstrap](https://getbootstrap.com/)
2. [Animate.style](https://animate.style/)
3. [Wow.js](https://wowjs.uk/)

If you need to load additional librari via the `head` you can include them in [`/_includes/addiional-head.html`](https://github.com/S-Cardenas/github-actions/blob/main/_includes/additional-head.html).

### Quickstart:
1. Run `docker-compose build && docker-compose up`
2. Visit [localhost:4000](http://localhost:4000) to view the home page. You can add all of your code here.
3. View an example static page at [localhost:4000/example](http://localhost:4000/example). This page has examples with [Bootstrap](https://getbootstrap.com/), [Animate.style](https://animate.style/) and [Wow.js](https://wowjs.uk/).

Adding new HTML to the home page by modifying the [home layout](https://github.com/S-Cardenas/github-actions/blob/main/_layouts/home.html):

```
<!DOCTYPE html>
<html>
  <head>
    {% include head.html %}
    {% include additional-head.html %}
  </head>
  <body>
    <section>
      <div>Hello world. Home Page.</div>
      <div>You can add all your code in here.</div>
      <div>Bootstrap, animate.css and wow.js have already been included in the head of this HTML document.</div>
      <div>:)</div>
    </section>
    {% include home-js.html %}
  </body>
</html>
```

Update the css that shows up on the home page by modifying the [home.css stylesheet](https://github.com/S-Cardenas/github-actions/blob/main/css/home.css):
```
.my-custom-color {
  color: red;
}
```

Javascript can be added to the home page by adding it into the `_includes` file named [home-js.html](https://github.com/S-Cardenas/github-actions/blob/main/_includes/home-js.html).

```
<script>
  // Include any .js here. This file is specific to the home page.
  console.log("Hello world from the home page");
</script>
```

Usefule resources for using Jekyll:
1. [Official Jekyll Tutorial](https://jekyllrb.com/)
2. [Building Static Sites with Jekyll](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages#running-a-website-locally-)
3. [Example Project](https://github.com/joeltennant/Jekyll-and-Docker-Compose)