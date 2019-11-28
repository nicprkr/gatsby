---
path: '/blog/debugging-sql-import-errors'
date: "2019-11-28"
title: "Debugging SQL Import Errors Locally"
tags: ['Web Development', 'SQL', 'Back End']
excerpt: "I recently had a lot of trouble importing a wordpress database. Here's what I tried so you don't have to."
---

I never thought I'd have an SQL tag on this blog, but three hours of debugging a database error through phpMyAdmin in MAMP, here we are. 

### The Error

Maybe it's because I don't much about SQL, but the server error cracked me up. 

```
MySQL said:
#2006 - MySQL server has gone away.

```
Like, really? Will it come back??

Anyways, what it means is the database is timing out trying to import the file. Rather than trawling through StackOverflow using that as a search phrase, instead I decided to try everything else. 

### The Struggle

First I tried a bunch of stuff that didn't work for me, but may work for someone else struggling. 

* I changed the file extension from `.gz` to `.sql.gz`
* I downloaded and installed [BigDump](https://www.ozerov.de/bigdump/) (yes the name is funny)
* I checked that the character encoding was set to UTF8
* I restarted the servers

### A Glimmer of Hope

Finally I had some success by tinkering around with the actual MAMP configuration files. 

*Didn't Work*

Editing `my.ini` (also known as `my.cnf`) in the bin files so that my `max_allowed_packet = 64 MB` and the `wait_timeout = 1000` & then restarting. 

*Did Work*

In the top-level of phpMyAdmin, there's a tab called *Variables*. In that tab there is a big table of variables (I know, shocking). From there, edit `max allowed packet` to a bigger number. 

After doing that, I restarted the servers and finally I had the sweet satisfaction of my database uploading. 

> IMPORTANT. I can't guarantee any of this, especially for live servers. 

Anyways, hopefully this will help others, or at least be a handy reference when I have to reimport a database and get stuck again. 