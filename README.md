# GitHub Actions for deploying to Azure

[GitHub Actions](https://help.github.com/en/articles/about-github-actions)  gives you the flexibility to build an automated software development lifecycle workflow. 

With GitHub Actions for Azure you can create workflows that you can set up in your repository to build, test, package, release and **deploy** to Azure. [Learn more about all other integrations with Azure.](http://aka.ms/GitHubonAzure)

Get started today with a [free Azure account](https://azure.com/free/open-source)!

To easily create GitHub CI/CD workflows targeting Azure, use our [Azure starter templates](https://github.com/Azure/actions-workflow-samples) to deploy your apps created with popular languages and frameworks such as .NET, Node.js, Java, PHP, Ruby or Python, in containers or running on any operating system. Also the individual Action repos have a sample workflow included in their Readme file to help you quickly get started.

Please try out the GitHub Actions for Azure and share your feedback via Twitter on [@Azure](https://twitter.com/azuredevops). If you encounter a problem, please open an issue on the GitHub repository for the specific action.

# GitHub Actions for Azure

## Connect to Azure
Authenticate to your Azure subscription using the [Azure login](https://github.com/Azure/login)(`azure/login`) action and a service principal. You can then run Azure CLI scripts to create and manage any Azure resource using the [Azure CLI](https://github.com/Azure/CLI) (`azure/cli`) action, which sets up the GitHub Action runner environment with the latest (or any user-specified) version of the Azure CLI.

## Deploy a Web app
Azure App Service is a managed platform for deploying and scaling web applications. You can easily deploy your web app to Azure App Service with the [Azure WebApp](https://github.com/Azure/webapps-deploy) (`azure/webapps-deploy`) and [Azure Web app for containers](https://github.com/Azure/webapps-container-deploy)(`azure/webapps-container-deploy`) actions. You could also configure App settings and Connection Strings using the [Azure App Service settings](https://github.com/Azure/appservice-settings)(`azure/appservice-settings`) action. Learn more about deploying web applications to Azure using GitHub Actions in the documentation.

## Deploy a serverless app
Streamline the deployment of your serverless applications to Azure Functions, an event-driven serverless compute platform, by bringing either your code using the [Azure Functions](https://github.com/Azure/functions-action) (`azure/functions-action`) or your custom container image using the [Azure Functions for containers](https://github.com/Azure/functions-container-action)(`azure/functions-container-action`) . 

## Build & Deploy containerized apps 
For containerized apps (single- or multi-containers) use [Docker login](https://github.com/Azure/docker-login)(`azure/docker-login`) to create a complete workflow to build container images, push to a container registry (Docker Hub or Azure Container Registry) and then deploy the images to a Azure Web App or Azure Function for Containers, or to Kubernetes. 

## Deploy to Kubernetes 
We have released multiple actions to help you connect to a Kubernetes cluster running on-premises or on any cloud (including Azure Kubernetes Service – AKS), bake and deploy manifests, substitute artifacts, check rollout status, and handle secrets within the cluster. 
-	[Kubectl tool installer](https://github.com/Azure/setup-kubectl)(`azure/setup-kubectl`): Installs a specific version of kubectl on the runner.
-	[Kubernetes set context](https://github.com/Azure/k8s-set-context)(`azure/k8s-set-context`): Used for setting the target Kubernetes cluster context which will be used by other actions or run any kubectl commands.
-	[AKS set context](https://github.com/Azure/aks-set-context)(`azure/aks-set-context`): Used for setting the target Azure Kubernetes Service cluster context .
-	[Kubernetes create secret](https://github.com/Azure/k8s-create-secret)(`azure/k8s-create-secret`): Create a generic secret or docker-registry secret in the Kubernetes cluster.
-	[Kubernetes deploy](https://github.com/Azure/k8s-deploy)(`azure/ k8s-deploy`): Use this to bake and deploy manifests to Kubernetes clusters.
-	[Setup Helm](https://github.com/Azure/setup-helm)(`azure/setup-helm`): Install a specific version of Helm binary on the runner.
-	[Kubernetes bake](https://github.com/Azure/k8s-bake)(`azure/k8s-bake`): Use this action to bake manifest file to be used for deployments using helm2, kustomize or kompose.

To deploy to a cluster on Azure Kubernetes Service, you could use `azure/aks-set-context` to communicate with the AKS cluster, and then use `azure/k8s-create-secret` to create a pull image secret and finally use the `azure/k8s-deploy` to deploy the manifest files.

## Deploy to databases
We now have an action for [Azure SQL database](https://github.com/Azure/sql-action)(`azure/sql-action`) that uses a connection string for authentication and DACPAC/SQL scripts to deploy to your Azure SQL database.
If you would like to deploy to an Azure MySQL database using MySQL scripts, use [Azure MySQL action](https://github.com/Azure/mysql-action)(`azure/mysql-action`) instead.

## Trigger a run in Azure Pipelines
While GitHub Actions makes it easy to build, test, and deploy your code right from GitHub, you can also use it to trigger external CI/CD tools and services. For example, you could use GitHub Actions for Continuous Integration, and [Azure Pipelines](https://azure.com/pipelines) for Continuous Delivery to leverage features like Environments and deep integration with Kubernetes.
Thanks to the [Azure Pipelines](https://github.com/Azure/pipelines)(`azure/pipelines`) action, you can trigger an Azure Pipelines run as part of your Actions workflow.

## Utility Actions
Finally, we also released an action for [variable substitution](https://github.com/Microsoft/variable-substitution)(`Microsoft/variable-substitution`), which enables you to parameterize the values in JSON, XML or YAML files (including configuration files, manifests, etc) withina GitHub Action workflow.

## More coming soon!
We will continue improving upon our available set of GitHub Actions, and will release new ones to cover more Azure services.


# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
