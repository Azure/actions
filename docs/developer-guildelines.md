## Contributing to the existing actions

1. Fork the repo and pull it to the local master branch.

1. Run __“npm install”__ in the terminal within the repo. This command downloads dependencies defined in a __package. json__ file and generates a node_modules folder with the installed modules.

1. Make the necessary changes to __.ts__ files in __src/__ which after compilation generate __.js__ files in __lib/__ .

1. If there are significant changes in input and output fields in action, add/remove those fields in __action.yml__ file.

1. Add unit tests and build. Run __"npm run test"__ to check if unit tests pass . Run __"npm run build"__ to build files and check in your files including node_modules to the forked repo.
 
1. For end to end testing create a .yml workflow in __.github/workflows__ directory  and point it to your __org/repo@branch__ and test if your changes are working end to end. If your workflow depends on azure login, make sure to use azure login action in the workflow.If you are using the publish profile method, you may skip this step.
 
1. Once code is tested and unit tests are added, please raise a PR against the actual repo’s master branch.

1. Include .ts files, .js files, unit tests and documentation change if any on README, action.yml. Do not add node_modules to PR.
