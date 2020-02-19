# Origin Frontend Take-Home Assignment

Origin is a platform that helps our customers' employees put their financial lives on track.

One key to financial well-being is planning & saving for your goals. Users can have many saving goals (e.g. go to college or throw a wedding party) and it is our job to help them accomplish it.

You will build a piece of our savings feature by creating the the saving plan simulation screen.

## Preview

![Saving Goal Plan Mockup Desktop](https://github.com/salesgu/origin-frontend-challenge/blob/master/mockups/saving-goal-plan-desk.png)

Mobile version mockup [here](https://github.com/salesgu/origin-frontend-challenge/blob/master/mockups/saving-goal-plan-mobile.png).

## Usage

This project requires `Node >=12` and `NPM >= 6`.

After you have cloned this repo, install the dependencies with:

```
npm install
```

You can then start the application running:

```
npm run dev
```

That's it. Just Access `http://localhost:1234` in your browser.

### Linting

To make better and clean up code, the project is using linters, you can run by command below:

```
npm run lint
```

### Testing

To see unit tests, just run:

```
npm run test
```


also have end-to-end tests, just run:

```bash
npm run e2e
```

## Documentation

### ADR

One type of documentation of this project is the [Architecture Decision Records (ADR)](https://github.com/joelparkerhenderson/architecture_decision_record).

#### What is this in fast words?

_"An architecture decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences."_

#### How can I use in pratice?

To **create** a new doc:

```bash
npm run adr:new "Name of ADR"

# e.g.: npm run adr:new "Usage of Typescript"
```

To **update** a doc:

```bash
npm run adr:update
```

To see the **logs**:

```bash
npm run adr:logs <index>

# e.g.: npm run adr:logs 1
```

To create a **HTML** documenation:

```bash
npm run adr:generate-html

# The doc will be generated in: "./docs/adr/exports/adr.html"
```

_You may see more details on the [official repo](https://github.com/phodal/adr). Thanks phodal for this one._

## TODO List

Somethings can be developed on this challenge yet, check the todo list [overhere](https://github.com/salesgu/origin-frontend-challenge/blob/master/TODO.md).

# Thanks a lot :)