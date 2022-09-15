# Goal
Create the website using the design system and layout outlined in this [Figma prototype](https://www.figma.com/proto/K9HdfG1294xJ448wJaUJcT/FWD-Portal?page-id=8%3A2&node-id=13%3A109&viewport=433%2C463%2C0.15&scaling=contain).

# Final Look
This webpage can be found [here](https://classportal-smoky.vercel.app/)

# Process

## HTML: Structure
For accessibility, I structured the HTML according to [HTML: A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML). Instead of using nested <div>, I implemented appropriate sectioning elements for navigation, main section, and footer. 

## HTML: Navigation Bar
To implement an icon-based navigation bar, I imported the icon library from [Iconify Design](https://iconify.design/). The flexbox model ensures the nested items are responsive and spaced out evenly.

## HTML: Main Content
For main content, I started with styling out the flexbox model for each individual block, then applying flexbox model to the main content.

## HTML: Footer
Implementing footer gives users a clue that it's the end of the webpage.

## CSS
I implemented my typography choices with Googlt Fonts according to my [Design System](https://www.figma.com/proto/K9HdfG1294xJ448wJaUJcT/FWD-Portal?page-id=0%3A1&node-id=1%3A2&viewport=414%2C533%2C0.18&scaling=scale-down). With the help of [Flexbox guide on mdn](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox), I was able to ensure my webpage is responsible.

I struggled with indecisiveness with color choises (as always...), I eventually adopted a light gradient underline look to add a bit of colors to my webpage while preserving accessibility. I looked to [this reference](https://www.devsamples.com/css/css-gradient-underline) for how to use gradient underline in CSS.

## Javascript
This webpage has not included any animations. In the future, there will be text animations in the header, and hover effects on the project cards.