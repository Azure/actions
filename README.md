# Azure Actions for GitHub

## Automate your GitHub workflows using Azure Actions

GitHub Actions gives you the flexibility to build an automated software development lifecycle workflow. With GitHub Azure Actions you can create workflows that you can set up in your repository to build, test, package, release and **deploy** to Azure. 

[About GitHub Actions](https://help.github.com/en/articles/about-github-actions) 

# Azure Actions listing

- [Azure login](https://github.com/Azure/actions) - this repository
  - Azure login using Service Principal
- [AppService actions](https://github.com/Azure/appservice-actions)
  - Azure WebApp (Windows / Linux WebApps)
  - Azure Web app for containers (Single / multi-container apps)
- [Contaner actions](https://github.com/Azure/container-actions)
  - Docker login/logout
- [Contaner / Kubernetes actions](https://github.com/Azure/k8s-actions)
  - Kubectl tool installer
  - Kubernetes set context
  - K8s create secret
  - K8s deploy
- More coming soon!


## Azure Login metadata file
```yaml
# action.yml

# Login to Azure subscription
name: 'Login Azure'
description: 'Login Azure wraps the az login, allowing for Azure actions to log into Azure'
inputs: 
  creds: # id of input
    description: 'Paste the contents of `az ad sp create-for-rbac --name <SPN name> --scopes /subscriptions/<subsciption-id>/resourceGroups/<resource-group> --role contributor --sdk-auth` as value of secret variable: AZURE_CREDENTIALS'
    required: true
branding:
  icon: 'login.svg' # vector art to display in the GitHub Marketplace
  color: 'blue' # optional, decorates the entry in the GitHub Marketplace
runs:
  using: 'node'
  main: 'main.js'
```

## Sample workflow file

```yaml
# File: .github/workflows/workflow.yml

on: [push, pull_request]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: azure/actions/login@master
      with:
        creds: '${{ secrets.AZURE_CREDENTIALS }}'
```
## Usage instructions
- Define a new secret under &lt;Your repo &gt;/settings/secrets : “Add a new secret”
- Paste the contents of `az ad sp create-for-rbac --name <SPN name> --scopes /subscriptions/<subscription-id>/resourceGroups/<resource-group> --role contributor --sdk-auth` as value of secret variable say 'AZURE_CREDENTIALS'
- Now in the workflow file in your branch: .github/workflows/workflow.yml set the action input value using `secrets` context


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
