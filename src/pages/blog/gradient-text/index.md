---
path: '/blog/gradient-text'
date: "2019-08-01"
title: "Gradient Text in CSS"
tags: ['Web Development', 'Tip', 'CSS', "Front End"]
excerpt: "Give your text some colour."
---


```
.gradient {
    background: -webkit-linear-gradient(#00ff7b,#0bf)!important;
    -webkit-background-clip: text!important;
    -webkit-text-fill-color: transparent!important;
}
```
<span style="background: -webkit-linear-gradient(#00ff7b,#0bf)!important;
    -webkit-background-clip: text!important;
    -webkit-text-fill-color: transparent!important;">Here's what it looks like!</span>

[The Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) goes way more into depth on how to customize and use your gradients. 

<span style="background: -webkit-linear-gradient(120deg, blue, orange, green)!important;
    -webkit-background-clip: text!important;
    -webkit-text-fill-color: transparent!important;"><b>Happy gradient-ing!</a></span>