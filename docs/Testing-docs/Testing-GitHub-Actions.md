# Testing GitHub Actions

Action development is not complete without robust tests. Tests also help accept contributions from community members, catch issues early and release actions frequently with high confidence. This document describes best practices to test actions, measure code coverage and configure pipelines to run them with every change.

## Test Types

Tests for actions can be categorized into two broad categories.

**Unit tests** are used to validate the business logic like - string manipulations, for loop, processing platform call responses. Unit tests are not expected to trigger the platform calls like making azure CLI / REST calls. Alternatively, developers can mock such platform calls. These tests can be run as part of build steps without requiring any environment setup. Developers can also use them during the development phase.

Unit tests should focus on good code coverage. Every checkin should add tests to cover newly added code. Target is to keep code coverage at 80% and it will be made part of the PR approval checklist.

**Functional tests**** (** also known as end to end tests ) validates end to end functional scenarios. It is important to have a handful of such tests to ensure functionality end to end. A functional test should be designed to cover the real time scenario. Our recommended way to create functional test is to create workflow and execute action with different input, scenario combinations.

## Running Tests:

Once suites of unit tests and function tests are ready, they will be run in different life-cycles of the development process.

#### During Action Authoring:

- Running Unit test using VS Code / VS IDE ( Details to be added )
- Running functional test from dev box ( Details to be added )

#### Pull Request

During pull request, we want to ensure action logic is tested using unit tests on all platform matrices and there is required code coverage. We have designed the YAML to ensure these coverages. Templates for actions will be set up to run the unit tests for the master and release branches.

- Yaml file for PR is configured to do the following:
  - Run on pull requests in master and release branches.
  - This workflow should run on all three OS platforms - windows, ubuntu, macos. One can make use of [matrix strategy](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/managing-complex-workflows#using-a-build-matrix) for the same.
  - Workflow should have a build step for syntax validations and followed by a step to run the test.
  - It is also recommended to add the test coverage tooling with your infra. The test coverage should provide details for newly added code like - code coverage percentage, file wise code coverage details.

- Pull request reviewer must check for following:
  - Code reviewers should be able to see code coverage data before approving the PR. PR approval must be done only when code coverage is more than 80%. To start with, code coverage should be measured at file level, which is each file has 80% coverage.

Developer is expected to maintain the test suite copy with each branch to maintain the product code to test code compatibility.

## Releasing Action:

Functional tests are essential to catch bugs in preflight development branches before being released into production.

Release process consists of below steps:

- Forking out a branch releases/Vn from the master branch
- Check-in the required dependencies
- Testing
- Tagging the commit with appropriate tag

On every code push into master and releases branch always run the right set of function tests to validate the code quality. Unless all functional tests are passed, don&#39;t proceed for releasing a new version / hotfix.

Running functional tests automatically on each code push can be achieved by using an action workflow.

- Set workflow trigger to run on code push for master and all releases branches
- Workflow should contain jobs per branch.
- Each job should test action for different customer scenarios.
- For master branch build the code and test the build action ( As master branch does not contain the supporting modules checked-in)
- Jobs should be executed conditionally depending on the branch where code got pushed.
- **The secrets used in this workflow should be managed using [secret variables](https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets).**
- This workflow needs to be updated to cover the newly added features / fixes. Update is nothing but adding the action with appropriate inputs covering newly added changes.
- PR reviewer's check list:
  - Secret logging / Updates: PR updating test workflows should be carefully reviewed for any malicious updates on secrets.
  - Code coverage: Review the code coverage result posted against PR. It should meet the code coverage bar.

## [Open items](https://github.com/github/GitHub-EcoSystem/issues/923)


1. YAML running Unit tests / Functional test got updated in template repo, how we ensure the update is available to other actions repos?
2. A. Dev box scenario ( Inner dev loop ) -  How to run unit tests using VS Code / VS IDE

        To start with scoped down for node JS based actions provide the guidance.

   B. Functional tests what is our recommendation to run these from dev box
          

3. How to author tests ?

          Focus on this once closed on open item 2.

4. Can Actions avoid checking out/forking/syncing test repos?

          We are waiting on platform runner team

5. Define the threshold time for unit tests. ( max time taken by single unit test )

## Appendix:

#### Running Unit tests as part pull request: Sample walk through

- Refer [variable-substitution](https://github.com/microsoft/variable-substitution) action as example. This is a javascript based action. Similar steps can be followed for container and based actions as well.

- **Setting up unit test framework**

  ***Selecting test framework:***

  - You can select any test framework since the CI workflow resides in the action repo and you can have customized build and test step definitions.
  - Here we are using mocha which supports unit tests in typescript.

  ***Installing development dependencies:***

  - Few simple tools to get us started - mocha, chai, ts-node
 mocha is a good fit for a testing framework, chai is an assertion library
  - To install run below command:
npm install chai mocha ts-node @types/chai @types/mocha --save-dev

  ***Writing your unit tests:***
  Find our test files [here](https://github.com/microsoft/variable-substitution/tree/master/src/Tests) .

  ***Running your unit tests:***
  Create an npm script that calls mocha with path as a parameter. Instead of letting node run mocha, we&#39;re gonna register ts-node to run mocha. [Example](https://github.com/microsoft/variable-substitution/blob/ede5b92701e66ea752d76c4fc7e8888849edfdcd/package.json)

  To execute your tests locally just run:
  `npm run test`

- **Test coverage:**

  So far we understand the basics on unit testing. Let go a step ahead and discuss test coverage. Let's add framework to find the test coverage. This will help us identify if we missed any test case scenario.

  ***Choose test coverage library***
  For our scenario, we chose Istanbul as a test coverage library. It will output the code coverage to the command line as well as generating a comprehensive HTML report. One may choose any library suitable to your test framework.

  ***Install dependencies:npm install:*** `npm install --save-dev nyc`

  ***Configuration:*** Write [.nycrc](https://github.com/microsoft/variable-substitution/blob/ede5b92701e66ea752d76c4fc7e8888849edfdcd/.nycrc) file in root directory

  ***Update package.json:*** Add coverage script in [package.json](https://github.com/microsoft/variable-substitution/blob/ede5b92701e66ea752d76c4fc7e8888849edfdcd/package.json)

  ***Execute coverage:***
  
  Run below command. This will run your tests and generate a report.
  `npm run coverage`

  ***Posting code coverage with PR build:***

  With simple [POST call from your workflow](https://github.com/microsoft/variable-substitution/blob/master/.github/workflows/ci.yml#L66), publish the code coverage report against the PR. [[Sample code coverage report.](https://github.com/microsoft/variable-substitution/pull/16#issuecomment-702284009) ]

#### Running Functional tests on each push: Sample walk through

- Refer [sample action repo](https://github.com/Azure/sample-action/blob/main/.github/workflows/run-sample-integration-tests.yml) example. This workflow runs on each push to the main and releases branch.
- Jobs are defined to run conditionally on code push to main, releases/v1...branches.
- Each job configured to cover the required customer scenario.
- New version release scenario:
  - Test coverage for newly added functionality: While developing the new feature, ensure the main branch functional test job is also updated to cover the new functionality.
  - Identify new releases branch name and update the functional test workflow to add the new job to cover the new test cases. This job should run conditionally, on push to new releases branch.
  - Push the code to the main branch, if functional tests are passed, create the new releases branch and check-in the dependencies. On dependencies push the functional test workflow will get triggered, monitor the run. Once the functional tests are green, one is ready to tag the new releases branch for new version releases.
- Hot fix scenario:
  - Work on code changes in the target releases branch. Update the functional test workflow, to cover the hot fix code changes. E.g. Add the action use case which was failing, and to fix it this hotfix is getting released. This update needs to be made into a job targeting the release branch where the fix is getting pushed.
  - On the code push workflow will get executed with an updated functional scenario, and it will catch any regressions or breakages.
  - Post confirming the functional test workflow is successful, one is ready to update the releases tag to new hot fix commit.
- Refer [automated test process](https://github.com/Azure/actions/blob/main/docs/Testing-docs/Test-workflows-automation.md) to automate the test workflows within action repository as PR checks.
