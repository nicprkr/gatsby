---
path: '/blog/new-page-testing-checklist'
date: "2019-07-31"
title: "New Page Checklist"
tags: ['Web Development', "Resource", "SEO", "Front End"]
excerpt: "Don't want people pointing out bugs in your beautiful new page? Follow this quick checklist to avoid problems."
---

Don't want people pointing out bugs in your beautiful new page? Follow this quick checklist to avoid problems.

1. [Pre-Build](#prebuild)
2. [Code Validation](#code)
3. [Check Metadata](#metadata)
4. [Page Speed](#speed)
5. [Forms](#forms)
6. [Display](#display)
7. [Spellcheck](#spellcheck)

<a name="prebuild"></a>
### Pre-Build

Who do you need to support? What devices do they use? What browsers do they use? If you have the data, make some choices about:
- what sort of browser compatitbility you need
- what sort of tools you should use
- what metrics and performance indicators you need to gauge the success of your project. 

Top Tools: [CanIUse](https://caniuse.com), [Google Analytics](https://google-analytics.com)

==
<a name="code"></a>
### Code Validation

#### CSS Validation

Look good, feel good. Ensure your CSS is functioning properly using this free tool.

<b>Top Tool:</b> [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

#### HTML Validation

Make sure a stray ```div``` tag won't ruin your layout.

<b>Top Tool:</b> [W3 HTML Validator](https://validator.w3.org/) to m

Although it's worth a deep-dive into what accessibility means and how it works, you that your site is complying with best practices.

<b>Top Tool:</b> [Achecker](https://achecker.ca/checker/index.php).

#### JS Validation

Can you use all the ES6 syntax?
Do you need any polyfills?
Are you ```console.log('logging too much on the client-side?')```?

<b>Top Tool:</b> [Code Beautify Javascript Validator](https://codebeautify.org/jsvalidate)

==
<a name="metadata"></a>
### Check Metadata

#### Social Sharing

Makes sure you have metadata for your social networks set up & validated.

<b>Top Tools:</b> [Facebook Debugger](https://developers.facebook.com/tools/debug/), [Twitter Card Validator](https://cards-dev.twitter.com/validator), [Linkedin Card Validator](https://www.linkedin.com/post-inspector/)

#### Analytics

If you're using analytics, make sure those are included and are tracking properly. Ensure you have controls to filter your own traffic.

==
<a name="speed"></a>
### Speed

#### Minify Files

Either use a development tool like Gulp/Grunt/Webpack, or manually minify your files (!!!) before serving.

<b>Top Tool:</b>  [Minify](https://varvy.com/pagespeed/leverage-browser-caching.html) (although you should probably set up a dev tool or plugin to automate this for you!)

#### Caching 

If you can use a caching plugin, do so; otherwise, you might have to set a cacheing policy in your .htaccess file.

<b>Top Tool:</b> [Guide on How to Set Up Caching](https://varvy.com/pagespeed/leverage-browser-caching.html)

#### Page Speed Testing

Check the network tab in the console to make sure a) your page isn't huge and b) there's no hanging network requests. Run a Page Speed audit to see what you can improve on. 

<b>Top Tool:</b> [Page Speed Insight](https://developers.google.com/speed/pagespeed/insights/)

==


<a name="forms"></a>
### Forms

- Fill out all forms and make sure data is being posted to the right place
- Enter invalid data to ensure form validation and error messages are working correctly (0, undefined, long strings, invalid filetypes, etc)

==

<a name="display"></a>
### Display

Check all major browsers &amp; devices that you will be supporting.

iOS Desktop | Windows Desktop | iOS Tablet | Android Tablet | iOS Mobile | Android Mobile
--- | --- | --- | --- | --- | --- |
Chrome | Chrome | Chrome | Chrome | Chrome | Chrome |
Firefox | Firefox | Firefox | Firefox | Firefox | Firefox
Safari | x | Safari | x | Safari | x |
x | IE11 | x | x | x | x
x | Edge | x | x | x | x
x | x | x | Samsung Internet | x | Samsung Internet



<i>Optional</i>: SmartTV

<b>Top Tool:</b> [Browserstack](https://www.browserstack.com/) - free trial & some free elements

==
<a name="spellcheck"></a>
### Spellcheck

Because nothing is as annoying as some smug person pointing out you're missing an apostrophe....

<b>Top Tool:</b> [Typosaurus](https://typosaur.us/) 

==

That's it! Think this checklist is missing something? What's the worst bug you've accidentally sent to production? Let me know on twitter.