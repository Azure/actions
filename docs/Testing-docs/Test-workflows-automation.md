# Automating test workflows in the PR checks.
Test workflows for actions can be automated in the action repo so that whenever a new PR occurs to master or releases/* branches these workflows evaluate on the branch from which PR is raised. Once the checks are successful and are not breaking any existing scenarios, the PR will be merged subsequently.
For more information on actions and workflows visit [quickstart for actions](https://docs.github.com/en/actions).
## Process to automate the workflows: 
1.  Create a ```.yml``` workflow in **.github/workflows** of the action repo.

2.  Put the triggering condition for this workflow as ```on: pull_request_target``` if forked repo PR checks need to be checked automatically otherwise ```on: pull_request```  should do. Visit [pull_request_target](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#pull_request_target) for more details.
3. Steps include:
    1. Checkout the repo.
    2. Install the **node_modules** using ```npm install``` as the PRs raised to master branch will not have __node_modules__ without which the workflow fails.
    3. Build the action using ```npm run build```. Since some action repos don’t have the updated ```lib/.js``` files as they recommend to exempt ```lib/.js``` to PRs. This step ensures the action to have updated lib files.
    4. Setup any workflow/action specific dependencies.(for example if a .net app needs to be deployed ,make sure you resolve those dependencies here).
    5. Run the action with ```uses: ./``` which will pick the current branch of the repo to execute the workflow. Specify the input parameters which are required by the action in the ```with: ``` parameters.

## Sample template: 

```yml
name: 

#triggers on pull_request from both forked repo and this repo on PR type opened/labeled

on:
  pull_request_target:
    types: [labeled, opened]
    branches:
      - master
      - 'releases/*'

jobs:

    deploy:
      # runs this deploy on when the PR is labelled as 'safe to run test'
      if: contains(github.event.pull_request.labels.*.name, 'safe to run test')
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
NOTE: The  ___if condition___ should not be skipped as the ```pull_request_target``` accepts PRs from forked repo. The PR reviewer should ensure that the PR code is safe to execute. Once the review is done, the label ```'safe to run test'``` should be given to that PR by the reviewer following which this test workflow is automattically triggered.
