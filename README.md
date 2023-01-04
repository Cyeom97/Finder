# Finder

---

## Created by Christopher Yeom

### Deployed Site

[Finder](https://finder-project.surge.sh/)

![HomePage](/src/assets/Screenshot%202023-01-03%20at%206.12.49%20PM.png)

### Description

Finder is a frontend application that allows users to search for restaurants, services, and much more! Powered by a Yelp API, users can input any type of business, as well as the location they desire. The application displays reviews, prices, and photos of all businesses related to the search.

---

### Technologies Used

- React
- HTML
- Bulma CSS
- Yelp API

---

### Overview

I wanted to strengthen my skills of calling API's so I decided to start by created a simple frontend application. CSS is also an area that I have trouble with so by working on a front end project, I can pay more attention to styling.

#### **CSS**

While doing some research, I found [Bulma CSS](https://bulma.io/) to be a great tool for developers who need assistance in CSS. In addition to that, I decided create many folders that serves a specfic purpose. For instance, the functionality of the search bar had it's own folder comprising with it's own JS and CSS files. I found this to be very effective than my usual methods because it made my files easier to read. In the past, I would put all styling in one CSS file and by the end of the project, it would have over 500 lines of code. This made it very difficult to make revisions. So by creating sub CSS files that exported to specific JS files, it improved the quality of the visual display.

#### **React**

React is one area that I felt confident in but my only weakness was making external API requests. The API's I called in the past was either from my server side, or working with external API's that allowed you to put your API key in the GET request URL. However, like many other external APIs, it wasn't that straightforward. I was able to get a successful connection by adding a bearer token and the origin of the deployed site in the headers. I also had to use CORS-Anywhere in front of the YELP Endpoint to get past the Cross-Origin.

![Search Page](/src/assets/Screenshot%202023-01-03%20at%206.14.12%20PM.png)

## Future Updates

This is still an on-going project as I need to do some more CSS as well as make the filter and review buttons responsive.

## Credits

- [Yelp API](https://fusion.yelp.com/)
- [Yelp Logo](https://www.freepnglogos.com/pics/yelp-logo)
- [Bulma CSS](https://bulma.io/)
- [Cors Anywhere](https://github.com/Rob--W/cors-anywhere)
