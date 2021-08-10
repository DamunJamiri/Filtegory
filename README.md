# 🗄️ Filtegory

Simple, pure and lightweight Javascript library to filter items by categories.

# Overview

This is a simple tool to change DOM (toggle classes) and filter any items by categories.

You can see a demo of it [here](https://codepen.io/DamunJamiri/full/vYmvVve).

# Usage

## Include CSS

First include the stylesheet in your HTML head:

```html
<link rel="stylesheet" href="Filtegory.min.css">
```

You can also [style Filtegory classes manually](#styling-filtegory-classes-manually-optional). (recommended)

## Include JS

Now include JavaScript at the end of your HTML (before closing the `body` tag):

```html
<script src="Filtegory.min.js"></script>
```

## Setup

### HTML Markup

For each Filtegory item you need to create a structure like this:

```html
<div id="Filtegory">
    ...
    <div class="categories">
        <a class="category" data-category="all">All</a>
        <a class="category" data-category="category1">Category 1</a>
        <a class="category" data-category="category2">Category 2</a>
        <a class="category" data-category="category3">Category 3</a>
        ...
    </div>

    <div class="items">
        <div class="item" data-category="category1">
            Item 1
        </div>
        <div class="item" data-category="category2">
            Item 2
        </div>
        <div class="item" data-category="category1">
            Item 3
        </div>
        <div class="item" data-category="category3">
            Item 4
        </div>
    </div>
</div>
```

Notes:
- You should have a category by `data-category="all"` to show all items.
- You can use any tag you want for categories and items.
- Container can be specified with `class` instead `id`. but Filtegory only selects the first element with that class.

### Initializing with JS

Then, simply introduce your element to Filtegory:

```javascript
Filtegory("#Filtegory");
```

it's all over. enjoy :)

## Styling Filtegory classes manually (Optional)

| Class | Description |
|-----------|-------------|
| `.category[data-category="all"]` | Specifies the 'All' category. |
| `.category.active` | Specifies that a category is enabled |
| `.item.hidden-item` | Specifies that the item isn't in the selected categories and should be hidden. |
