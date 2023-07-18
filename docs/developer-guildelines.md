# Dev guidelines to contribute to the existing actions

## Fork the repo and setup

1. Fork the repo and clone it.

2. Download and install __Node.js 12.x__ or higher, which includes __npm version 6.x__ or higher.

3. Run __“npm install”__ in the terminal within the repo. This command downloads dependencies defined in a __package. json__ file and generates a node_modules folder with the installed modules.

## Make your changes and test

1. Make the necessary changes to .ts files in the src folder. Run __"npm run build”__ to compile your .ts files into .js files; ensure that these .js files are present in the __lib__ folder .

2. If there are changes in input and output fields in action, add/remove those fields in action.yml file.

3. Add unit tests and build. Run __"npm run test"__ to check if unit tests pass . Run __"npm run build"__ to build files and check in your files to the forked repo.

4.  Push your changes to the forked repository. Test your changes by creating a .yml workflow in __.github/workflows__ folder in another repository and provide this repository there in the place of action. For example - 
```
    uses: username/reponame@branch
    with:
     input_A: 
     input_B: 
```
where username/reponame@branch is your forked repo. Remember to checkin __node_modules__ in your forked repository while testing.

## PR for `main` branch

Once code is tested and unit tests are added, please raise a PR against the actual repo’s main branch. Note that __node_modules__ should __not__ be pushed while raising PR against __main__ branch.

## Releasing a new version

Proper release tags should be maintained for releasing new versions of the Action. A standard [release process](release-process.md) is to be followed.
