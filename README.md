# Hobsons--Coding-Test
This repository belongs to Tester Umair Hussain which contains code of the coding test provided by Hobsons on 8th June 2020.
# INTRODUCTION:

Following are the scenarios for which the script is written;

  1. [Hobsons.com](http://hobsons.com/) home page renders as expected.
  2. On the home screen there is a Hero graphic with the text &quot; **We help students**  across the journey of a lifetime.&quot; Click the down arrow. Assert the page scrolls the next sections &quot;How can we help  **your students?**&quot; into the viewport window. Assert that it is correctly aligned with the top of the visible screen
  3. When user clicks the &quot;hamburger&quot; menu at the top of the screen then the items the list drops down as expected with the sub-menu items. The menu I&#39;m referring to is Solutions, Services, Resources, About &amp; Blog. Assert that the &quot;_Resources_&quot; menus contain a list of child links including &quot;E_vents_&quot;.
  4. Navigate to Resources \&gt; Events. Assert that all events on the page occurs in the future. Note you do NOT need to apply the filters, just assert on the default list that is displayed.

# PROJECT SETUP:
Goto the command prompt and use following commands to setup the project;
1. cd /your/project/path
2. npm install cypress --save-dev
3. ./node_modules/.bin/cypress open
4. Run the tests by clicking 'Run all specs' on Cypress
5. Command to run and create mocha reports is ./node_modules/.bin/cypress run test
6. Command to run in headlessmode is: ./node_modules/.bin/cypress run

# REPORTS:
Mochawesome integrated for creating html reports which can be access on \cypress\reports\mochareports\report.html

# APPROACH:
There is a **describe** function (as we are using Mocha framework) which work as a main and every test flow (mentioned in previous section) has its own **it** functions.

# TOOLS:

The above scenarios are automated on **Cypress**.

# FILES

1. Gtag exception has been written in index.js file under Support. Gtag basically sends data to Google Analytics showing how many visitors have visited the website and as we are using an automated browser so Gtag is preventing it.
2. The script is written in **HelpStudents.js** and **VisitEvents.js** file under **integration**.
3. The fixture file **constants.json** is present under **fixtures**

# Git REPOSITORY:
https://github.com/umair-hussain-10p/Hobsons--Coding-Test.git

# LIMITATIONS:

There is a limitation on the last point &#39;Assert that all events on the page occurs for current year i.e. 2020 &#39;. The problem with it is all the dates are in different formats like [Month. Days range, Year] OR [Month. Days Range] OR Year. We can get the dates by using following code;

var TextInsideLi = Cypress.$(&#39;p&#39;).text();

console.log(TextInsideLi) ;

The above code will give us the text in the tag and then we can parse the date from it. But After parsing it is impossible to compare it with all the other dates.

Another approach is we write regular expression for the dates but it would be impossible to get which date format is using in the particular scenario.

Therefore, we have only assert the future function in the current list.

