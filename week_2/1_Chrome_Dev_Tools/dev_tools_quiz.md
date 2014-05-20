#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
      You can edit HTML and CSS in the elements tab by right-clickingon the element and choose "inspect element". Another way to do it is clicking on the magnifying glass icon and then left-click on the select element.
      The left screen or part is for the HTML and you can double-click the element to make any changes, you can move the element's position by dragging it to a new one, and delete something.
      The right screen is for the CSS, where most specific rules go first. To change the style value you just double-click it and make your changes. You can add a new style by clicking on the "+" that it's on the right corner. You can make changes in the link pseudo classes by clicking in the icon next to the "+" icon. Choosing what state and making the changes. Next to the rules there's a link to the CSS stylesheet, it will open in the Sources panel.
  * Javascript Debugging
      I don't know JavaScript, but I understood that we can go to the Console panel and write a JavaScript command "console.log" and then "console.assert" and it will show the errors in red color. If you click on the error, it opens the Sources panel in the line number which contains the error.
      To debugg this errors you can add some code and then click the "pause on exceptions" so the next time you run your code it will stop where it founds an error. Sometimes the libraries are minified, so you need to click on the "{}" button and it will open all the branches so you can visualize it better.
      Honestly, I couldn't do this part, nothing seem to work on the challenge, so I am writing what I understood.
  * Performance Optimization 
      On the Network panel or tab, we have a timeline tab that shows how much time takes to load your page. If you click shift and refresh it will show the reloading time. The colors are for the different types of files: blue for html, green for css, orange for JavaScript, and purple for images.
      There's a google extension called PageSpeed which you can find in the Chrome webstore and once you have downloaded it, you will have a nother tab called PageSpeed. It lists the ways you can optimize your page so it loads faster. One way is minifying some files which you can do in the Google closure library App (I'm not sure about the name) and you just copy/paste the URLs of the files you want to make one and then it does tha whole job.
      Another way to optimize the performance is by avoiding bad requests. This is taking out the things you're not using. And the last one is by changing the position of the CSS before the JavaScript in the <head></head> tags.
* What's the quick key for your OS to spawn the Dev Tools inspector?
      CTRL + SHIFT + I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
You cannot edit it because it's an image.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
  You open your Dev Tools inspector with CTRL+SHIFT+I, and then you go to the Network tab. There you reload the page with Shift+refresh. The timeline shows the time it took to load each element. You click on the size column and there appears a little triangle, you click on it so it arranges the size from bigger to smaller elements. Once you have the largest one you click on the link and it takes you to another like menu, and there you have all the information abot it

  Dimensions 500 × 210 File size316 KBMIME typeimage/png
  URL http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?  How many kilobytes of data can be eliminated?
  Optimizing the images would eliminate 885.9 KiB (39% reduction)