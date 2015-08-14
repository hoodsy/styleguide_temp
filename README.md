#Datto Styleguide
The Datto Styleguide provides design and usage guidelines for Branding, Marketing, and the UI Library.


## Running

- use most recent version of node (at least 0.12.7)
- npm install
- npm install -g gulp
- gulp dev


## Content Creation

#### Step 1 - Name your sections/subsections
Add the desired sections and subsections to the appropriate content file:
```
app/uidesign/modules/UIDesignContent.js
app/marketing/modules/MarketingContent.js
app/guidelines/modules/GuidelinesContent.js
```
Note that files will be created upon *saving* the content file, based upon the **section/subsection** names and tabs you have created.

#### Step 2 - Create your content
Find your newly created section folder in the top level state (marketing, uidesign) that you are managing, in the **components** folder.

For example:
```
app/uidesign/modules/components/buttons/
app/uidesign/modules/components/buttons/primary/
```
Inside your new section/subsection folder you will find partial HTML and Markdown files that will be embedded in your new section:
```
example.html 
<tabname>.md
```
The **example.html** file will be rendered as the example for all of your tabs when editing in UI Design. Marketing has a more flexible template system in which you are given an html template per tab, similar to your markdown files. Simply edit these HTML and Markdown partials, and they will be piped into your section! 

Also, feel free to add stylesheets for your templates inside your section folder, but note that when using scss your stylesheet **must be included** in the state's index stylesheet:
```
app/uidesign/_index.scss
```

#### Step 3 - Reload
Finally, when creating new folders and files, you will need to **restart the server:** 
```
ctrl+c to stop
gulp dev to start
```
After that, your new sections should be good to go! Any empty white sections represent your empty templates, while seeing a navbar represents the absence of a file (try restarting the server!).
