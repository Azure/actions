## Steps to follow to onboard an action on the [Health-Dashboard](https://azure.github.io/actions/health-dashboard.html).



1. **Create set of labels**

In the action repository, define the following labels: 

<table>
  <tr>
   <td><strong>Label</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Color (Optional)</strong>
   </td>
  </tr>
  <tr>
   <td>need-to-triage	
   </td>
   <td>Requires investigation
   </td>
   <td>#fbca04
   </td>
  </tr>
  <tr>
   <td>idle 
   </td>
   <td>Inactive for 14 days
   </td>
   <td>#9A777A
   </td>
  </tr>
  <tr>
   <td>question	 
   </td>
   <td>Requiring some clarification
   </td>
   <td>#d876e3
   </td>
  </tr>
  <tr>
   <td>bug
   </td>
   <td>Something is not working
   </td>
   <td>#d73a4a
   </td>
  </tr>
  <tr>
   <td>P0
   </td>
   <td>Action not working
   </td>
   <td>#B60205
   </td>
  </tr>
  <tr>
   <td>P1
   </td>
   <td>Some scenario broken but workaround exists
   </td>
   <td>#EE3D1D
   </td>
  </tr>
  <tr>
   <td>enhancement	
   </td>
   <td>Feature request/improved experience
   </td>
   <td>#a2eeef
   </td>
  </tr>
  <tr>
   <td>documentation	
   </td>
   <td>Improvements or additions to documentation
   </td>
   <td>#0075ca
   </td>
  </tr>
  <tr>
   <td>backlog
   </td>
   <td>Planned for future
   </td>
   <td>#bd7e4b
   </td>
  </tr>
  <tr>
   <td>performance-issue	
   </td>
   <td>Performance improvement required
   </td>
   <td>#0e8a16
   </td>
  </tr>
  <tr>
   <td>waiting-for-customer
   </td>
   <td>Waiting for inputs from customer
   </td>
   <td>#0e8a16
   </td>
  </tr>
</table>


While triaging any issue, you can assign any of these labels to the issue, accordingly they will be reflected on the dashboard.



2. **Workflow for assigning default labels**

Add a workflow file to create default labels to the action repository. 
If there are existing separate workflow files doing the same, they can be replaced by this [workflow file](https://github.com/Azure/actions/blob/main/.github/workflows/defaultLabels.yml).



3. **Adding Issue template**

    For issues that will get created in the repo, the default label should be “need-to-triage”. This can be ensured using an issue template as follows :

*   On GitHub, navigate to the main page of the repository.
*   Under your repository name, click Settings. 
![image](https://user-images.githubusercontent.com/58769601/122913522-2af1f100-d377-11eb-9c3b-09950e038450.png)

*   In the "Features" section, under "Issues," click Set up templates. 
![image](https://user-images.githubusercontent.com/58769601/122913598-4230de80-d377-11eb-8d26-6bdc4f8fc916.png)


*   Use the Add template drop-down menu, and click on the custom template. 
![image](https://user-images.githubusercontent.com/58769601/122913644-54128180-d377-11eb-9746-febf46611fb2.png)

*   Specify the details, ensuring that label is set to “need-to-triage” 
![image](https://user-images.githubusercontent.com/58769601/122913687-61c80700-d377-11eb-8c2e-b6b736231ad7.png)


*   Commit these changes.
4. **Giving permissions  - Ignore for now**

5. **Raise a PR in Actions Repo**

 In a single PR, you can do the following changes:


*   In the [health-dashboard yml file](https://github.com/Azure/actions/blob/main/.github/workflows/health-dashboard.yml), add the name of your action as orgName/actionName \
It has to be appended to the existing list of actions.
![image](https://user-images.githubusercontent.com/58769601/122913750-77d5c780-d377-11eb-909e-8445786ad7b7.png)


*   In the [issue-view yml file](https://github.com/Azure/actions/blob/main/.github/workflows/issue-view.yml),  add the following lines of code by replacing with your repo to the existing list of elements section
![image](https://user-images.githubusercontent.com/58769601/122913792-845a2000-d377-11eb-9866-3401e88d1406.png)


*   In the [pr-view yml file](https://github.com/Azure/actions/blob/main/.github/workflows/pr-view.yml),  add the following lines of code by replacing with your repo to the existing list of elements section.

![image](https://user-images.githubusercontent.com/58769601/122913831-9471ff80-d377-11eb-857a-1b6cf1d10680.png)

    

