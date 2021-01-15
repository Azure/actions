# GitHub Actions

[GitHub Actions](https://help.github.com/en/articles/about-github-actions) is a community-led and community-powered approach to enable developers to automate their code to cloud workflows directly from their repositories.
There are now over 6,700+ community-developed actions available in [GitHub Marketplace](https://github.com/marketplace). 
Since releasing Actions in November 2017, GitHub partners including Cloud partners like AWS, Azure, Google, and many others have also contributed to this list to help developers(teams) can extend and automate workflows with their existing tools.

# GitHub Actions for Azure
[GitHub Actions for Azure](https://github.com/Azure/actions) are released to GitHub Marketplace for creating workflows to package, release, and deploy apps to [Azure](https://azure.microsoft.com/) from GitHub. These actions enable developers to target the breadth of Azure services, from Web Apps to serverless Functions, as well as Azure SQL and MySQL databases. We also released Actions for building and deploying container-based applications that work with Docker and Kubernetes on any environment and cloud, in addition to their managed Azure Kubernetes Service.

To help GH developers easily create GitHub CI/CD workflows targeting Azure, we also published [Azure starter templates](https://github.com/Azure/actions-workflow-samples) to deploy apps created with popular languages and frameworks such as .NET, Node.js, Java, PHP, Ruby or Python, in containers or running on any operating system.

GitHub Actions for Azure are also integrated into Visual Studio Code, Azure CLI, and the Azure Portal simplifying the experience of [deploying to Azure from your favorite tools.](https://azure.microsoft.com/en-us/blog/deploy-to-azure-using-github-actions-from-your-favorite-tools/)

This document is intended to help developers with the recommended process to create, publish and contribute to actions for Azure. Please reach out to the [vTeam](mailto:) for any queries.

# Creating a new GitHub Action for Azure or Microsoft

You can [create your own actions](https://docs.github.com/en/free-pro-team@latest/actions/creating-actions), use and customize actions shared by the GitHub community, or write and share the actions you build.

This guidance is to enable developers and teams intending to create a new GitHub Action targeting Azure. 

## Before you author

- Kindly confirm that the new action would enable a new developer scenario that can not be accomplished by the existing set of [Actions for Azure](https://github.com/marketplace?type=actions&query=Azure) or by enhancing them through contributions.
- Choose the right GitHub org to create a repo. For example, for all Actions targeting an Azure service, choose [https://github.com/Azure/](https://github.com/Azure/) as the Org. Else for any generic utility actions which are cloud agnostic, chose [https://github.com/Microsoft](https://github.com/Microsoft) as the org for hosting the Action repo.
- Ensure that only one action is present per repo. Create new repo for each of your actions.

## Steps to create a new Action repo 

Request a new repo from the below links as suitable:
  - [https://repos.opensource.microsoft.com/orgs/Azure/new](https://repos.opensource.microsoft.com/Azure) for creating repos under github.com/Azure Org
  - [https://repos.opensource.microsoft.com/orgs/Microsoft/new](https://repos.opensource.microsoft.com/microsoft) for creating repos under github.com/Microsoft Org

Ensure to select **Engineering system: GitHub for Open Source** as GitHub Actions for Azure or Microsoft are published as Open Source in repos created
Microsoft's official GitHub.com organizations, powered by GitHub Enterprise Cloud.

## Guidelines during Development phase

<Link to complete guidance during development>

## ReadMe.md &amp; action.yml files

Once the Action implementation is complete, ensure that it is documented well in the readme.md file at the root of the repo of the Master branch. Please note that this content is used when the Action is published to the GitHub Marketplace. Hence including a sample workflow which covers the best usage of the Action is always recommended.

Also ensure that the Action.yml is present in the root of the repo and has the Action name &amp; description well defined. Also choose the icon &amp; color suitably under branding as these are used when the Action is listed in Marketplace catalog.

Note: All actions published from **Azure** GitHub org are branded using the Azure icon irrespective of the icon used in the action.yml. This is to leverage the recall value of Azure brand and icon as compared to the individual icons of various Azure services. 

## Action Versioning

**Versioning Guidance for GH actions that should be adhered to before a new action or an enhancement to an existing action is released:** 

Official Release Management Guidance from GH platform team: https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/about-actions#using-release-management-for-actions

**Note:** Introduce a new major version of the branch (releases/v2) and tag (v2) if changes break the existing workflow. Ensure to move the major version tag to always point to the most recent minor version tag to ensure all the existing users of the major version would automatically gain the benefits from the new enhancements added in the minor version release.


## Publish the action to Marketplace

### Pre-requisites:

- Ensure that the Legal OSS approval process for the repo is complete. Search for the status of the work item created with your repo name here: https://ossmsft.visualstudio.com/Reviews/\_workitems/ .

&quot;DO NOT PUBLISH THE ACTION TO THE MARKETPLACE UNTIL LEGAL REVIEW IS COMPLETE&quot;

- Versioning guidelines mentioned above section are adhered to and you have a version tag
- Have a readme.md in place with documentation
- Include V-team for review process and sign off by mailing@ [V team Alias](mailto:)

Finally [publish the action to GitHub Marketplace](https://docs.github.com/free-pro-team@latest/actions/creating-actions/publishing-actions-in-github-marketplace)
  - Typically for all actions intended to &quot;deploy to Azure&quot;, we mark Primary Category as &quot;Deployment&quot;
  - Secondary Category can be chosen based on the intent of the Action
- Give a suitable release title and write up. Tip: Include a sample workflow and License details
- &quot;Publish release&quot;
- Navigate to [https://github.com/marketplace?type=actions](https://github.com/marketplace?type=actions) and search for your Action to ensure everything is right in place.

### Include a starter template in the [Azure/actions-workflow-sample](https://github.com/Azure/actions-workflow-samples)s repo

Various starter templates are made available to help users easily get started with GitHub Actions for Azure and deploy their apps created with popular languages and frameworks such as .NET, Node.js, Java, PHP, Ruby, or Python in containers or running on any operating system.

It is recommended that a suitable workflow template is added to this repo: [https://github.com/Azure/actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) by raising a PR into the relevant folder.

For more help, please reach out to @ [V Team Alias](mailto:)
