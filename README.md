#Datto Styleguide
The Datto Styleguide provides design and usage guidelines for Branding, Marketing, and the UI Library.
 
### Running
- use most recent version of node (at least 0.12.7)
- npm install
- npm install -g gulp
- gulp dev


### File Structure
```
app
| +- index.html
| +- index.js
| +- index.scss
| +- templates.js (generated on run)
|
| assets
|
| components
	|	+- _index.js
	|	+- _index.scss
	|	+- _variables.scss
		| <component name>
|
| config
| 
| guidelines
|
| marketing
|
| uidesign
	| +- _index.html
	| +- _index.js
	| +- _index.scss
	|
	| components
		| <component name>
	|
	| modules
		| +- UIDesignCtrl.js
		| +- UIDesignRoutes.js
		| +- UIDesignContent.js
```

There are 4 main modules: Components, Guidelines, UI-Design, and Marketing.

Each of these modules follow a similar structure, with the index files serving as a shell for the underlying sections. In this way, each of the 4 main modules are bundled and included in the top level app module, with any and all dependencies included in each module.

Each main module's content is structured according to sections.
For example, Marketing has the section Colors, with subsections Primary, Gray Scale, and Signaling.

```
marketing
| +- _index.html
| +- _index.js
| +- _index.scss
|
| components
|
	| introduction
	|
	| logo
	|
	| colors
		| +- _colors.html
		| +- _colors.scss
		|
		| primary
			| +- usage.md
			| +- usage.html
			| +- downloads.html
			| +- examples.html
		|
		| grayscale
		| signaling
	|
	| typography
```
