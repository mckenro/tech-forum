# tech-forum

This program allows users to post questions and receive responses from other users.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/mckenro/tech-forum` this repository
* `cd tech-forum`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Project Specifications
1. Program allows a user to post a question.
    * _Example Input: "How to use Ember?"_
    * _Example Output: Question is displayed on index page_
2. Questions on the index page will link to detail pages.
    * _Example Input: user clicks on question_
    * _Example Output: detail page for that question is displayed_
3. Program will allow other users to answer posted questions.
    * _Example Input: On question detail page, other user writes and submits an answer_
    * _Example Output: Other user's answer is show on the question detail page._
4. Program will allow users to navigate to other pages.
    * _Example Input: User clicks on the home button from a detail page._
    * _Example Output: User is taken to the home/index page_
5. Program will allow user to edit questions.
    * _Example Input: User clicks button to edit _
    * _Example Output: A form is displayed with fields that can be edited then submitted._

## Known Bugs

_No known bugs,_

## Support and contact details

_If you run into any issues or have questions, ideas or concerns, please contact Rob McKenzie at mckenro@gmail.com_

### License

*This project is licensed under the MIT license*

Copyright (c) 2017 **_Rob McKenzie_**
