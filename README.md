# Actions - GitHub Actions for Azure

This repository provides a framework, guidleines and processes to author new and contribute to existing GitHub Actions deploying to Azure.

## Table of contents
- [GitHub Actions for deploying to Azure](#github-actions-for-deploying-to-azure)
- [GitHub Actions for Azure](#github-actions-for-azure)
- [Contributing to Azure Actions](#contributing-to-azure-actions)
- [Contributing to this repo](#contributing-to-this-repository)
  - [Create a new GitHub Action for Azure or Microsoft](https://github.com/Azure/actions/blob/master/Process_of_Authoring_GitHub_Actions_for_Azure.md#creating-a-new-github-action-for-azure-or-microsoft)
  - [Guidelines for repository permissions](https://github.com/Azure/actions/blob/master/Process_of_Authoring_GitHub_Actions_for_Azure.md#guidelines-for-setting-permissions-on-the-repo)
  - [Action Versioning](https://github.com/Azure/actions/blob/master/Process_of_Authoring_GitHub_Actions_for_Azure.md#action-versioning)
  - [Testing GitHub Actions](https://github.com/Azure/actions/blob/master/docs/Testing-GitHub-Actions.md)
  - [Publish to Marketplace](https://github.com/Azure/actions/blob/master/Process_of_Authoring_GitHub_Actions_for_Azure.md#publish-the-action-to-marketplace)
  - [Communication guidelines](https://github.com/Azure/actions/communication%20guidelines.md)
- [Code of Conduct](#code-of-conduct)

# GitHub Actions for deploying to Azure

[GitHub Actions](https://help.github.com/en/articles/about-github-actions)  gives you the flexibility to build an automated software development lifecycle workflow. 

With [GitHub Actions for Azure](https://docs.microsoft.com/azure/developer/github/) you can create workflows that you can set up in your repository to build, test, package, release and **deploy** to Azure. [Learn more about all other integrations with Azure.](http://aka.ms/GitHubonAzure)

Get started today with a [free Azure account](https://azure.com/free/open-source)!

To easily create GitHub CI/CD workflows targeting Azure, use our [Azure starter templates](https://github.com/Azure/actions-workflow-samples) to deploy your apps created with popular languages and frameworks such as .NET, Node.js, Java, PHP, Ruby or Python, in containers or running on any operating system. Also the individual Action repos have a sample workflow included in their Readme file to help you quickly get started.

Please try out the [GitHub Actions for Azure](https://docs.microsoft.com/azure/developer/github/github-actions) and share your feedback via Twitter on [@Azure](https://twitter.com/azuredevops). If you encounter a problem, please open an issue on the GitHub repository for the specific action.

# GitHub Actions for Azure

## Connect to Azure
- [Azure login](https://github.com/Azure/login)(`azure/login`) action can be used to authenticate to your Azure subscription using a service principal. 
- [Azure CLI](https://github.com/Azure/CLI) (`azure/cli`) action sets up the GitHub Action runner environment with the latest (or any user-specified) version of the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest). 
- [Azure PowerShell](https://github.com/Azure/PowerShell) (`azure/PowerShell`) action sets up the GitHub Action runner environment with the latest (or any user-specified) version of the Azure PowerShell module. 

You can then run Azure CLI or Azure PowerShell scripts to create and manage any Azure resource.

Refer to [starter templates](https://github.com/Azure/actions-workflow-samples/tree/master/AzureCLI) for examples.

## Manage resources by deploying ARM Templates
-  [ARM Deploy](https://github.com/Azure/arm-deploy) (`azure/arm-deploy`) action can be used to deploy the ARM templates.This action can be used to deploy Azure Resource Manager templates at different [deployment scopes](https://docs.microsoft.com/bs-latn-ba/Azure/azure-resource-manager/resource-group-template-deploy-rest#deployment-scope) -  resource group deployment scope, subscription deployment scope and management group deployment scopes. 

Refer to [starter templates](https://github.com/Azure/actions-workflow-samples/tree/master/ARM) for examples.

## Get Secrets from Azure Key Vault
With the [Get KeyVault Secrets](https://github.com/Azure/get-keyvault-secrets)(`azure/get-keyvault-secrets`) action, you can fetch one or more secrets from an [Azure keyvault](https://docs.microsoft.com/azure/key-vault/about-keys-secrets-and-certificates) instance and consume in your GitHub Action workflows.

Secrets fetched will be set as [outputs](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions#outputs) of the keyvault action step and also as environment variables. All the variables are automatically masked if printed to the console or to logs.

## Deploy a Web app
[Azure App Service](https://docs.microsoft.com/azure/app-service/) is a managed platform for deploying and scaling web applications. You can easily deploy your web app to Azure App Service with 
- [Azure WebApp](https://github.com/Azure/webapps-deploy) (`azure/webapps-deploy@v2`) 

Deploy a [Static Web app](https://docs.microsoft.com/azure/static-web-apps/) using:
- [Azure/static-web-apps-deploy](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=angular)

You could also configure App settings and Connection Strings using the actions:
- [Azure App Service settings](https://github.com/Azure/appservice-settings)(`azure/appservice-settings`). 
- [Azure App Configuration Sync](https://github.com/Azure/AppConfiguration-Sync)(`azure/appconfiguration-sync`)

Learn more about deploying web applications to Azure using GitHub Actions from the documentation of respective actions and [starter templates](https://github.com/Azure/actions-workflow-samples/tree/master/AppService).

## Deploy a serverless app
Streamline the deployment of your serverless applications to [Azure Functions](https://docs.microsoft.com/azure/azure-functions/), an event-driven serverless compute platform, by using the below actions and [starter templates](https://github.com/Azure/actions-workflow-samples/tree/master/FunctionApp).
- [Azure Functions](https://github.com/Azure/functions-action) (`azure/functions-action`) by bringing your code  or 
- [Azure Functions for containers](https://github.com/Azure/functions-container-action)(`azure/functions-container-action`) by bringing your custom container image 

## Build & Deploy containerized apps 
For containerized apps (single- or multi-containers) to create a complete workflow 
- use [Docker login](https://github.com/Azure/docker-login)(`azure/docker-login`) 
to build container images, push to a container registry (Docker Hub or Azure Container Registry) and then deploy the images to a Azure Web App or Azure Function for Containers, or to Kubernetes. 
- use [Deploy to Azure Container Instances](https://github.com/Azure/aci-deploy)(`azure/aci-deploy`) to deploy your container images to Azure Container Instances.
- use [Container scanning action](https://github.com/Azure/container-scan)(`azure/container-scan`) to add additional checks to secure your Docker Images created as part of CI or PR workflows. This would help scan for any common vulnerabilities in the docker images and gain confidence before pushing them to a container registry or deploy them to a containerized web app or a Kubernetes cluster.

## Deploy to Kubernetes 
We have released multiple actions to help you connect to a Kubernetes cluster running on-premises or on any cloud, including [Azure Kubernetes Service – AKS](https://docs.microsoft.com/en-us/azure/aks/), bake and deploy manifests, substitute artifacts, check rollout status, and handle secrets within the cluster. 
-	[Kubectl tool installer](https://github.com/Azure/setup-kubectl)(`azure/setup-kubectl`): Installs a specific version of kubectl on the runner.
-	[Kubernetes set context](https://github.com/Azure/k8s-set-context)(`azure/k8s-set-context`): Used for setting the target Kubernetes cluster context which will be used by other actions or run any kubectl commands.
-	[AKS set context](https://github.com/Azure/aks-set-context)(`azure/aks-set-context`): Used for setting the target Azure Kubernetes Service cluster context .
-	[Kubernetes create secret](https://github.com/Azure/k8s-create-secret)(`azure/k8s-create-secret`): Create a generic secret or docker-registry secret in the Kubernetes cluster.
-	[Kubernetes deploy](https://github.com/Azure/k8s-deploy)(`azure/k8s-deploy`): Use this to bake and deploy manifests to Kubernetes clusters.
-	[Setup Helm](https://github.com/Azure/setup-helm)(`azure/setup-helm`): Install a specific version of Helm binary on the runner.
-	[Kubernetes bake](https://github.com/Azure/k8s-bake)(`azure/k8s-bake`): Use this action to bake manifest file to be used for deployments using helm2, kustomize or kompose.
-   [Kubernetes lint](https://github.com/azure/k8s-lint)(`azure/k8s-lint`): Use this action to validate/lint your manifest files.

To deploy to a cluster on Azure Kubernetes Service, you could use `azure/aks-set-context` to communicate with the AKS cluster, and then use `azure/k8s-create-secret` to create a pull image secret and finally use the `azure/k8s-deploy` to deploy the manifest files.

Refer to [starter templates](https://github.com/Azure/actions-workflow-samples/tree/master/Kubernetes) for more examples.

## Create Virtual Machine Images
- [Build Azure Virtual Machine Images](https://github.com/Azure/build-vm-image): Creates custom virtual machine images by injecting artifacts built in CI workflows as well as running custom installation scripts. Also easily shares images using Azure services like Shared Image Gallery.

## Deploy to databases
We now have actions for database deployments
- [Azure SQL database](https://github.com/Azure/sql-action)(`azure/sql-action`) that uses a connection string for authentication and DACPAC/SQL scripts to deploy to your Azure SQL database.
- [Azure MySQL action](https://github.com/Azure/mysql)(`azure/mysql`) if you would like to deploy to an Azure MySQL database using MySQL scripts.
- [Azure Postgresql action](https://github.com/Azure/postgresql)(`azure/postgresql`) if you would like to deploy to an Azure PostgreSQL database using PL/SQL scripts.
Refer to [starter templates](https://github.com/Azure/actions-workflow-samples/tree/master/Database) for examples.

## Manage Azure Policy and trigger Compliance Scans
- [Manage Azure Policy](https://github.com/Azure/manage-azure-policy): You can now easily start on the journey of managing Azure policy from GitHub repository. All changes that are made to policy files in GitHub can be pushed to Azure Policy using this action in an orchestrated manner following safe deployment practices.
- [Azure Policy Compliance Scan](https://github.com/Azure/policy-compliance-scan): With this action, you can now easily trigger a [on demand  scan](https://docs.microsoft.com/en-us/azure/governance/policy/how-to/get-compliance-data#on-demand-evaluation-scan) from your GitHub workflow on one or multiple resources, resource groups or subscriptions, and continue/fail the workflow based on the compliance state of resources. You can also use this Github Action to generate a report on the compliance state of scanned resources for further analysis or archiving. 

## Train and Deploy Machine Learning models
- [Azure Machine Learning Login](https://github.com/Azure/aml-workspace) action to login / connect with Azure Machine Learning
- [Azure Machine Learning Train](https://github.com/Azure/aml-run) action for training machine learning models using Azure Machine Learning
- [Azure Machine Learning Deploy](https://github.com/Azure/aml-deploy) action deploys your model on Azure Machine Learning and creates a real-time endpoint for use in other systems. The endpoint can be hosted either on an Azure Container Instance or on an Azure Kubernetes Service. 

Refer to [starter templates](https://github.com/Azure/actions-workflow-samples/tree/master/MachineLearning) for examples.

## Trigger a run in Azure Pipelines
While GitHub Actions makes it easy to build, test, and deploy your code right from GitHub, you can also use it to trigger external CI/CD tools and services. For example, you could use GitHub Actions for Continuous Integration, and [Azure Pipelines](https://azure.com/pipelines) for Continuous Delivery to leverage features like Environments and deep integration with Kubernetes.
- [Azure Pipelines](https://github.com/Azure/pipelines)(`azure/pipelines`) action enables you to trigger an Azure Pipelines run as part of your Actions workflow.

Refer to [starter templates](https://github.com/Azure/actions-workflow-samples/tree/master/AzurePipelines) for examples.

## Utility Actions
- [variable substitution](https://github.com/Microsoft/variable-substitution)(`Microsoft/variable-substitution`) action enables you to parameterize the values in JSON, XML or YAML files (including configuration files, manifests, etc) within a GitHub Action workflow.

Refer to [starter templates](https://github.com/Azure/actions-workflow-samples/tree/master/Others) for examples.

## More coming soon!
We will continue improving upon our available set of GitHub Actions, and will release new ones to cover more Azure services.

# Contributing to Azure Actions

# Contributing to this repository

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
