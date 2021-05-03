# Actions - GitHub Actions for Azure

This repository provides a framework, guidleines and processes to author new and contribute to existing GitHub Actions deploying to Azure.

## Table of contents
- [Introduction to GitHub Actions for Azure](#introduction-to-github-actions-for-azure)
  - [What is GitHub Actions for Azure](https://docs.microsoft.com/en-in/azure/developer/github/github-actions)
  - [Starter Action Workflows to deploy to Azure](https://github.com/Azure/actions-workflow-samples)
- Contributing to Azure Actions
  - [Create a new GitHub Action for Azure or Microsoft](docs/Process_of_Authoring_GitHub_Actions_for_Azure.md#creating-a-new-github-action-for-azure-or-microsoft)
  - [Contributing to the existing actions](docs/developer-guildelines.md)
  - [Building GitHub Actions from Azure Pipeline Tasks](docs/action-from-pipeline-task.md)
  - [Azure Actions toolkit](https://github.com/Azure/actions-toolkit) hosting node modules to help write your azure actions
  - [Guidelines for repository permissions](docs/Process_of_Authoring_GitHub_Actions_for_Azure.md#guidelines-for-setting-permissions-on-the-repo)
  - [Action Versioning](docs/Process_of_Authoring_GitHub_Actions_for_Azure.md#action-versioning)
  - [Testing GitHub Actions](docs/Testing-GitHub-Actions.md)
  - [Publish to Marketplace](docs/Process_of_Authoring_GitHub_Actions_for_Azure.md#publish-the-action-to-marketplace)
  - [Communication guidelines](communication%20guidelines.md)

# Introduction to GitHub Actions for Azure

[GitHub Actions](https://help.github.com/en/articles/about-github-actions)  gives you the flexibility to build an automated software development lifecycle workflow. 

With [GitHub Actions for Azure](https://docs.microsoft.com/azure/developer/github/) you can create workflows that you can set up in your repository to build, test, package, release and **deploy** to Azure. [Learn more about all other integrations with Azure.](http://aka.ms/GitHubonAzure)

Get started today with a [free Azure account](https://azure.com/free/open-source)!

To easily create GitHub CI/CD workflows targeting Azure, use our [Azure starter templates](https://github.com/Azure/actions-workflow-samples) to deploy your apps created with popular languages and frameworks such as .NET, Node.js, Java, PHP, Ruby or Python, in containers or running on any operating system. Also the individual Action repos have a sample workflow included in their Readme file to help you quickly get started.

Please try out the [GitHub Actions for Azure](https://docs.microsoft.com/azure/developer/github/github-actions) and share your feedback via Twitter on [@Azure](https://twitter.com/azuredevops). If you encounter a problem, please open an issue on the GitHub repository for the specific action.

# GitHub Actions for Azure

[azure.github.io/actions/](https://azure.github.io/actions/)

# Contributing

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
