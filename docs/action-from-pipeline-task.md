# Create a Github Action based on a Pipleine Task

In a pipeline task, the pipeline task lib is used for all the  platform functionalities. This has been broken down into multiple smaller modules like @actions/io @actions/exec @actions/core. 
This document covers the basic conversions you need to transform your tasks code into a GitHub action.

| Tasks                | Actions                                                                                      | Remarks                                                                                                                                                                    |
|----------------------|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tl.setResourcePath() |                                                                                              | setResourcePath is used to let the tasks lib know where to look for certain localised messages. Actions is entirely hosted, there’s no support                             |
| tl.loc()             | console.log(<message>)                                                                       | Actions are exclusively supported in the hosted environment, removing support for localisation. Put the actual message there and refactor it into a constants block later. |
| tl.getEndpoint()     | Take an input, whose expected value is produced using  `az sp ad create-for-rbac --sdk-auth` | The concept of serviceConnections doesn’t exist in Actions world.                                                                                                          |
| tl.debug()           | core.debug()                                                                                 | Import * as core from ‘@actions/core’                                                                                                                                      |
| tl.getInput()        | core.getInput()                                                                              | Import * as core from ‘@actions/core’, if input is required. Use  core.getInput({“required”:true});                                                                        |
| tl.getPathInput()    | core.getInput()                                                                              | Given that path input was a UI feature and workflows are exclusively yaml based, you should use core.getInput instead, reading the content as plain text                   |
| tl.getBoolInput()    | core.getInput()  Convert to type later                                                       |                                                                                                                                                                            |

The above list contains a few observed conversions to help you get started. You might also internally use certain modules built especially for tasks, when converting to action, validate if any of your dependencies aren’t bringing in any `vsts-task-lib` references; you could potentially run into unexpected problems during runtime.

If any of your code logic is completely independent of tasks-lib and any dependencies from the common-npm-packages folder. You can use the file/module/class as it is.

## Converting task.json to action.yml

Refer to this document for more information: https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions 

Fields which exist in task.json but not in actions.yml
ID 
friendlyName
helpUrl
helpMarkDown
Category
Visibility
Groups
Version
Demands
Groups
dataSourceBindings
instanceNameFormat
Messages

You can ignore the above attributes while converting your task.json
