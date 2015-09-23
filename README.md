## Introduction

The Google Spreadsheet Events theme was created to display the details of events on dynamic display using the Rise Vision Google Sheet component.

## Steps to run the Google Spreadsheet Events theme

1. Fork or download the entire content-google-spreadsheet-events repository. You will also need to run `bower install` to install the dependencies required for the the template. Bower is a package manager for Javascript libraries and frameworks. All third-party Javascript dependencies are listed in the bower.json file. To install Bower, run the following command in Terminal: `npm install -g bower`. Should you encounter any errors, try running the following command instead: `sudo npm install -g bower`.
![diagram showing where to find the folder](https://cloud.githubusercontent.com/assets/8008948/10105124/0e17ed9a-637b-11e5-83f0-51c4ea1e3000.png)

2. Modify the files within the content-google-spreadsheet-events folder directory to fit your needs (see below on how to modify specific elements).
![diagram showing file location](https://cloud.githubusercontent.com/assets/8008948/10105127/1117954a-637b-11e5-951c-ed65ac8cd8e1.png)

3. When you have finished modifying the files, please run `gulp build` which will create a 'dist' folder. You can rename this folder to anything you want, and can host the entire folder in your folder directory in rise vision storage or your web hosting service.
![diagram showing how to host folder](https://cloud.githubusercontent.com/assets/8008948/10105131/1432e914-637b-11e5-9955-d8cf9395cc9d.png)

4. Copy the link to the index.html file where you have it hosted and insert the url into a schedule. (you can also add this link to the url gadget within a presentation)
![diagram showing where to find link to index.html](https://cloud.githubusercontent.com/assets/8008948/10105133/1666168e-637b-11e5-8556-05656798b9eb.jpg)

##Directions to Modify the Google Spreadsheet Events Theme:##


####Changing the Headline Text

Open index.html, locate the following code and modify the text to a headline of your choice:

```
  <h1>Upcoming Events</h1>
```

####Changing the Company Logo

Open index.html and locate the following code. You can either change the text element or add in an ```<img>``` of your choice:

```
  <div class="logo-area">
    <h3>Company Logo</h3>
  </div>
```

####Changing the Image

Open index.html and locate the following code. This theme currently uses an svg-injector to embed the code for the SVG image so that it can be animated using CSS Keyframes. You can replace the SVG image with your own SVG and use the svg-injector, or alternatively you can use another image in the format of your choice.

```
  <img class="image" id="cottage" src="img/cottage.svg" alt="svg illustration of a cottage">
```

####Changing The Text Content
The text content is displayed through the use of the rise-google-sheet web component. This is an example of the spreadsheet layout:
![diagram showing spreadsheet layout](https://cloud.githubusercontent.com/assets/8008948/10105346/3413d94a-637c-11e5-8aff-e8e70dc11581.png)

You can use your own public spreadsheet by creating one on the Google Sheet website and then locating the following code in the index.html file:

```
 <rise-google-sheet id="googleSheet"
                       key="1ayh5CBwZn4q8-JkxtzuPdP589j7YvgTwFAA8mJHjxkU"
                       tab-id="2"
                       min-row="1"
                       min-column="1"
                       max-column="3">
    </rise-google-sheet>
```
The columns and rows can be targeted using the min and max values, and the tab-id sets which page of the spreadsheet is shown.

The key for your spreadsheet can be found when viewing the document online and selecting 'file', then publish to web. An example be seen in the code above.

In order to view a private spreadsheet, you will need to obtain an ID from https://console.developers.google.com. This is optional if accessing a public spreadsheet, and is currently set to 'googleSheet' in the above example.

You can then edit the text within the cells of the spreadsheet and the changes will appear in the display. If you add a new row for an event this slide will be added to the presentation.

## Built With
actual tools used
- HTML
- CSS and Keyframe Animation
- Ionic SVG Inject
- Rise-Google-Sheet Web Component
- Javascript
- JQuery
- Sketch


The Google Spreadsheet Events theme works in conjunction with [Rise Vision](http://www.risevision.com), the [digital signage management application](http://rva.risevision.com/) that runs on [Google Cloud](https://cloud.google.com).

At this time Chrome is the only browser that this project and Rise Vision supports.

## Submitting Issues
If you encounter problems or find defects we really want to hear about them. If you could take the time to add them as issues to this Repository it would be most appreciated. Please identify the specific theme that has the issue and follow the following format where applicable:

**Reproduction Steps**

1. did this
2. then that
3. followed by this (screenshots / video captures always help)

**Expected Results**

What you expected to happen.

**Actual Results**

What actually happened. (screenshots / video captures always help)

## Contributing
All contributions are greatly appreciated and welcome! If you would first like to sound out your contribution ideas please post your thoughts to our [community](http://community.risevision.com), otherwise submit a pull request and we will do our best to incorporate it.

### Suggested Contributions
- Alternative ways to animate text scroll
- Alternative ways to style text
- i18n Language Support

## Resources
If you have any questions or problems please don't hesitate to join our lively and responsive community at http://community.risevision.com.

If you are looking for user documentation on Rise Vision please see http://www.risevision.com/help/users/

If you would like more information on developing applications for Rise Vision please visit http://www.risevision.com/help/developers/.

 If you have any questions or problems please don't hesitate to join our lively and responsive community at http://community.risevision.com.

**Additional Content Templates can be found here: https://github.com/Rise-Vision/content-templates**

**Facilitator**

[Peter Sandford](https://github.com/pcsandford "Peter Sandford")

