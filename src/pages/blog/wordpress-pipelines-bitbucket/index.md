---
path: '/blog/wordpress-bitbucket-pipelines'
date: "2019-08-12"
title: "Use Bitbucket Pipelines for a Wordpress Theme File"
tags: ['Web Development', 'Resource', 'DevOps', 'Git', 'Bitbucket']
excerpt: "Up your git game with automated branch deployments using Bitbucket pipelines."
---

Bitbuckets has a cool integrated feature called pipelines, which can automate deployments from your repository and is pretty easy to set up. I was looking for a way to integrate a deployment tool to my git repository and this is the solution I landed on after much stack overflow perusal. I have pretty much zero dev-ops experience and I had to look up what CI/CD and Docker meant, so if I can do it, so can you, probably.

<i>CI/CD stands for continuous integration and continuous delivery, by the way. Still not entirely sure about Docker.</i>

### Requirements

Bitbucket account, git, connected domains with hosting, staging site (optional)

### Caveats

This article refers to <a href="https://mediatemple.net">Mediatemple</a> because I use them for hosting; not a paid plug, but I've liked my service there so far. 

*NOTE*: Mediatemple has git pre-installed on the server.

*NOTE*: I use <a href="https://www.sourcetreeapp.com/" target="_blank" rel="noreferrer noopener">Sourcetree</a> to manage my git branches.

*NOTE*: This is specifically about how to set this up for a Wordpress theme folder, including migrating the Wordpress site. I generally set up my git repository in the theme folder rather than in the root.

==

### STAGE 1: SETTING UP THE SITE

<i>Skip this step if the two sites ( staging and production ) are already set up and up-to-date.</i>

If it's a brand new site, do this for the production site, and for the staging site as well if you're using one.

1. Create a database for the site in phpMyAdmin on your hosting server. 
2. Download a backup of the production site (theme files, plugins, and database) & copy the theme files to your computer. You can use a tool like [Updraft](#) to grab everything. Or, if you're feeling spicy, you can export the DB in phpMyAdmin and FTP the files from your server to your computer.
3. In your empty database from Step 1, import the database & change the ```SITEURL``` and ```HOME``` in WP_OPTIONS to staging.website.com, or whatever URL you want to use. 
4. Add a no-robots and a htpasswd to lock the site. (Wondering what that is? [This is how you do that.](#) )
5. Install Wordpress on staging.website.com (same version as the production site). [Here's where you can grab the different versions.](#)
6. Upload the theme & plugin files to staging.website.com using FTP/SFTP.

>*VERY IMPORTANT*: DO NOT upload the ```node_modules``` OR the ```git``` files (if they currently exist) - it takes a LONG time & not necessary for production. The exception is if you have some sort of library that you need in the node_modules folder.

>*ALSO PRETTY IMPORTANT*: The tried and true way to get everything safely installed is to start by installing your theme, and then install your plugins one-by-one. If one crashes your site then you can swiftly delete it over FTP.

7. Update wp-config to use the staging.website.com information & transfer over via FTP.

8. Repeat these steps for the production site if necessary.

==

### STAGE 2: SETTING UP YOUR LOCAL AND GIT REPOSITORY

This assumes you have a local site running that is up-to-date with the production website. If you don't, you really need one! [Here's how to set that up.](#)

1. Create a git repository in your website.localhost theme file.
*IMPORTANT*: set up a .gitignore to exclude any sensitive or large files. DO NOT commit your API keys.
2. Sync the remote git repository using sourcetree.

3. In source tree, set up the branches. I usually use this setup:

 > <b>Master</b>: this branch will control the deployments to the production site. Nobody makes changes directly to master.

 > <b>Staging</b>: this branch controls deployments to the staging site. When the code for the staging site is tested & approved, this branch can be merged with the master branch to push the changes to production. 

 > *(Optional)* <b>Feature_*</b>: these are branched off master to create new features for the website, and control the localhost. Once they are approved, they are merged into staging for testing.

 ==

### STAGE 3: SETTING UP PIPELINES IN BITBUCKET

1. In the remote repository in Bitbucket in the staging branch, go to Pipelines and toggle on 'enable Pipelines'. It will prompt you to create a ```bitbucket-pipelines.yml```

Paste this code, but don't commit it yet:

```
pipelines:
  branches:
    staging:
       - step:
           name: Deploy to Staging
           script:
             - apt-get update
             - apt-get -qq install git-ftp
             - git ftp catchup --force --user $FTP_USERNAME --passwd $FTP_PASSWORD ftp://s122222.gridserver.com/staging.website.com/html/wp-content/themes/YourTheme/
    master:
       - step:
           name: Deploy to Master
           script:
             - apt-get update
             - apt-get -qq install git-ftp
             - git ftp catchup --user $FTP_USERNAME --passwd $FTP_PASSWORD ftp://s1222222.gridserver.com/website.com/html/wp-content/themes/YourTheme/
```
<b>Helpful:</b> add the -vv flag if you want detailed logging. It will print everything to the pipeline, which is super helpful if there are problems. It looks like: 
```git ftp catchup --user $FTP_USERNAME --passwd $FTP_PASSWORD ftp://s1222222.gridserver.com/website.com/html/wp-content/themes/YourTheme/ -vv ```


Again, DO NOT COMMIT THIS FILE YET. It won't catostrophically fail but it will make your life more annoying, because you will have to delete the ftp-log and start over again.

2. In the menu, go to 'settings' and then in Pipelines, click 'repository variables'.
3. Set ```FTP_USERNAME``` and ```FTP_PASSWORD``` to the respective ftp username/password. If they are different between the staging and the production domain, prepend the FTP variables, eg. ```STAGING_FTP```.
4. Once the variables are saved, you can commit this file to your master branch.
5. In pipelines, make sure staging is deploying.
6. Both pipelines MUST deploy to the sites for this to work.

==

### STAGE 4: DEPLOYING WITH PIPELINES

1. In staging, change the pipelines-bitbucket.yml file:
```git ftp catchup``` to ```git ftp push```
2. Commit the file and push it to staging.
3. In bitbucket, go to the pipelines tab and check to see if the push to staging triggered the commit.
> IMPORTANT: although not part of the pipeline configuration, check to make sure the commit didn’t break anything. Use the [Website Testing Checklist](/website-testing-checkinglist) to guide your testing.
4. Merge the staging commit into master.
5. If the pipeline successfully builds, then it's ready for feature development to be branched off. 

### TROUBLESHOOTING:
- the variables are case sensitive; make sure that ```$FTP_USERNAME``` matches, and it's not ```ftp_USERNAME```
- makes sure the path to the ftp server is correct. For a Mediatemple general user, this is the format:
```ftp://s1222221.gridserver.com/domain/html/wp-content/themes/ThemeName/```
- IMPORTANT: make sure your FTP user has the correct permissions and that they line up with the path to the server. If those aren't aligned, git-ftp will create new files and folders along the path.
- make sure that the git-ftp.log is correct & tracking the commit changes; if there's no changes detected, the git-ftp.log should be deleted and 'git catchup' should be run again
- if the build is throwing an error saying it couldn't get the previous commit, run git catchup - if this change is sudden, make sure you haven't done something like change your domain host that would prevent the FTP user from connecting

### Done!

Hopefully that worked for you and you can relax with a cup of coffee. Any suggestions? Let me know on twitter!