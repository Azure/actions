# GitHub Actions

[GitHub Actions](https://help.github.com/en/articles/about-github-actions) is a community-led and community-powered approach to enable developers to automate their code to cloud workflows directly from their repositories.
There are now 6900+ community-developed actions available in [GitHub Marketplace](https://github.com/marketplace). 
Since releasing Actions in November 2017, GitHub partners including Cloud partners like AWS, Azure, Google, and many others have also contributed to this list to help developers (teams) to extend and automate workflows with their existing tools.

# GitHub Actions for Azure
[GitHub Actions for Azure](https://github.com/Azure/actions) are released to GitHub Marketplace for creating workflows to package, release, and deploy apps to [Azure](https://azure.microsoft.com/) from GitHub. These actions enable developers to target the breadth of Azure services, from Web Apps to serverless Functions, as well as Azure SQL and MySQL databases. We also released Actions for building and deploying container-based applications that work with Docker and Kubernetes on any environment and cloud, in addition to their managed Azure Kubernetes Service.

To help GH developers easily create GitHub CI/CD workflows targeting Azure, we also published [Azure starter templates](https://github.com/Azure/actions-workflow-samples) to deploy apps created with popular languages and frameworks such as .NET, Node.js, Java, PHP, Ruby or Python, in containers or running on any operating system.

GitHub Actions for Azure are also integrated into Visual Studio Code, Azure CLI, and the Azure Portal simplifying the experience of [deploying to Azure from your favorite tools.](https://azure.microsoft.com/en-us/blog/deploy-to-azure-using-github-actions-from-your-favorite-tools/)

This document is intended to help developers with the recommended process to create, publish and contribute to actions for Azure. Please reach out to the [ACE Team](mailto:ace-team@github.com) for any queries. 

# Creating a new GitHub Action for Azure or Microsoft

You can [create your own actions](https://docs.github.com/en/free-pro-team@latest/actions/creating-actions), use and customize actions shared by the GitHub community, or write and share the actions you build.

This guidance is to enable developers and teams intending to create a new GitHub Action targeting Azure. 

## Before you author

- Kindly confirm that the new action would enable a new developer scenario that can **not** be accomplished by the existing set of [Actions for Azure](https://github.com/marketplace?type=actions&query=Azure) or by enhancing them through contributions.
- Ensure that only one action is present per repo. Create new repo for each of your actions.

## Steps to create a new Action repo 

If you are a Microsoft employee, 

1. Choose the right GitHub org to create a repo. For example, for all Actions targeting an Azure service, choose [https://github.com/Azure/](https://github.com/Azure/) as the Org. Else for any generic utility actions which are cloud agnostic, chose [https://github.com/Microsoft](https://github.com/Microsoft) as the org for hosting the Action repo.

2. Request a new repo from the below links as suitable:
  - [https://repos.opensource.microsoft.com/orgs/Azure/new](https://repos.opensource.microsoft.com/Azure) for creating repos under github.com/Azure Org
  - [https://repos.opensource.microsoft.com/orgs/Microsoft/new](https://repos.opensource.microsoft.com/microsoft) for creating repos under github.com/Microsoft Org

Ensure to select **Engineering system: GitHub for Open Source** as GitHub Actions for Azure or Microsoft are published as Open Source in repos created in
Microsoft's official GitHub.com organizations, powered by GitHub Enterprise Cloud.

3. Alternatively, Microsoft users who might already have required permissions on github.com/azure and github.com/Microsoft orgs could just directly create a repo in the respective org without going through the above open-source portal URLs. 

Either-ways, there is an Open Source compliance request that automatically gets created at the end of the repo creation step. Creators receive an e-mail to complete the additional steps required to complete the setup process.

If you are an external (non-Microsoft) contributor, you could either raise PRs to the existing Actions in Azure &n Microsoft Orgs or create new action repos in your individual GitHub orgs and can reach out to the [ACE Team](mailto:ace-team@github.com) for any guidance.

## Guidelines for setting permissions on the repo
Once the repo is created, following is the permission model that is followed across various action repos within the [**Azure**](https://github.com/Azure) and [**Microsoft**](https://github.com/Microsoft) GitHub orgs:

- [actions-admin](https://github.com/orgs/Azure/teams/actions-admin/members) team would be added with "admin" role to every new GH repo created for authoring any new action under the Azure org (github.com/azure/). This will ensure that ACE team can act in admin role to ensure that the process guidelines for authoring & publishing the actions are completely followed.

- Owners of the individual actions could manage the "maintainer" permissions for their teams by [creating a new github team handle](https://github.com/orgs/Azure/new-team) for their crews and adding this handle with "admin"/"maintainer" role as needed. 

**Note:** It is recommended that team handles are used for maintaining permissions instead of adding individual member's github handles.

- Kindly request the corresponding Azure product teams to include their team handle as "Admins"/"Maintainers" to facilitate raising any commits from their side for feature enhancements or for fixing supportability issues


## ReadMe.md &amp; action.yml files

Once the Action development is complete, ensure that it is documented well in the **readme.md** file at the root of the repo of the Master branch. Please note that this content is used when the Action is published to the GitHub Marketplace. Hence including a sample workflow which covers the best usage of the Action is always recommended.

Also ensure that the **action.yml** is present in the root of the repo and has the Action name &amp; description well defined. Also choose the icon &amp; color suitably under branding as these are used when the Action is listed in Marketplace catalog.

Note: All actions published from **Azure** GitHub org are branded using the Azure icon irrespective of the icon used in the action.yml. This is to leverage the recall value of Azure brand and icon as compared to the individual icons of various Azure services. 

## Action Versioning

**Versioning Guidance for GH actions that should be adhered to before a new action or an enhancement to an existing action is released:** 

Official Release Management Guidance from GH platform team: https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/about-actions#using-release-management-for-actions

**Note:** Introduce a new major version of the branch (releases/v2) and tag (v2) if changes break the existing workflows using the previous version. In case of Minor version releases, ensure to move the major version tag to always point to the most recent minor version tag to ensure all the existing users of the major version would automatically gain the benefits from the new enhancements added in the minor version release.


## Publish the action to Marketplace

### Pre-requisites:

- Ensure that the Legal OSS approval process for the repo is complete. Search for the status of the work item created with your repo name here: https://ossmsft.visualstudio.com/Reviews/\_workitems/ .

&quot;DO NOT PUBLISH THE ACTION TO THE MARKETPLACE UNTIL LEGAL REVIEW IS COMPLETE&quot;

- Versioning guidelines mentioned above section are adhered to and you have a version tag
- Well documented readme.md is in place at the root of the repo
- V-team is involved for review process and sign off by mailing @[ACE team Alias](mailto:ace-team@github.com)

Finally [publish the action to GitHub Marketplace](https://docs.github.com/free-pro-team@latest/actions/creating-actions/publishing-actions-in-github-marketplace)
  - Typically for all actions intended to &quot;deploy to Azure&quot;, we mark Primary Category as &quot;Deployment&quot;
  - Secondary Category can be chosen based on the intent of the Action
- Give a suitable release title and write up. Tip: Include a sample workflow and License details
- &quot;Publish release&quot;
- Navigate to [https://github.com/marketplace?type=actions](https://github.com/marketplace?type=actions) and search for your Action to ensure everything shown is as needed.

### Include a starter template in the [Azure/actions-workflow-sample](https://github.com/Azure/actions-workflow-samples)s repo

Various starter templates are made available to help users easily get started with GitHub Actions for Azure and deploy their apps created with popular languages and frameworks such as .NET, Node.js, Java, PHP, Ruby, or Python in containers or running on any operating system.

It is recommended that a suitable workflow template is added to this repo: [https://github.com/Azure/actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) by raising a PR into the relevant folder.

For more help, please reach out to @[ACE Team Alias](mailto:ace-team@github.com)
