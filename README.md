# portfolio

A portfolio site built as part of the General Assembly Software Engineering Course.

The site can be visited [here].

### Dependencies

- [jquery] - DOM Manipulation library
- [typescript] - statically typed superset of JavaScript
- [sass] - CSS framework for making CSS modular and organized
- [font-awesome] - popular icon library
- [google-fonts] - collection of fonts for public use

### Launching the portfolio app

The app is currently working and hosted via netlify. The compiled TypeScript and Sass files have been included in this github repo.

### Approach Taken

The majority of the site was built with static HTML and CSS to improve performance, but JQuery was used to dynamically populate data in the experience and projects section. JQuery was also used to manage the popout menu on mobile screen sizes. TypeScript was used to provide type safety and Sass was used for better CSS organization

### Interactive User Features

- On mobile, the menu becomes a small hamburger icon fixed in the top right, which when clicked will slide out the full menu to choose from
- The experience section has pictures of different company logos, which when clicked on will update the content to provide a brief description of my role and accomplishments
- The projects section shows images of various projects I've built. When clicked on, these will open a modal with a carousel of images, a description of the project, logos of the tech stack used, and links to the projects
- Using Netlify serverless functions, the contact form is fully functional without needing to program a backend

[here]: https://jeffrose.io
[jquery]: https://jquery.com
[typescript]: https://www.typescriptlang.org
[sass]: https://sass-lang.com
[font-awesome]: https://fontawesome.com
[google-fonts]: https://fonts.google.com
