# [whento](https://jamesess.github.io/whento/) - agency Project
## Table of contents
1. [Why](#Why)
2. [What](#What)
3. [Planning](#Planning)
4. [Building](#Building)
5. [Debugging](#Debugging)
6. [Learnings](#Learnings)
7. [Future Improvements](#Future Improvements)
## What
***
This repo contains the company site for our time travel agency. The site aims to tell a little bit about the company itself, the people at the company and allow people to get in touch if they'd like to use our services
## Why
***
We were given the task of making an agency website for our team. 
We had a series of acceptance criteria and user stories for the site along with a stretch goal
### Acceptance criteria
    - An introduction to our agency and what we provide. 
    - Information about the members of our team
    - A way to get in touch if they wanted to use our service.
    - Our form needed to have some form of validation to ensure required fields were filled in correctly
### User stories
    - See information about each member of the team
    - Browse the site on mobile, tablet & desktop
    - Click to navigate to different sections of our page
    - Visit the site at a publicly accessible domain name
    - Navigate using keyboard controls
    - Ensure a screenreader picks up all the relevant content on our site
### Stretch goal
    There was an additional stretch goal of using automatic triggers on Github projects
## Planning
***
The user stories helped inform how our site would look, flow and some of the functionality it would have.

Between the user stories and acceptance criteria there's a few features we instantly knew our site would have. First we'd be hosting it on github pages. We'd be using a navbar, we'd have a contact form and we'd need to use semantic html as much as possible.    
  
We also decided we wanted to have an impactful design with a clear distinction between sections about the past and sections about the future
  
We set out looking at some other sites for inspiration:  
-[fatchoy](https://www.fatchoy.com/)  
-[mikaelareuben](https://www.mikaelareuben.com/)  
-[wexinwendyju](https://www.wenxinwendyju.com/)

All of these had little effects or animations and were effected by user input. We both agreed it would be cool to have some similar effects in ours.  
## Building
***
We set up a [github projects page](https://github.com/users/JamesESS/projects/2) split the site into smaller issues and got to work.  
We built out the sections of the page and used placeholder *lorem ipsum* so we could get an idea of how the site would flow.

## Debugging
***
- Pretty early on we got some big merge conflicts that caused sections of CSS to repeat. To help avoid this in the future we agreed to try and keep everything in distinct sections, improve our modular CSS and push code regularly so any future conflicts would have less to wade through.  
- Originally our landing page had three columns with their own background colours on some animations/transitions it was possible to see the blank background behind. We changed it so the container for these columns had a background-gradient instead. This meant reworking how animations worked a little bit.
- We wanted to smooth out elements returning to their original state at the end of an animation. Everything used animation keyframes to start with but we changed to using transitions and actually changing the relevant property instead.
- Ihad a small issue shile trying to use the foreach method on array containing DOM elements. It didn't behave the way I expected it to at all. After some reading around I discovered you need to use the spread operator on DOM arrays in most cases(?)
```
[...navbarItems].forEach((item,i)=> item.addEventListener("click", e => mainPage.scroll(0,window.innerHeight*(i))));
```
## Learnings
***
We've both learnt a lot about accessibility and the need to think about how others might interact with your site. It's a huge subject so there's obviously still a lot to learn but it's been a great starting point.  
  
It's been a great opportunity to learn more about git and how you might work on a project with multiple contributors.
  
There were a few browser incompatibilities between browsers and edge cases with certain mobile devices not styling correctly. It showed the importance of rigourous testing and avoiding the *'it works on my machine'* menatility.
## Future Improvements
***
