# GitHub Actions for deploying to Azure

## Automate your GitHub workflows using Azure Actions

[GitHub Actions](https://help.github.com/en/articles/about-github-actions)  gives you the flexibility to build an automated software development lifecycle workflow. With GitHub Actions for Azure you can create workflows that you can set up in your repository to build, test, package, release and **deploy** to Azure. 

# GitHub Actions for Azure listing

- [Azure login](https://github.com/Azure/actions) - this repository
  - Azure login using Service Principal
- [AppService actions](https://github.com/Azure/appservice-actions)
  - Azure WebApp (Windows / Linux WebApps)
  - Azure Web app for containers (Single / multi-container apps)
- [Container actions](https://github.com/Azure/container-actions)
  - Docker login/logout
- [Kubernetes actions](https://github.com/Azure/k8s-actions)
  - Kubectl tool installer
  - Kubernetes set context
  - K8s create secret
  - K8s deploy
- More coming soon!

# Usage

Usage information for individual actions can be found in their respective repositories.

### Azure action

### Sample workflow that uses Azure login action to run az cli

```yaml

# File: .github/workflows/workflow.yml

on: [push]

name: AzureLoginSample

jobs:

  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    
    - uses: azure/actions/login@master
      with:
        creds: ${{ secrets.AZURE_CREDENTIALS }}
    
    - run: |
        az webapp list --query "[?state=='Running']"

```

#### Configure deployment credentials:

For any credentials like Azure Service Principal, Publish Profile etc add them as [secrets](https://developer.github.com/actions/managing-workflows/storing-secrets/) in the GitHub repository and then use them in the workflow.

The above example uses user-level credentials i.e., Azure Service Principal for deployment. 

Follow the steps to configure the secret:
  * Define a new secret under your repository settings, Add secret menu
  * Paste the contents of the below [az cli](https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest) command as the value of secret variable, for example 'AZURE_CREDENTIALS'
```bash  

   az ad sp create-for-rbac --name "myApp" --role contributor \
                            --scopes /subscriptions/{subscription-id}/resourceGroups/{resource-group} \
                            --sdk-auth
                            
  # Replace {subscription-id}, {resource-group} with the subscription, resource group details
  
```
  * Now in the workflow file in your branch: `.github/workflows/workflow.yml` replace the secret in Azure login action with your secret (Refer to the example above)


## Azure Login metadata file

```yaml

# action.yml

# Login to Azure subscription
name: 'Login Azure'
description: 'Login Azure wraps the az login, allowing for Azure actions to log into Azure'
inputs: 
  creds: # id of input
    description: 'Paste the contents of `az ad sp create-for-rbac... as value of secret variable: AZURE_CREDENTIALS'
    required: true
branding:
  icon: 'login.svg' # vector art to display in the GitHub Marketplace
  color: 'blue' # optional, decorates the entry in the GitHub Marketplace
runs:
  using: 'node'
  main: 'main.js'
```

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
