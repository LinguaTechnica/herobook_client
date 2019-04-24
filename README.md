# Hero Book

Hero Book is an application that allows users to read about their favorite super heroes. It's got some nifty features:

* Search functionality with filters
* User registration
* Favorites

## Setup
It's recommended to install Augury for your Chrome dev tools. It's a good tool for inspecting Angular components within the browser. It can also be useful to yield insights and understanding about how your application works. It is not required, but it's very helpful.

``` 
git clone this_repo
cd herobook
npm install
ng serve -o
```

The Materialize CSS framework is already installed in this project and ready to use. You can easily apply styling by using the documentation: https://materializecss.com/navbar.html

## Walk Through

Since Angular provides us with matching tests for every module we create, we'll start by first updating the tests for `AppModule`.

### Step 1: Update `AppModule` Tests

Open the modules component and template files. Then run the tests. They should all pass. The overall layout of the test file should look familiar:

- `describe` block describes the test **suite**
- `it` blocks describe each individual test
- `expect` provides the test assertions 
- **matchers** like `toEqual`

One unfamiliar thing you may have noticed is the `TestBed`. This configures a test version of the application. Notice how it uses the same kind of configuration object we find in `app.module.ts`.

For every component you test, it's dependencies should be added to declarations.


### Step 2: Add a new `HomeComponent`

Create a new component named home and open the tests and template for it. Add the new home selector app.component.html. Let's try to create tests for the following:

1. Successfully creates the 'Home' component
2. Displays <nav> with with 'Home' in it.
3. Update app.component.spec.ts: It now renders the home component

## Exercise

Your task is to use TDD to develop the remaining features for this app. Below are some stories to get you started, but you're not limited to the components, services and models listed below. Use all of your knowledge of Angular to meet the requirements.


### Requirements

**Homepage**
- has navigation
- has search bar
- has a list of heroes

**Users**
- can register
- can login
- can have a favorites list
- can add favorites to their list

**Heroes**
- have unique page
- have stats displayed on their page
- have an image

**Search**
- can search by name
- has filters to search by: powers, species, and gender
