# Testing GitHub actions

Action development is not complete without robust tests. Tests also help accept contributions from community members, catch issues early and release actions often with high confidence. This document describes best practices to test actions, measure code coverage, and configure pipelines to run them with every change.

## Test types

Tests for actions can be categorized into two broad categories.

**Unit tests** are used to validate the business logic such as string manipulations, for loops, and processing platform responses. Unit tests are not expected to communicate with the platform for example by running Azure CLI commands or sending requests to the Azure REST API. Alternatively, developers can mock such platform communication. These tests can be run as part of build steps without requiring any environment setup. Developers can also use them during the development phase.

Unit tests should focus on good code coverage. Every check in should add tests to cover newly added code. The target is to keep code coverage at 80% and it will be made part of the PR approval checklist.

**Functional tests** (also known as end-to-end tests) verify end-to-end functional scenarios. It is important to have a handful of such tests to ensure functionality end-to-end. A functional test should be designed to cover the real-time scenario. Our recommended way to create a functional test is to create a workflow and execute an action with different input, scenario combinations.

## Running tests

Once suites of unit tests and function tests are ready, they will be run in different life cycles of the development process.

### During action authoring

- Running unit tests using the VS Code and Visual Studio IDEs (details to be added)
- Running functional tests from dev box (details to be added)

### Pull requests

During pull requests, we want to ensure that the action logic is tested using unit tests on all platform matrices and that there is sufficient test coverage. We have designed the YAML to ensure these coverages. Templates for actions will be set up to run the unit tests for the `main` and release branches.

- The YAML file for PRs is configured to do the following:
  - Run on pull requests in the `main` and release branches.
  - This workflow should run on all three OS platforms - `windows`, `ubuntu`, `macos`. You can make use of a [matrix strategy](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/managing-complex-workflows#using-a-build-matrix) to do this.
  - A workflow should have a build step for syntax validations followed by a step to run the test.
  - It is also recommended to add test coverage tooling to your infrastructure. The test coverage tooling should inform us on details about newly added code such as overall test coverage percentage and file test coverage percentage.

- Pull request reviewers must check for the following:
  - Code reviewers should be able to see test coverage data before approving the PR. PR approval must be done only when test coverage is more than 80%. To start with, test coverage should be measured at the file level, that is each file has 80% coverage.

Developers are expected to maintain the test suite copy in each branch to keep the product code compatible with the test code.

## Releasing the action:

Functional tests are essential to catch bugs in preflight development branches before being released into production.

The release process consists of the below steps:

- Forking out a branch named `releases/v<n>` from the `main` branch
- Check in the required dependencies
- Testing
- Tagging the commit with a suitable tag

On every code push into the `main` and release branches, always run the right set of functional tests to verify the code quality. Unless all functional tests are passed, we don't proceed with releasing a new version or hotfix.

Running functional tests automatically on each code push can be achieved by using an action workflow.

- Set workflow trigger to run on each code push toe the `main` and release branches
- The workflow should have jobs for every branch.
- Each job should test the action for different customer scenarios.
- On pushes to the `main` branch, build the code and test the built action (as the `main` branch does not contain the supporting modules checked in)
- Jobs should be executed conditionally depending on the branch where the code got pushed.
- **The secrets used in this workflow should be managed using [secret variables](https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets).**
- This workflow needs to be updated to cover the newly added features or bugfixes. The update is about adding inputs to the action covering newly added changes.
- PR reviewer's checklist:
  - Secret logging and updates: PR updating test workflows should be carefully reviewed for any malicious updates on secrets.
  - Test coverage: Review the test coverage result posted against the PR. It should meet the test coverage threshold.

## [Open items](https://github.com/github/GitHub-EcoSystem/issues/923)

1. The YAML running unit tests or functional tests got updated in the template repo. How do we make the update available to other action repos?
2. A. Dev box scenario (inner dev loop) - How to run unit tests using the VS Code and Visual Studio IDEs

        To begin with a small scope, supply guidance for Node.js-based actions.

   B. Functional tests - What is our recommendation to run these from a dev box?
          

3. How to author tests?

          Focus on this once closed on open item 2.

4. Can actions avoid checking out, forking, and syncing test repos?

          We are waiting on the platform runner team

5. Define the threshold time for unit tests. (max time taken by single unit test)

## Appendix:

### Running unit tests as part of a pull request: Sample walkthrough

- Refer to the [variable-substitution](https://github.com/microsoft/variable-substitution) action as an example. This is a JavaScript-based action. Similar steps can be followed for container-based actions as well.

- **Setting up a unit testing framework**

  ***Selecting a testing framework:***

  - You can select any testing framework since the CI workflow lives in the action repo where you can have customized build and test step definitions.
  - Here, we are using Mocha which supports unit tests in TypeScript.

  ***Installing development dependencies:***

  - A few simple tools to get us started - Mocha, Chai, ts-node
 Mocha is a good fit for a testing framework, Chai is an assertion library
  - To install run the below command:
npm install chai mocha ts-node @types/chai @types/mocha --save-dev

  ***Writing your unit tests:***
  Find our test files [here](https://github.com/microsoft/variable-substitution/tree/master/src/Tests).

  ***Running your unit tests:***
  Create an npm script that calls Mocha with the path as a parameter. Instead of letting Node.js run Mocha, we're going to register ts-node to run Mocha. [Example](https://github.com/microsoft/variable-substitution/blob/ede5b92701e66ea752d76c4fc7e8888849edfdcd/package.json)

  To execute your tests locally just run:
  `npm run test`

- **Test coverage:**

  So far, we understand the basics of unit testing. Let's go a step ahead and discuss test coverage. Let's add a framework to determine the test coverage. This helps us figure out whether we miss any test case scenario.

  ***Choose a test coverage library***
  For our scenario, we chose Istanbul as a test coverage library. It will output the test coverage to the command line as well as generate a comprehensive HTML report. You may choose any library suitable to your testing framework.

  ***Install dependencies:*** `npm install --save-dev nyc`

  ***Configuration:*** Write [.nycrc](https://github.com/microsoft/variable-substitution/blob/ede5b92701e66ea752d76c4fc7e8888849edfdcd/.nycrc) file in the root directory

  ***Update package.json:*** Add coverage script in [package.json](https://github.com/microsoft/variable-substitution/blob/ede5b92701e66ea752d76c4fc7e8888849edfdcd/package.json)

  ***Execute coverage:***
  
  Run below command. This will run your tests and generate a report.
  `npm run coverage`

  ***Posting test coverage with PR build:***

  With a simple [POST request from your workflow](https://github.com/microsoft/variable-substitution/blob/master/.github/workflows/ci.yml#L66), publish the test coverage report against the PR. [[Sample test coverage report.](https://github.com/microsoft/variable-substitution/pull/16#issuecomment-702284009) ]

### Running functional tests on each push: Sample walkthrough

- Refer [sample action repo](https://github.com/Azure/sample-action/blob/main/.github/workflows/run-sample-integration-tests.yml) example. This workflow runs on each push to the `main` and release branches.
- Jobs are defined to run conditionally on each code push to `main` and release branches.
- Each job is configured to cover the required customer scenario.
- New version release scenario:
  - Test coverage for newly added functionality: While developing the new feature, ensure the `main` branch functional test job is also updated to cover the new functionality.
  - Determine a new release branch name and update the functional test workflow to add the new job to cover the new test cases. This job should run conditionally on every push to the new release branch.
  - Push the code to the `main` branch. If functional tests pass, create the new release branch and check in the dependencies. On dependencies push, the functional tests workflow will get triggered. Watch the run. Once the functional tests are green, you are ready to tag the new release branch for the new version release.
- Hotfix scenario:
  - Work on code changes in the target release branch. Update the functional test workflow to cover the hotfix code changes. For example, add the action use case which was failing and release the hotfix to fix it. This update needs to be made into a job targeting the release branch where the fix is getting pushed.
  - On code push, the workflow will get executed with an updated functional scenario and it will catch any regressions and breakage.
  - After confirming the functional tests workflow is successful, you are ready to update the release tag to the new hotfix commit.

NOTE: Refer to [the automated test process](https://github.com/Azure/actions/blob/main/docs/Testing-docs/Test-workflows-automation.md) to automate the test workflows within an action repository as PR checks.
