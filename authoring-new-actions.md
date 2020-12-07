# Process to publish GitHub Actions for Azure

# Introduction

[GitHub Actions](https://help.github.com/en/articles/about-github-actions) gives developers the flexibility to build an automated software development lifecycle workflow directly from their repositories. Since releasing Actions in November 2017, GitHub partners have contributed enormously to Marketplace, so teams can extend and automate workflows with their existing tools.

Microsoft [announced](https://azure.microsoft.com/en-us/blog/github-actions-for-azure-is-now-generally-available/) the general availability of [GitHub Actions for Azure](https://github.com/Azure/actions) for creating workflows to package, release, and deploy apps to the cloud from GitHub. [GHActions\_vTeam](mailto:GHActions_vTeam@microsoft.com) has been formed to spearhead this effort of collaborating with various product teams at Microsoft to release these actions.

Also, at [Microsoft Build 2020](https://aka.ms/MS-build-session-Continuous-Delivery) we announced that GitHub Actions for Azure are now integrated into Visual Studio Code, Azure CLI, and the Azure Portal simplifying the experience of [deploying to Azure from your favorite tools.](https://azure.microsoft.com/en-us/blog/deploy-to-azure-using-github-actions-from-your-favorite-tools/)

This document is intended to help Microsoft teams and developers with the recommended process to create and publish more actions to GH marketplace. Please reach out to the [vTeam](mailto:GHActions_vTeam@microsoft.com) for any queries.

# Actions Plan

[https://github.com/Azure/actions](https://github.com/Azure/actions) has the complete list of all the actions that we have released to Marketplace. To help GH developers easily create GitHub CI/CD workflows targeting Azure, we also published [Azure starter templates](https://github.com/Azure/actions-workflow-samples) to deploy apps created with popular languages and frameworks such as .NET, Node.js, Java, PHP, Ruby or Python, in containers or running on any operating system.

We released Actions for working with a variety of Azure services, from Web Apps to serverless Functions, as well as Azure SQL and MySQL databases. We also released Actions for building and deploying container-based applications that work with Docker and Kubernetes on any environment and cloud, in addition to their managed Azure Kubernetes Service.

Here is the list of partner teams within Microsoft that we are collaborating:

| **Azure Service** | **Actions** | **Point of contact from Product team** |
| --- | --- | --- |
| **Azure App service** | [link](https://github.com/marketplace?utf8=%E2%9C%93&amp;query=Azure+web+app) | Stefan Schackow/ Nitasha Verma |
| **Azure Functions** | [link](https://github.com/marketplace?utf8=%E2%9C%93&amp;query=Azure+functions) | Daria Grigoriu /Anirudh Garg |
| **Azure Kubernetes Service (AKS)** | [link](https://github.com/marketplace?utf8=%E2%9C%93&amp;query=Azure+kubernetes) | Gabe Monroy/ Ralph Squillace |
| **Azure SQL** | [link](https://github.com/marketplace?utf8=%E2%9C%93&amp;query=Azure+SQL) | Dimitri Furman/ Diana Putnam |
| **Azure MySQL** | [link](https://github.com/marketplace?utf8=%E2%9C%93&amp;query=Azure+SQL) | Jan Engelsberg |
| **Azure PostgreSQL** | In Progress | Sunil Agarwal |
| **Azure CLI** | [link](https://github.com/marketplace?utf8=%E2%9C%93&amp;query=Azure+CLI) | Arun Chandrasekhar |
| **Azure PowerShell** | [link](https://github.com/Azure/powershell) ||
| **Azure KeyVault** | [link](https://github.com/Azure/get-keyvault-secrets) | Rashmi Jha |
| **Azure Blueprints/ARM templates** | In Progress | Satya Vel |
| **Azure Container Instances (ACI)** | [link](https://github.com/Azure/aci-deploy) | MacKenzie Olson |
| **Azure Service Fabric** | In Progress | Matthew Snider/ Tassaduq Basu |
| **Azure Stack** | In Progress | Ricardo Mendes |
| **Azure ML** | [link](https://github.com/Azure/aml-deploy) ||
| **Visual Studio and .NET** | In Progress | Angelos Petropoulos |
| **Visual Studio Code** | In Progress | TBD |
| **Nuget** | [link](https://github.com/marketplace/actions/setup-nuget-exe-for-use-with-actions) | Anand Gaurav |

Please reach of to us if your team is not listed above and would want to collaborate for new Actions.

# Building a new GitHub Action by Microsoft

## Repo Creation

1. Ensure that only one action is present per repo. Create new repo for each of your actions.
2. Choose the right org to create a repo. For example, for all Actions targeting an Azure service, choose [https://github.com/Azure/](https://github.com/Azure/) as the Org. Else for any generic utility actions which are cloud agnostic, chose [https://github.com/Microsoft](https://github.com/Microsoft) as the org for hosting the Action repo.
3. Request a new repo from the below links as suitable:
  1. [https://repos.opensource.microsoft.com/Azure](https://repos.opensource.microsoft.com/Azure) for creating repos under Azure Org
  2. [https://repos.opensource.microsoft.com/microsoft](https://repos.opensource.microsoft.com/microsoft) for Microsoft Org
4. Follow the Wizard for creating a &quot; **New release registration**&quot; and answer the below queries accordingly:
  1. **Is this going to be a public open source project - Yes**
  2. **What type of project is this? – Product Code (typically for all Actions)**
  3. **What license will you be releasing it under? – MIT**
  4. **Did your team write all the code and create all of the assets you are releasing? – Yes**
  5. **Does this project send any data or telemetry back to Microsoft? – Yes, if your Action collects back any telemetry.**
  6. **Provide a suitable Project name, version (can start with 0.0), description, business goals and Products where this will be used (GitHub workflows)**
  7. **Give a suitable Repo name &amp; description (shows up as public-facing repo description in GitHub)**
    1. Ensure that the repo name includes the exact verb/value that Action is intended to achieve.
    2. For actions targeting Azure, ensure to include &quot;Azure&quot; key word in the repo name.
  8. **Mark Initial repo visibility as**  **PRIVATE**
  9. **Add** [actions-admin](https://repos.opensource.microsoft.com/Azure/teams/actions-admin) **as one of the**  **Administrators Teams who could manage repo settings. You can also add more teams if needed.**
  10. **Choose License template (Generally all actions are open sourced under MIT license)**
  11. **Review all the submitted details and create Request.**
5. Note that this request triggers a Legal OSS approval process which needs to be completed before the repo visibility can be changed to PUBLIC. You should get an email from &quot;[noreply-opensource@microsoft.com](mailto:noreply-opensource@microsoft.com)&quot;  with a link to the work item that tracks the legal, OSS and your LT clearance.

## Guidelines during Development phase

- Ensure that no sensitive information is leaked in logs
- Do Not use the action repo for creating any workflows for testing as it leaves the history of workflow logs under the tab: Actions. Please create a separate repo for test workflows.
- While the Action repo is still private, you cannot access it from workflows in other repos. Hence testing on official repo will be possible only after you make the repo public and tag the code with a V0-BETA version. But do not publish the action to Marketplace.
- To enable debugging in the workflow logs, set the secret: ACTIONS\_STEP\_DEBUG = true

## ReadMe.md &amp; action.yml files

Once the Action implementation is complete, ensure that it is documented well in the readme.md file at the root of the repo of the Master branch. Please note that this content is used when the Action is published to the GitHub Marketplace. Hence including a sample workflow which covers the best usage of the Action is always recommended.

Also ensure that the Action.yml is present in the root of the repo and has the Action name &amp; description well defined. Also choose the icon &amp; color suitably under branding as these are used when the Action is listed in Marketplace catalog.

Note: All actions published from **Azure** GitHub org are branded using the Azure icon irrespective of the icon used in the action.yml. This is to leverage the recall value of Azure brand and icon as compared to the individual icons of various Azure services. ![](RackMultipart20201207-4-o60y8a_html_71d21847106d5771.png)

## Action Versioning

Versioning guidance for GH action that should be adhered to before an action is released:

URL: [https://github.com/actions/toolkit/blob/master/docs/action-versioning.md](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2Factions%2Ftoolkit%2Fblob%2Fmaster%2Fdocs%2Faction-versioning.md&amp;data=02%7C01%7Cushan%40microsoft.com%7C8aae17deba8746e1a01c08d758875665%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637075210643253612&amp;sdata=%2BePOVjbQc4bH1FYUlbCFx%2BNCjbfXSGd%2F2P96ncGWaII%3D&amp;reserved=0)

1. For a JS based action, don&#39;t check node\_modules into master: This is to avoid users to pick dependency on master branch which could be constantly churning. Hence node\_modules shouldn&#39;t be in master. Users are recommended to pick up only releases/v\* version.
2. Create a release branch for each major version
3. When ready for a stable release, add a major version tag (example V1)
4. Create releases for minor and patch version updates (e.g. v1.2.3)
5. Introduce a new major version of the branch (releases/v2) and tag (v2) if changes break the existing workflow.
6. For pre-release/preview versions, ensure to name the tag to indicate the same. ex: v0-BETA. There is a system-defined pre-release tag you can leverage while publishing in the marketplace.

![](RackMultipart20201207-4-o60y8a_html_259604dbe9d18c1d.png)

## Publish the action to Marketplace

### Pre-requisites:

- Legal OSS approval process for the repo is complete. Search for the status of the work item created with your repo name here: https://ossmsft.visua lstudio.com/Reviews/\_workitems/ .

&quot;DO NOT PUBLISH THE ACTION TO THE MARKETPLACE UNTIL LEGAL REVIEW IS COMPLETE&quot;

- Squash merge all commits in Master branch and remove all previous git history from your development phase to ensure a clean state when the action is published
- Versioning guidelines mentioned above section are adhered to and you have a version tag
- Have a readme.md in place with documentation
- Include V-team for review process and sign off by mailing@ [GHActions\_vTeam@microsoft.com](mailto:GHActions_vTeam@microsoft.com)
- Once we are all set, then we make the repo public
- Finally publish a release to the Marketplace

### Steps to publish:†

- In the GitHub repo, click on Code -\&gt; Releases -\&gt; Draft a new release
- Enable the checkbox for &quot; **Publish this Action to the GitHub Marketplace**&quot;
- Fill in the form with Contact &amp; Category details
  - Typically for all actions intended to &quot;deploy to Azure&quot;, we mark Primary Category as &quot;Deployment&quot;
  - Secondary Category can be chosen based on the intent of the Action
- Give a suitable release title and write up. Tip: Include a sample workflow and License details
- &quot;Publish release&quot;
- Navigate to [https://github.com/marketplace?type=actions](https://github.com/marketplace?type=actions) and search for your Action to ensure everything is right in place.

### Include a starter template in the [Azure/actions-workflow-sample](https://github.com/Azure/actions-workflow-samples)s repo

Various starter templates are made available to help users easily get started with GitHub Actions for Azure and deploy their apps created with popular languages and frameworks such as .NET, Node.js, Java, PHP, Ruby, or Python in containers or running on any operating system.

It is recommended that a suitable workflow template is added to this repo: [https://github.com/Azure/actions-workflow-samples](https://github.com/Azure/actions-workflow-samples) by raising a PR into the relevant folder.

For more help, please reach out to @ [GHActions\_vTeam@microsoft.com](mailto:GHActions_vTeam@microsoft.com)
