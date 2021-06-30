
# Auto-Labelling of Github Issues


## REQUIREMENTS



1. To investigate and understand the automatic issue triaging for action repositories.
2. To explore the feasible options and design a program for assigning need-to-triage, idle, stale, question, bug, enhancement, documentation, backlog and performance-issue.


## POSSIBLE SOLUTIONS EXPLORED


### Keyword Based Assignment



1. These are regex-based auto-labellers. 
2. In this approach, the user is required to specify the regex. 
3. The repository moderators have to set up repository specific regular expressions to extract some predefined keywords to assign labels.

    [https://github.com/marketplace/actions/issue-auto-labeling-and-assigning](https://github.com/marketplace/actions/issue-auto-labeling-and-assigning) 


    [https://github.com/github/issue-labeler](https://github.com/github/issue-labeler)<span style="text-decoration:underline;"> </span>


    [https://github.com/marketplace/actions/auto-label](https://github.com/marketplace/actions/auto-label)



### Issue Label Bot



1. It automatically labels issues as either a feature request, bug or question using machine learning. 
2. Issue label bot learns from the abundance of labelled data present in open source repositories.
3. It uses a simple Gated Recurrent Unit (GRU) based model architecture. 

    [https://github.com/machine-learning-apps/Issue-Label-Bot](https://github.com/machine-learning-apps/Issue-Label-Bot)
    
    
    
### VS Code Issue Triage Bot



1. All recent issues are passed through two models that map the issue to a feature area and determine the assignee with an accuracy of roughly 75%.
2. If the bot cannot verify an issue on its own, it labels it as author-verification-requested. Once verified, the bot labels the issue as verified.
3. The bot supports commands that can close issues, add labels, remove labels, and add comments. 
4. This is the basic triaging flow:
![image](https://user-images.githubusercontent.com/84702817/123509847-7ec14a80-d695-11eb-9ae8-a9725fbceec7.png)
5. The bot can close the issues for 14 reasons as listed [here](https://github.com/microsoft/vscode/wiki/Issues-Triaging#closing-issues)
6. It can assign backlog labels including Backlog, On-deck and Backlog-candidates.
7. Good-first-issue, help-wanted and investigation-wanted labels are used to ask for help.
8. This is the decision making tree that the bot uses:
![image](https://user-images.githubusercontent.com/84702817/123510135-6ce0a700-d697-11eb-954e-f91f4d4f9a4e.png)
9. The bot closes bugs as wont-fix if there is a negative cost-benefit balance.
10. Upstream label means that the issue is in a package or library that the bot consumes and that cannot be fixed independently. 


    [https://github.com/vscode-triage-bot](https://github.com/vscode-triage-bot)



### Auto-Labelling Using NLP



1. This action automatically labels issues as either a bug, enhancement or documentation.
2. It skips labelling when underconfident using Natural Language Processing. 
3. This model, unlike Issue Label Bot, significantly handles machine information.
4. Works only on unlabelled issues.

    [https://github.com/marketplace/actions/auto-github-issue-labeller](https://github.com/marketplace/actions/auto-github-issue-labeller)


<table>
  <tr>
   <td><strong>Approach</strong>
   </td>
   <td><strong>Benefits</strong>
   </td>
   <td><strong>Pitfalls</strong>
   </td>
  </tr>
  <tr>
   <td>
<h4>Keyword Based Assignment</h2>


   </td>
   <td>
<ol>

<li>Easiest approach

<li>Great way to go ahead with, provided, the incoming data can be predicted and the text is structured.

<li>Can classify into any number of labels if provided with the corresponding keywords to match against.
</li>
</ol>
   </td>
   <td>
<ol>

<li>Each repository requires a unique guideline thus it generalises poorly.

<li>Requires high engineering effort.

<li>Requires structured data.

<li>Needs time to time amendments.
<br><strong>F1 score/Precision = 0.3634      <br>Accuracy score = 0.5267</strong>
</li>
</ol>
   </td>
  </tr>
  <tr>
   <td><h4>Issue Label Bot
   </td>
   <td>
<ol>

<li>Generalises better.

<li>Requires no extra repository-specific engineering effort.

<li>Doesn’t need time to time amendments.

<li>Minimal requirement of expense and time.
<br><strong>F1 score/Precision = 0.8356      Accuracy score = 0.8362</strong>
</li>
</ol>
   </td>
   <td>
<ol>

<li>The model architecture is very simple.

<li>The data set needs improvement.

<li>Can’t capture nuances in issue text.

<li>Doesn’t consider machine information like URLs, code blocks and logs.

<li>Can only classify into feature request, bug or question.
</li>
</ol>
   </td>
  </tr>
          <tr>
   <td>
<h4>VS Code Issue Triage Bot</h2>


   </td>
   <td>
<ol>

<li>The bot can assign an issue to an owner

<li>The bot can help in closing the issues and can assign duplicate label.

<li>The bot monitors all issues labeled as need-more-info.
    
<li> The bot monitors the issues assigned to Backlog Candidates. 
</li>
</ol>
   </td>
   <td>
<ol>

<li>The owner has to assign type and feature-area label.

<li>The bot does not assign standard labels like bug, feature-request, documentation.

</li>
</ol>
   </td>
  </tr>
  <tr>
   <td><h4>Labelling Using NLP
   </td>
   <td>
<ol>

<li>Can filter out machine information.

<li>No extra engineering work is required.

<li>Model is trained from abundant labelled data.

<li>Doesn’t give a decision unless the confidence is above threshold.
<br><strong>F1 score/Precision = 0.8758       <br>Accuracy score = 0.8785. </strong>
</li>
</ol>
   </td>
   <td>
<ol>

<li>Can only classify into bug, feature and doc.

<li>Can’t cover issues with multiple labels. For instance, if an issue falls under both bug and enhancement categories, the bot would label it as either one of them depending on the distribution. (Only 2.4% of issues fall under this category)

<li>Recent repository and hasn’t been used much yet.
</li>
</ol>
   </td>
  </tr>

</table>



## Auto-Labelling Using NLP

[https://github.com/marketplace/actions/auto-github-issue-labeller](https://github.com/marketplace/actions/auto-github-issue-labeller)

After comparing the three techniques, we decided to go ahead with the NLP approach because of higher precision and accuracy, and also its ability to process machine information. 

We tested the technique on one of our repositories wherein we used some pre-labelled issues and tallied them with the labels that this workflow assigned to them. Out of the 56 issues that we tested, 45 were mapped correctly. 

The following repositories were used for picking issues for testing. \
[https://github.com/Azure/webapps-deploy/issues](https://github.com/Azure/webapps-deploy/issues) \
[https://github.com/Azure/login/issues](https://github.com/Azure/login/issues) \
[https://github.com/Azure/functions-action](https://github.com/Azure/functions-action) \
[https://github.com/Azure/aci-deploy/issues](https://github.com/Azure/aci-deploy/issues)

This is the repository wherein the test was conducted<span style="text-decoration:underline;"> \
[https://github.com/ishitachawla/Playlist/issues](https://github.com/ishitachawla/Playlist/issues)</span>

This shows that the approach works with an accuracy of about 0.8 which is fairly good.




## Conclusion

We can conclude that the NLP approach works better and is more effective than the regex based and issue label bot approaches. It can trigger issue labelling for pre-existing issues. The confidence threshold can be set below which the bot won’t label the issue. For improving, it can be made compatible for more than these three labels and multiple label assignment to an issue. Classification into more than three labels can be achieved by adding examples for the additional labels that we desire.                     \
Adding examples with multi-intent inputs and assigning them corresponding labels is the training approach for multiple label assignment to an issue. \
Also, it cannot assign labels to multiple repositories. Each repository has to have its own workflow file.
