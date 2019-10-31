# GitHub Actions for deploying to Azure

[GitHub Actions](https://help.github.com/en/articles/about-github-actions)  gives you the flexibility to build an automated software development lifecycle workflow. 

With GitHub Actions for Azure you can create workflows that you can set up in your repository to build, test, package, release and **deploy** to Azure. 

Get started today with a [free Azure account](https://azure.com/free/open-source)!

# List of GitHub Actions for Azure 

- [Azure login](https://github.com/Azure/login) 
  - Azure login using Service Principal

- AppService actions
  - [Azure WebApp](https://github.com/Azure/webapps-deploy) (Windows / Linux WebApps)
  - [Azure Web app for containers](https://github.com/Azure/appservice-actions) (Single / multi-container apps)
  - [Azure Functions](https://github.com/Azure/functions-action) (Windows / Linux WebApps)
  - [Azure Functions for containers](https://github.com/Azure/functions-container-action) (Single / multi-container apps)
  - [Configure settings on Azure App Service](https://github.com/Azure/appservice-settings) (App settings / Connection Strings / Other generic settings)
 
- Database actions
  - [Azure SQL](https://github.com/Azure/sql-action) (Use DACPAC/SQL scripts to deploy to your Azure SQL database )
  
- Container actions
  - [Docker login/logout](https://github.com/Azure/docker-login)
  
- Kubernetes actions
  - [Kubectl tool installer](https://github.com/Azure/setup-kubectl)
  - [Kubernetes set context](https://github.com/Azure/k8s-set-context)
  - [AKS set context](https://github.com/Azure/aks-set-context)
  - [K8s create secret](https://github.com/Azure/k8s-create-secret)
  - [K8s deploy](https://github.com/Azure/k8s-deploy)

- More coming soon!

# Usage
Please refer to the [starter workflow samples](https://github.com/Azure/actions-workflow-samples) for helping GitHub developers to easily get started with the above GitHub Actions to automate their deployment workflows targeting Azure.

Also the individual Action repos above have a sample workflow included in their Readme file to help you quickly get started.

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
