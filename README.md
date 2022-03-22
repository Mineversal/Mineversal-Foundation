# [mineversal.org](https://mineversal.org)

This is the source code for my blog hosted in the following
url: https://mineversal.org. This source code was adapted from the
[Jekyll-Uno](https://github.com/joshgerdes/jekyll-uno) theme created by
Josh Gerdes.

<div align="center">
  <img src="images/assets/peek_web.gif" width=750>
  <img src="images/assets/peek_mobile.gif" height=500>
</div>

## Dependencies

The following are the prerequisites that need to be installed to be able to 
build the website offline:

- Install ruby; this is the command on Ubuntu
  ```
  sudo apt-get install ruby-full build-essential zlib1g-dev
  ```
- Install bundler
  ```
  gem install bundler
  ```

## Run it offline

Now all dependencies are installed, you can follow these steps to be able to
build the blog offline on your machine:

- clone the repository from GitHub:
  ```
  git clone https://github.com/AzharRizky/Zulma-Blog.git
  ```
- Install gems found in `Gemfile`:
  ```
  bundle install
  ```
- Now, we can start Jekyll server:
  ```
  bundle exec jekyll serve --watch
  ```
- You can access the blog via the following link: http://localhost:4000


---

# How It works

In this part, I will try to explain how things work in this repository. Let's
start by listing the files in this project and what each one does.

## Files

The following are all the files found in this repository sorted in alphabetical
order:

- `css/`: Directory containing `main.css` file which contains my preferred
  styles. This file overrides the properties found in `_scss` directory.

- `_drafts/`: Directory for drafts of your posts. This directory is excluded
  when building by default in Jekyll.

- `images/`: Directory containing images found only the cover of the blog.
  Posts images can be found in `my_collections` directory.

- `_includes/`: Directory containing relatively small HTML layout files that
  will be included by the HTML layout files defined in the `layout` directory.
  - `cover.html`: The blog cover! The part where the name, socials, and
    collection icons are found.
  - `disqus.html`: For the disqus plugin, gonna talk about his [later](#Disqus).
  - `footer.html`: The footer for all pages in the blog where most of the
    JavaScript plugins are defined.
  - `head.html`: The header for all pages in the blog where most of the css
    codes are defined.
  - `socials.html`: The HTML page for all social icons found on the cover.

- `js/`: Directory containing all JavaScript scripts in this blog.
  - `jquery.v3.3.1.min.js`: JQuery v3.3.1 (included so I can work offline).
  - `main.js`: User-defined functions.
  - `search.json`: JSON file that creates blog database for the search
    functionality. Gonna talk about in more detail [later](#Search).
  - `simple-blog-search.min.js`:
  [Simple Blog Search](https://github.com/SeraphRoy/SimpleBlogSearch)
  plugin used for the search functionality.

- `_layouts/`: Directory for the main HTML layouts used in the blog.
  - `default.html`: The main (default) HTML layout for the blog.
  - `named_collection.html`: The HTML layout for enlisting all articles found
    in a certain collection.
  - `post.html`: The HTML layout for the article/post.
  - `tags.html`: The HTML tags for `/tags` route showing list of tags published
    papers mentioned in the blog.

- `my_collections/`: Directory containing all articles I wrote for my blog. All
  files in this directory are in Markdown format. Any images included in any
  article can be found here as well.

- `_sass/`: Directory containing all SCSS files.
  - `animate.scss`: Defines simple animation used in the blog; like the
  collapse or bounce down.
  - `monokai.scss`: Defines the style of the inline code in posts.
  - `tables.scss`: Defines the style of tables in posts.
  - `uno.scss`: Defines the main style for the blog.

- `404.md`: File for not-found pages.
- `_config.yml`: YAML configuration file for Jekyll.
- `Gemfile`: File where you specify the ruby gems you want to use.
- `Gemfile.lock`: File where Bundler records the exact versions that were installed.
- `googleb6210f0379e386f0.html`: File that Google search engine uses to to
prove my ownership to the domain.
- `index.html`: The HTML file for the home page.
- `tags.md`: The main page for `\tags` route.
- `language-modeling.md`: The main page for `/language-modeling` route.
- `machine-translation.md`: The main page for `/machine-translation` route.
- `multilingual-nmts.md`: The main page for `/multilingual-nmts` route.
- `robots.txt`: A file used by search engine crawlers.
- `search.html`: The main page for the `/search` route.
- `sitemap.xml`: A Sitemap is an XML file that lists the URLs for a site.
- `speech-recognition.md`: The main page for the `/speech-recognition` route.
- `word-embedding.md`: The main page for the `/word-embedding` route.

Now, we have an idea about each single file of this repository. Once you start
the server using the `bundle exec jekyll serve --watch` command, the server
will load the `_config.yml` file and then launch the project on the
http://localhost:4000 which will present the content of the `index.html` file.


> **Note:**
>
> Any file that wasn't mentioned in the previous list is either deprecated or
> not important at the current moment!

## _config.yml

`_config.yml` is a YAML file containing the configuration for the Jekyll server.
You can consider this file as the start-point of the whole project. In this
file, you can define the global variables for the whole project. Any file in
this project whether it's an HTML, CSS, JavaScript or even a markdown can
access these global variables.

Now, let's discuss a few of these global variables:

- `title`: The title of the blog.
- `description`: The description of the blog.
- `url`: The url of the deployment.
- `cover`: The image relative path that will be used as a background.
- `baseurl`: The baseurl of the blog. For example, if the `baseurl: 'anwarvic'`,
  this means that the blog will be reached at http://localhost:4000/anwarvic.
- `google_analytics`: The Google Analytics Tracking ID or Measurement ID.
- `disqus_shortname`: The shortname for the disqus plugin.
- `author`: Personal information about the blog owner including his socials.
- `collection_dir`: The directory where all the collections will be found. Mine
  is `my_collections`, so there should be a directory at the root of the project
  with the same name.
- `collections`: A list of all collections in this blog. Each collection is a
  topic; such as "Machine Translation", "Language Modeling", ...etc. Each
  collection has the following properties:
    - `output: true`: This means there will be output for this collection.
    - `permalink`: This is the route of this collection.
    - `title`: The title of the collection.
- `defaults`: All default options can be defined here. Here, I defined the
  default layout for all of my collections; which is `post.html`.
- `destination`: The directory where the project will be built. Mine is `_site`,
  so after starting the server, a new directory called `_site` will be created
  in the root directory.
- `markdown`: The Markdown Flavor used in the project.
- `exclude`: The files that should be excluded and not monitored by the Jekyll
  server.

The following are some of the past variables shown in the blog:

<div align="center">
  <img src="images/assets/cover-desc.png" height=500>
</div>

## index.html

The index.html file is the main HTMl layout for this project. If you open this
file in this project, you will find the following few lines. These few lines
are called Front Matter, you can read more about them from
[here](https://jekyllrb.com/docs/front-matter/):
```
---
layout: default
---
```
This means that the file will include the `default.html` layout found in the
`_layouts` directory first thing. Then, any thing added in the `index.html`
file after these few lines will be used after importing the content of the
`default.html` layout.

## Create New Post

Creating a new post is pretty straight-forward. You can do it by going into
the directory of the collection to which the post belong. For example, if you
want to write a new `Practice` post, you can do it by following
these steps:
- Go to the `my_collections/_practice` directory.
- Create a new Markdown file with the name of the post.
- Add the Front Matter to the file.
    ```
    ---
    title:    # Title of the post.
    date:     # Date of the post.
    cover:    # Relative path to the post's cover image.
    tags:     # Tags that published this paper.
    comments: # Whether or not the post will have comments. (default: true)
    ---
    ```
- Add the content of the post using Markdown.

---
# Features

Starting from this point, I'm going to walk you through the most important
features in this blog and how to customize them:


## MathJax

[MathJax](https://www.mathjax.org/) is a JavaScript plugin used for rendering
LaTeX mathematical formula in HTML. You can use MathJax easily by adding the
following few lines in the `footer.html` file:
```HTML
<!-- Adding MathJax -->
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    "tex2jax": {
      inlineMath: [['$','$'], ['\\(','\\)']],
      processEscapes: true
    },
    "HTML-CSS": { linebreaks: { automatic: true } },
    "SVG": { linebreaks: { automatic: true } },
  });
</script>
{% if jekyll.environment != "development" %}
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-MML-AM_CHTML">
</script>
{% else %}
<script type="text/javascript" async
  src="http://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-MML-AM_CHTML">
</script>
```
This code will do the following:

- Load the latest version of MathJax.
- Allow MathJax to render inline formula as well as ordinary formula.
- Make the rendered math formula responsive with the window size.

For MathJax to work, you need to be connected to the internet. If you want to
use it offline, then follow the steps found
[here](https://docs.mathjax.org/en/v2.7-latest/start.html#installing-your-own-copy-of-mathjax).

## Search 
To be able to customize the search functionality in this blog, you need to
check the following three files:

- `search.html`: This is the HTML layout responsible for the search bar found
  on the cover of the blog.
- `js/search.json`: This is the file responsible for generating the JSON
  database that will be used by the search plugin.
- `js/simple-blog-search.min.js`: This is the
  [Simple Blog Search](https://github.com/SeraphRoy/SimpleBlogSearch) plugin
  that does the searching using the JSON database created at deployment.

<div align="center">
  <img src="images/assets/peek_search.gif" width=750>
</div>

## Minutes to Read

One of the most important features implemented here is to show the number of
minutes an average reader would take to read a certain article. You can find
this piece of information at the first line of any article.

<div align="center">
  <img src="images/assets/to_read.png" width=750>
</div>

The piece of code responsible for this feature can be found in the `post.html`
layout file. In particular, the following few lines:
```html
<span id="reading-time">
  {% assign words = page.content | strip_html | number_of_words %}
  {{ words | divided_by: 250 | plus: 1 }} mins read
</span>
```

> **Note:**
>
> This code assume that the average person is able to read **250** words per
minute which is the universal value for English. If this number changes for
other languages, don't forget to change it here.


## Create New Collection

In this blog, you can see about five different collections which are:
"Language Modeling", "Machine Translation", "Multilingual NMTs",
"Speech Recognition" and "Word Embedding". To be able to create a new one,
follow the following three steps:

- Create a new entry at the collection list in the `_config.yml` file like so:
  ```yaml
  [COLLECTION-NAME]: #this is for the URL
    output: true
    permalink: /:collection/:path
    title: "[COLLECTION-TITLE]" #this is for the button
  ```
- Create a new file at the root named `[COLLECTION-NAME].md` with the following
  written inside:
  ```
  ---
  layout: named_collection
  collection_name: [COLLECTION-NAME]
  title: [COLLECTION-title]
  permalink: /[COLLECTION-NAME]/
  ---
  ```
- Create a new directory named `_[COLLECTION-NAME]` inside the `my_collection`
  directory. Notice the underscore `_` at the beginning of the name!

## Disqus

You can use disqus plugin to enable comments on your blog. To customize it, you
only need to add your disqus shortname to the `disqus_shortname` variable in
the `_config.yml` file.

The HTML for the disqus plugin, can be found in the `disqus.html` file.

> **Note:**
>
> To disable the comments on a certain post, go to the post markdown file and
> add the following line in the header just like so:
> ```
> ---
> comments: false
> ---
> ```

<div align="center">
  <img src="images/assets/disqus.png" width=750>
</div>

## Google Analytics

You can enable Google Analytics on your blog. To customize this, you only need
to add your Tracking ID (or Measurement ID) to the `google_analytics` variable
in the `_config.yml` file. To know how to get this ID, check out the following
[page](https://support.google.com/analytics/answer/9304153?utm_campaign=2021-q1-onboarding-ga&utm_source=google-growth&utm_medium=email&utm_content=gold-welcome-0).

If you want to check the Javascript code responsible for enabling Google
Analytics, you can check the `footer.html` file. You will find the following
code:
```HTML
<!-- Adding Google Analytics -->
{% if site.google_analytics and jekyll.environment != "development" %}
<script async src="https://www.googletagmanager.com/gtag/js?id={{ site.google_analytics }}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '{{ site.google_analytics }}');
</script>
{% endif %}
```

## robots

If you have a page <u>**with a layout**</u> that you want to make it not
accessible to search engines, you can add the following line in the Front Matter
of that page:
```
---
...
robots: noindex
---
```

This will make the page not accessible to search engines by activating the
following `<meta>` tag to the page header (`head.html`):
```html
{% if page.robots %}
  <meta name="robots" content="{{ page.robots }}">
{% endif %}
```

> **Note:**
>
> This is only for pages that has layout. In other words, its layout can NOT be
> `layout: null`
## Sitemap

A Sitemap is an XML file that lists the URLs for a site. It allows webmasters
to include additional information about each URL; such as:
- When it was last updated.
- How often it changes
- How important it is in relation to other URLs of the site.
- etc.

You can see the sitemap at the following URL: `http://localhost:4000/sitemap.xml`
or `https://[USERNAME].github.io/sitemap.xml`.

You can change the **priority** and **frequency** of a certain
post/page in your blog by adding the following few lies in the Front Matter of
that post/page:
```
...
sitemap:
  priority: 0.7
  changefreq: weekly 
```

> **Note:**
>
> The default frequency is `monthly` while the default priority for any *post*
> is `0.5` while it's `0.3` for any *page*. A page is any file that isn't HTML
> while a post is an HTML or a markdown files. 

You can exclude a post/page from the sitemap by adding the following
line in the Front Matter of that post/page:
```
...
sitemap:
  exclude: true
```