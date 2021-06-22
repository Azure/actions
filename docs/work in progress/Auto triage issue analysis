
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
