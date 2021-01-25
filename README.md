This application is a SPA that is designed to take in an integer from a user input and then on click of a button to render the value of that integer as a roman numeral.

To run this application and see it in your browser.

in a terminal run nodemon server to spin up a node server
in a seperate terminal run npm start to see the apps' UI.

enter a number between 1 and 255 and click convert, you should see your number converted.
feel free to enter a number outside of that range to view boundary constraints.

Methodology and testing Methodology.

I used an agile approach to this application as it is what I am most comfortable with and I have seen it dramtically reduce the number of bugs in other applications.I planned out each of my pieces of code into 4 parts or (mini sprints). My goal was to write clean and concise code that was very easy to read while keeping code to a minimum so that it was easy to understand the application as a whole.

1. decide what to test in the application and then wrote code to meet the requirements. and fulfill my user story acceptance criteria.
2. designed and developed the algorithim to solve the problem at hand.
3. Implement a restful API approach for purpose of further scalability.
4. test,document and expirement different possible approaches to how users may interact with the application.

For testing I used Jest and Enzyme. the tests are located in a file called setUpTests.js in the src folder. I tested to make sure that all elements need to solve the problem were present, if the button fired and if the input tracked changes in text.

you can see the test results in a terminal by running npm test.

Packaging Layout

I used Express to assist with my API calls to the front end and it being used in the server folder.

I used Axios to to fetch the data from the API on the front end so I could display it.

Jest and Enzyme were used to allow me to test my application in the best way that I know of.

I used a proxy which is located in the package.json file in the root. This is for allowing communication between my server and UI.

Resources

I used Wikipedia to verify that my roman numeral conversions were correct.

https://en.wikipedia.org/wiki/Roman_numerals

License

The dependencies in this project are licensed under the MIT license.

which more information can be found in the License.md file
