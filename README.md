# SpacexLaunch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

# App Overview

- The app contains one main module(named AppModule)
- We have three components(filter, dashboard, launch list), and filter and launch list component are children of dashboard component.
- By default while loading the app it will open the dashboard component.
- Filters are all configurable and kept as Constants.
- Api has been made in the parent level and data served to child component.
- The app is followed with server side rendering.
- For fetching the data, simple http methods used with few required query parameters.
- And the app targeted for mobile and desktop views.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Server side rendered dashboard

Run `npm run build:ssr` to compile the code with server side rendering.

Run `npm run serve:ssr` to serve the code from above output.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
