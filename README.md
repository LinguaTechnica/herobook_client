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

Here are some common testing objects and matchers:

**Creating/Fetching Objects**
- Create a component: `fixture = TestBed.createComponent(MyComponent)`
- Create an instance: `fixture.componentInstance`
- Update component with data: `fixture.detectChanges`
- Get the main component HTML element: `fixture.nativeElement`

**Matchers**

### Step 1: Update `AppModule` Tests

Open the modules component and template files. Then run the tests. They should all pass. The overall layout of the test file should look familiar:

- `describe` block describes the test **suite**
- `it` blocks describe each individual test
- `expect` provides the test assertions 
- **matchers** like `toEqual`

One unfamiliar thing you may have noticed is the `TestBed`. This configures a test version of the application environment. Notice how it uses the same kind of configuration object we find in `app.module.ts`.

For every component you test, it's dependencies should be added to declarations of the `TestBed`.

However, it's not strictly  necessary to use the `TestBed` to test components in isolation. Let's take a look at some examples below.


### Step 2: Add a new `HomeComponent`

Create a new component named home and open the tests and template for it. Add the new home selector app.component.html. Let's try to create tests for the following:

1. Successfully creates the 'Home' component
2. Displays <nav> with with 'Hero Book' in it.
3. Update `app.component.spec.ts`: It now renders the home component

Before writing any code, re-run the tests. The `AppComponent` tests should start failing with this error:

```
'app-home' is not a known element:
  1. If 'app-home' is an Angular component, then verify that it is part of this module.
	2. If 'app-home' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message. ("<div class="container">
```

This component has a new dependency. If you declare `HomeComponent` in the `TestBed`, the tests should pass again.

First, let's examine the 'should create' test. The working example uses the `TestBed` to create a component instance. However, this tests the `HomeComponent` in isolation. The test could also be written as follows:

```typescript
  it('should create', () => {
    const instance = new HomeComponent();
    expect(instance).toBeTruthy();
  });
```

The test should still pass. So here we can see that unit testing a single component in isolation can be done by just using the component itself, with little test setup.

Use the `TestBed` when you need to test within the application environment such as when testing the component with its matching template.

Now add a test in `home.component.spec.ts` for the nav as described in #2 and make it fail. In this example, I've decided I'll have a nav bar in this component and it will contain a link named 'Hero Book' to the the homepage.

```typescript
  it('should have nav logo', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const el = fixture.nativeElement;
    expect(el.querySelector('.brand-logo').innerText).toContain('Hero Book');
  });
```

We can make this test pass with the following code:

<details>
<summary>Click to view solution</summary>
<p>
```html
<nav><a href="/" class="brand-logo">Hero Book</a></nav>
```
</p>
</details>

The homepage should also have a search bar. Add a test for the search bar:
```typescript
  it('should have a search bar with placeholder text', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const el = fixture.nativeElement;
    expect(el.querySelector('input').placeholder).toEqual('Search');
  });
```

How much code is needed to make this test pass? Make an attempt before viewing the answer below!
<details>
<summary>Click to view solution</summary>
<p>
```html
  <form>
    <input type="text" placeholder="Search">
  </form>
```
</p>
</details>


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
