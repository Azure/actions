## Create your own custom view for Issues

Though we cannot have a filter option on the [Issues detailed view page](https://azure.github.io/actions/issue.html), we can have a custom page to display details of only selected issues. This can be achieved with a quick couple of steps:


### Step 1: Having a config file for the shortlisted set of actions



* In the [config folder](https://github.com/Azure/actions/tree/kanika/customIssuePage/dashboard-config), create a config file for your actions. \
You can replicate [one made for the ace team](https://github.com/Azure/actions/blob/main/dashboard-config/ace-team-issues-config.yml), and change the actions as per your requirement. \
![image](https://user-images.githubusercontent.com/58769601/136520540-6fbd5b80-eb39-4643-af01-7b359838fe6f.png)

    This one has Azure/login as one of the actions. You can do the same for all your targeted actions.

* Update the output file name. \
![image](https://user-images.githubusercontent.com/58769601/136520643-7fb3f44c-f80d-4cab-8baa-bb3792d88bdf.png)

    You can have the filename as ‘docs/_teamName_-issues.html’

### Step 2: Setting a workflow

In the [workflows folder](https://github.com/Azure/actions/tree/main/.github/workflows), create a workflow file to publish your data on GitHub Pages. \
You can replicate [one made for the ace team](https://github.com/Azure/actions/blob/main/.github/workflows/issues-ace-team.yml), and name the workflow & file as per your team name. Depending upon the frequency at which you want the data to be updated, you can set a cron job on the workflow. \
 \
All set! This will create your custom issues page🥳

### Step 3: Visit the generated page

After the workflow runs, you can find your page created at https://azure.github.io/actions/ + 'teamName-issues.html'.
This is in accordance with what you provided in the Output file name in step1. For the current example of ace-team issues, [this](https://azure.github.io/actions/ace-team-issues.html) is the generated custom issue page.
