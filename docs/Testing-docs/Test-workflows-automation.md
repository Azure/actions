# Automating test workflows in PR checks
Test workflows for actions can be automated in the action repo so that whenever a new PR is raised to `master` or `releases/*` branches, these workflows run in the branch which the PR is raised from.

This process of automated testing enables us to run tests on PRs from a branch in our repo and PRs from a forked repo. To ensure the safety of secrets that are used by the *pr-check* workflow and to prevent [pwn requests](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/), the *pr-check* workflow and its secrets should be a part of a [GitHub environment](https://docs.github.com/en/actions/reference/environments) with a suitable approval policy for triggering this workflow on a new PR.

Whenever a new PR occurs, especially from a forked repo, the PR is __manually reviewed__ for security vulnerabilities and then approved after which the *pr-check* workflow is triggered for the new PR. Approvers should manually review for [pwn requests](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/) before approving the checks to run on the PR.
    
## How to create an automated test workflow
    
1. Create a `pr-check.yml` workflow in the `.github/workflows` directory of the action repo. Set up a *Test automation* GitHub environment in the action and enable an suitable approval policy which includes adding a reviewer list to approve the PR before running the *pr-check* workflow.
2. Make this workflow trigger `on: pull_request_target` ([reference](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#pull_request_target)) if PRs from forked repos need to be checked automatically, otherwise use `on: pull_request`.
3. Steps include:
  1. Check out the repo.
  2. Set up Node.js for the GitHub action.
  3. Install `node_modules` using `npm install` as the PRs raised to the `main` branch will not have `node_modules`, causing the workflow to fail.
  4. Build the action using `npm run build` since some action repos don't have the updated `lib/.js` files as exempting `lib/.js` in PRs is recommended. This step ensures that the action has updated lib files.
  5. Here, we are targeting to run a sample test for the action. For multiple scenarios, we can mention different scenarios in the same file and have multiple steps in the workflow calling the necessary actions for the required setup. For example, if a .NET app needs to be deployed, we set up .NET using `actions/setup-dotnet` and resolve those dependencies here.
  6. Run the action with `uses: ./` which will execute the workflow in the current branch of the repo. Specify the input parameters required by the action using the `with:` parameters.

## Sample template
```yml
name: pr-check

on:
  pull_request_target:
    branches:
      - main
      - releases/*

jobs:
  deploy:
    environment: Automation test
    runs-on: windows-latest
    steps:
    - name: Check out the PR branch  
      uses: actions/checkout@v3
      with: 
        repository: ${{ github.event.pull_request.head.repo.full_name }}
        ref: ${{ github.event.pull_request.head.ref }}
      
    # using the 16.x version as an example
    - name: Set Node.js 16.x for GitHub Action
      uses: actions/setup-node@v3
      with:
        node-version: 16.x

    - name: Install node_modules
      run: npm install 
      
    - name: Build GitHub action
      run: npm run build
        
    # include any workflow and action-specific dependencies here
    
    - uses: ./ # pick the code of current action PR
      with:
        # specify input parameters for the action here
```
