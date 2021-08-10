## Validations for an Action repository



1. The action should have a readMe having information about the action. It should include : \
a. At least one Example workflow (Use example/sample as the heading) \
b. Contribution guidelines 
2. The code owners should be mentioned in a CODEOWNERS file in .github folder. Here is one [sample file](https://github.com/Azure/actions/blob/main/.github/workflows/CODEOWNERS).
3. For typescript actions, node_modules should: \
a. Not be present in master/main branch \
b. Be present in releases/* branch _(For releasing the action, one should have branches named as releases/v1, releases/v1.2.0)_
4. Proper branch rules should be set for master/main and releases/* branch.More information on branch rules can be found [here](https://docs.github.com/en/github/administering-a-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule).We recommend setting at-least one approval mandatory for PRs.
5. Security and vulnerability BOTs should be set up for the repo. Dependabot alerts and Dependaobot security updates should be set up in the repository Settings. 
![image](https://user-images.githubusercontent.com/58769601/123243496-b5199100-d500-11eb-9524-6589e4671ca7.png)

6. An issue template should be defined to set the default label as need-to-triage.One can follow these [steps](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)  to set up a template. Make sure the name of the issue template file is ```bug-report-feature-request.md``` if the template is created using UI or when issue template file is explicitly added.

7. The repo should have some standard labels defined. The following labels should be there : 
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
