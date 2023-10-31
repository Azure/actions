# Actions - [GitHub Actions for Azure](https://azure.github.io/actions/)

This repository provides a framework, guidelines and processes to author new and contribute to existing [GitHub Actions deploying to Azure](https://azure.github.io/actions/).

## Table of contents
- [Introduction to GitHub Actions for Azure and Starter Action Workflows](#introduction-to-github-actions-for-azure-and-starter-action-workflows) 
- [Contributing to Azure Actions](#introduction-to-github-actions-for-azure-and-starter-action-workflows)
  - [Health Dashboard for Azure Action repos](https://azure.github.io/actions/health-dashboard.html)

# Introduction to GitHub Actions for Azure and Starter Action Workflows

[GitHub Actions](https://help.github.com/en/articles/about-github-actions)  gives you the flexibility to build an automated software development lifecycle workflow. 

With [GitHub Actions for Azure](https://azure.github.io/actions/) you can create workflows that you can set up in your repository to build, test, package, release and **deploy** to Azure. [Learn more about all other integrations with Azure.](http://aka.ms/GitHubonAzure)

Get started today with a [free Azure account](https://azure.com/free/open-source)!

To easily create GitHub CI/CD workflows targeting Azure, use our [Azure starter templates](https://github.com/Azure/actions-workflow-samples) to deploy your apps created with popular languages and frameworks such as .NET, Node.js, Java, PHP, Ruby or Python, in containers or running on any operating system. Also the individual Action repos have a sample workflow included in their Readme file to help you quickly get started.

Please try out the [GitHub Actions for Azure](https://docs.microsoft.com/azure/developer/github/github-actions) and share your feedback via Twitter on [@Azure](https://twitter.com/azuredevops). If you encounter a problem, please open an issue on the GitHub repository for the specific action.

# Contributing to Azure Actions

Following are the guideliens to author new Azure Actions and also to contribute to the existing ones.
### Authoring and making changes
  - [Create a new GitHub Action for Azure or Microsoft](docs/Process_of_Authoring_GitHub_Actions_for_Azure.md#creating-a-new-github-action-for-azure-or-microsoft)
  - [Contributing to the existing actions](docs/developer-guildelines.md)
  - [Building GitHub Actions from Azure Pipeline Tasks](docs/action-from-pipeline-task.md)
 
### Actions Repository Permissions
  - [Guidelines for repository permissions](docs/Process_of_Authoring_GitHub_Actions_for_Azure.md#guidelines-for-setting-permissions-on-the-repo)

### Testing
  - [Testing GitHub Actions](docs/Testing-docs/Testing-GitHub-Actions.md)
  - [Automated test workflows](docs/Testing-docs/Test-workflows-automation.md)
  - [Automates tests for updated runner images](docs/Testing-docs/Runner-infra-tests.md)
  - [Automatic Validation of recommended practices for an Actions repository](docs/validations-action-repo.md)

### Release 
  - [Action Versioning](docs/Process_of_Authoring_GitHub_Actions_for_Azure.md#action-versioning)
  - [Releasing a new version](docs/release-process.md)
  - [Publish to Marketplace](docs/Process_of_Authoring_GitHub_Actions_for_Azure.md#publish-the-action-to-marketplace)
  - [Communication guidelines](communication%20guidelines.md)
### Monitoring
  The below app integrations can be used to subscribe to the events like issues and PRs of an action repository for monitoring.
  - [Slack integration](https://github.com/integrations/slack#subscribing-and-unsubscribing)
  - [MS-Teams integration](https://github.com/integrations/microsoft-teams)

## Azure Actions toolkit 
[Azure Actions toolkit](https://github.com/Azure/actions-toolkit) hosting node modules to help write your azure actions

## Health Dashboard for Azure Action repos

This [health dashboard](https://azure.github.io/actions/health-dashboard.html) provides information on open issues and PRs for all the Azure Action repos. These are the [steps](docs/onboarding-to-dashboard.md) that can be followed to onboard any action on the dashboard.
We are also planning add a feature to highlight any dip in the action specific usage telemetry in the dashboard.

## Contributing License Agreement

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

# Code of Conduct
This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.


 - # Contribution guidelines 

Welcome to [actions]! We're thrilled that you'd like to contribute. Your help is essential for making it better.

## Getting Started

Before you start contributing, please make sure you have read and understood our [Code of Conduct](CODE_OF_CONDUCT.md).

### Fork the Repository

First, fork the [repository](https://github.com/Azure/actions) to your own GitHub account. This will create a copy of the project under your account.


### Clone the Repository
```
git clone https://github.com/Azure/actions
```
### Navigate to the project directory 📁
```
cd actions
```
Create a new branch for your feature or bug fix:
```
 git checkout -b feature-branch
 ```

Make your changes and commit them:
```
git add .
git commit -m "Description of your changes"
```
Push your changes to your fork:
```
git push origin feature-branch
```
Finally Click on Create Pull request to contribute on this repository.

