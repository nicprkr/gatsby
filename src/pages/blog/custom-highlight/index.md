---
path: '/blog/custom-text-highlight'
date: "2019-08-05"
title: "Custom Text Highlight in CSS"
tags: ['Web Development', 'Tip', 'CSS', "Front End", 'Details']
excerpt: "For when you're running out of other pseudo elements to style."
---

Ever been to a website and noticed the highlight color was different from the standard blue highlight? Here's how they did it:

```
::selection {
    background: #000000;
    color: #ffffff;
}
```
Try highlighting this text to see the effect (I set mine to my site's colors rather than black, because I'm fun).

### Deep Dive

*Pseudo-elements* are similar to *pseudo-classes* like ```:hover, :focus, :active```. This is a simiplification, but they're 'pseudo' because they don't directly exist on the website. Both are used to extend existing elements. Pseudo-classes can style an element based on its *state*. Pseudo-elements style the element based on its specific *selected part*.

*Tip:* Pseudo-elements generally use ```::double-colon``` syntax to distinguish themselves from pseudo-classes. [You can see a full list of pseudo-elements here.](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements#Index_of_standard_pseudo-elements)

### Advanced Styling

Aside from changing the background and the color, ```::selection``` supports multiple CSS properties. What does that look like? I'm glad you asked.

```
.atrocious::selection {
    background-color: yellow;
    color: blue;
    cursor: crosshair;
    caret-color: red;
    outline: 2px solid orange;
    text-decoration: green wavy underline;
    text-emphasis-color: blue;
    text-shadow: 2px 2px 6px black;
}
```

<span class="atrocious">Do you <em>love</em> it? Simply highlight this to see what sort of glorious effects this text contains.</span>

It's worth noting that in Firefox and Chrome, only these properties seem to affect the appearance. 

```
.atrocious::selection {
    background-color: green;
    color: pink;
    text-shadow: 2px 2px 6px black;
}
```

Unfortunately (and probably because the W3C has common sense), you can't stack more pseudo-selectors or pseudo-classes onto your selection. For example, ```super-atrocious:nth-of-type(even)``` won't yield a beautiful checkerboard of highlights. It also doesn't seem to support more advanced background properties like images or gradients.

However, as shown, you *can* give classes their own ```::selection```  styling. Why? Why not, I guess. 

What's your favourite pseudo-element? Alternatively, what soft '90s aesthetic will you incorporate into your blog? Let me know on twitter!



