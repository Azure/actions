# Building GitHub Actions from Azure Pipeline Tasks

## Introduction

GitHub Actions and Azure Pipelines share several configuration similarities, which makes migrating to GitHub Actions relatively straightforward. 

[Migrating from Azure Pipelines to GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/migrating-from-azure-pipelines-to-github-actions) highlights the similarities and the key differences between Actions and Azure Pipelines. It describes syntax differences and migration required for Azure pipleines to Actions workflow.

For more information on GitHub Actions, please see [Core concepts for GitHub Actions.](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions)

This document descibes the basic conversions you need to transform your pipeline tasks code to actions.

## Steps to transform Tasks to Actions 

### 1. Replace Task libraries with Action libraries

In a pipeline task, the pipeline task lib is used for all the  platform functionalities. In Actions, the common functionalities have  been broken down into multiple smaller modules like @actions/io @actions/exec @actions/core. 

a. The code logic that is completely independent of the tasks library and any dependencies from the common-npm-packages folder can be re-used as in the Action.

b. For replacing the Task lib with the Actions libraries, below list contains some example conversions to help you get started. 
You might also be internally using certain modules built especially for tasks. When converting to action, please ensure any of your dependencies aren’t bringing in any `vsts-task-lib` references, as that could potentially lead into unexpected problems during runtime.

| Tasks                | Actions                                                                                      | Remarks                                                                                                                                                                    |
|----------------------|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tl.setResourcePath() |                                                                                              | setResourcePath is used to let the tasks lib know where to look for certain localised messages. Actions is entirely hosted, there’s no support                             |
| tl.loc()             | console.log(<message>)                                                                       | Actions are exclusively supported in the hosted environment, removing support for localisation. Put the actual message there and refactor it into a constants block later. |
| tl.getEndpoint()     | Take an input, whose expected value is produced using  `az sp ad create-for-rbac --sdk-auth` | The concept of serviceConnections doesn’t exist in Actions world.                                                                                                          |
| tl.debug()           | core.debug()                                                                                 | Import * as core from ‘@actions/core’                                                                                                                                      |
| tl.getInput()        | core.getInput()                                                                              | Import * as core from ‘@actions/core’, if input is required. Use  core.getInput({“required”:true});                                                                        |
| tl.getPathInput()    | core.getInput()                                                                              | Given that path input was a UI feature and workflows are exclusively yaml based, you should use core.getInput instead, reading the content as plain text                   |
| tl.getBoolInput()    | core.getInput()  Convert to type later                                                       |                                                                                                                                                                            |


### 2. Converting task.json to action.yml

Please refer to this document for more information on the syntax for authoring Action yml: https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions 

Following are the fields which exist in task.json but not in actions.yml
* ID 
* friendlyName
* helpUrl
* helpMarkDown
* Category
* Visibility
* Groups
* Version
* Demands
* Groups
* dataSourceBindings
* instanceNameFormat
* Messages

You can ignore the above attributes while converting your task.json

Please find below some examples for conversion - 

| From | To |
|-----|-----|
|“inputs”: [{<br>        "name": "<name>",<br>        "type": "<any-type>",<br>        "label": "<label>",<br>        "required": false,<br>        "defaultValue": "<default>",<br>        "options": {<br>        ....options<br>        },<br>        "helpMarkDown": "<helpText>"<br><br>    }],|inputs:<br>  <name>:<br>      description: <description><br>      required: false<br>      default: ‘<default>’|
  |"outputVariables": [<br>        {<br>            "name": "<outputVariable>",<br>            "description": "<description>"<br>        }<br>    ],|outputs:<br>  outputVariable: # id of the output<br>    description: '<description>'|
  |"prejobexecution": { // optional<br>        "Node10": {<br>            "target": "pre-job.js"<br>        }<br>   },<br> "execution": {<br>        "Node10": {<br>            "target": "src/main.js"<br>        }<br>    },<br> "postjobexecution": { // optional<br>        "Node10": {<br>            "target": "post-job.js"<br>        }<br>    }|runs:<br>  using: 'node12'<br>  main:'src/main.js'<br>  pre: ‘pre-job.js’ # optional<br>  post: ‘post-job.js’ # optional|

