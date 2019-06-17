#Bumble-bee (Bee) Contributing Guide

Hi! We're really excited that you are interested in contributing to JS Camp. Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

- [Code of Conduct](https://github.com/js-camp/js-camp-website/blob/master/.github/code-of-conduct.md)
- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)

## Issue Reporting Guidelines

- Always use [no site yet](#) to create new issues.

## Pull Request Guidelines

- The `master` branch is basically just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `master` branch.**

- Checkout a topic branch from the relevant branch, e.g. `dev`, and merge back against that branch.

- Work in the `/src` folder and **DO NOT** checkin `/dist` in the commits.

- It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before merging.

- Make sure `npm test` passes. (see [development setup](#development-setup))

- If adding new feature:
  - Add accompanying test case.
  - Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it greenlighted before working on it.

- If fixing a bug:
  - If you are resolving a special issue, add `(fix #xxxx[,#xxx])` (#xxxx is the issue id) in your PR title for a better release log, e.g. `update entities encoding/decoding (fix #3899)`.
  - Provide detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable.

## Development Setup

You will need [Node.js](http://nodejs.org) **version 6+**
 
After cloning the repo, run:

``` bash
$ npm install # or yarn
```

### Committing Changes

Commit messages should follow the [commit message convention](https://github.com/js-camp/js-camp-website/blob/master/.github/CONTRIBUTING.md) so that changelogs can be automatically generated. Commit messages will be automatically validated upon commit. If you are not familiar with the commit message convention, you can use `npm run commit` instead of `git commit`, which provides an interactive CLI for generating proper commit messages.

### Commonly used NPM scripts

``` bash
# watch and auto re-build dist/*
$ npm run dev

# watch and auto re-run unit tests in Firefox
$ npm run dev:test

# build all dist files, including npm packages
$ npm run build

# run the full test suite, include linting / type checking
$ npm test
```

There are some other scripts available in the `scripts` section of the `package.json` file.

The default test script will do the following: lint with ESLint -> type check with Flow -> unit tests with coverage -> e2e tests. **Please make sure to have this pass successfully before submitting a PR.** Although the same tests will be run against your PR on the CI server, it is better to have it working locally beforehand.

## Project Structure

- **`scripts`**: contains build-related scripts and configuration files. In most cases you don't need to touch them. However, it would be helpful to familiarize yourself with the following files:


- **`build`**: contains the build configurations for all files found in `dist/`. Check the file in it if you want to find out the entry source file for a dist file.

- **`dist`**: contains built files for distribution. Note this directory is only updated when a release happens; they do not reflect the latest changes in development branches.

- **`config`**: contains environment configuration files

- **`vendor`**: contains vendor libraries not install with yarn

- **`test`**: contains all tests. The unit tests are written with [Jest](http://jestjs.io/) and run with. The e2e tests are written for and run with [Nightwatch.js](http://nightwatchjs.org/).

- **`src`**: contains the source code, obviously. The codebase is written in ES2015+.

- **`static`** You may put other static files that will be dynamically referenced in this directory
  
- **`test`**: type definitions tests



