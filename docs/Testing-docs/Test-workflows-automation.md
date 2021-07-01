# Automating test workflows in the PR checks.
Test workflows for actions can be automated in the action repo so that whenever a new PR is raised to __master__ or __releases/*__  branches these workflows evaluate on the branch from which PR is raised. <br>

This process of automated testing enables one to run tests on PRs from a branch in a repo and also  PRs from a forked repo. Inorder to ensure the safety of secrets which are used by the pr-check workflows and to prevent pwn requests, the pr-check workflow and secrets should be a part of a [github environment](https://docs.github.com/en/actions/reference/environments) and set appropriate approval policy for triggering this workflow on a new PR. <br>

So whenever a new PR occurs (especially from a forked repo) , the PR is __manually reviewed__ for security vulneribilities and then approved after which the pr-check workflow is triggered for the new PR. Approvers should manually review for [these](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/) before approving the check to run on PR.
    
## Process to automate the workflows: 
    
1.  Create a ```pr-check.yml``` workflow in **.github/workflows** of the action repo. Setup __Automation test__ environment in the action and enable appropriate approval policy which includes adding reviewers list to approve the PR to run the pr-check. Visit [this](https://docs.github.com/en/actions/reference/environments) to know more about environments.
2.  Put the triggering condition for this workflow as ```on: pull_request_target``` if forked repo PR checks need to be checked automatically otherwise ```on: pull_request```  should do. Visit [pull_request_target](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#pull_request_target) for more details.
3. Steps include:
    1. Checkout the repo.
    2. Install the **node_modules** using ```npm install``` as the PRs raised to master branch will not have __node_modules__ without which the workflow fails.
    3. Build the action using ```npm run build```( Since some action repos don’t have the updated ```lib/.js``` files as they recommend to exempt ```lib/.js``` in PRs. This step ensures the action to have updated lib files).
    4. Here we are targeting to run a sample test for the action.For multiple scenarios, one can mention different scenarios in the same file and have multiple steps in the WF file calling the necessary actions for the required setup(For example if a .Net app needs to be deployed ,make sure you set up .Net using *actions/setup-dotnet@v1* and resolve those dependencies here).
    5. Run the action with ```uses: ./``` which will pick the current branch of the repo to execute the workflow. Specify the input parameters which are required by the action in the ```with: ``` parameters.
 

## Sample template: 

```yml
name: 

#triggers on pull_request from both forked repo and this repo on PR type opened/labeled

on:
  pull_request_target:
    branches:
      - master
      - 'releases/*'

jobs:
    deploy:
      environment: Automation test
      runs-on: windows-latest
      steps:
      - name: Checkout from PR branch  
        uses: actions/checkout@v2

      - name: installing node_modules
        run: npm install --prod
       
      - name: Build GitHub Action
        run: npm run build
          
      # include any workflow/action specific dependencies
      
      - uses: ./                  #picks the current action PR code.
        with:
          #input parameters of the action.

```
