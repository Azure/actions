# Recommended practices

*   **Triaging issues** 
While triaging the issues on the repo, one should use the standard set of labels defined in the process of [onboarding to health-dashboard](onboarding-to-dashboard.md). \
Besides, one can label issues as “good first issue” so that contributors can pick up those issues. Those can be the ones which require small fix/documentation updates/ clarification of some features, etc. 


*   **Auto assigning issues** 
To notify the repo maintainers of a new issue on the repository, one can use the [Auto-assign](https://github.com/marketplace/actions/auto-assign-issue) action that will auto-assign the issue to the specified users and will send an e-mail to notify.

*   **Setting alerts on teams/slacks**
We can set alerts on teams/slacks for PRs and issues on the repositories. 
Notifications can be set up for [Teams](https://github.com/integrations/microsoft-teams) as well as [Slack](https://github.com/integrations/slack)

For example, for Slack notifications on a particular channel, after you [Install the GitHub integration for Slack](https://slack.com/apps/A01BP7R4KNY-github), you can use the following commands on your channel to setup notifications for your repo (&lt;org/repository>)

     /github subscribe azure/login_
To subscribe to specific notifications like - commits, reviews, etc. -

    /github subscribe azure/login reviews _

*   **Sharing product roadmap**
For customers to be aware about the upcoming features in the product, it’s good to have a public roadmap in the repository itself. One can have a look at [VSCode roadmap](https://github.com/microsoft/vscode/wiki/Roadmap) as a reference.
