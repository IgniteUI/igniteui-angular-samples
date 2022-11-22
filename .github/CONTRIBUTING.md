## In this topic
 ### 1. [Development - applicable to issues and pull requests](#development)
 ### 2. [Testing - applicable to pull requests](#testing)
 ### 3. [Fixing bugs and adding new samples](#fixing)
 ### 3.1. [Bug fixing guidelines](#bug)
 ### 3.2. [Adding new samples guidelines](#new-sample)

When working on an issue/new sample for the Ignite UI Angular Samples, you need to be aware of and to follow a correct status workflow. We have created a number of status labels in order to communicate well what the current status of a single issue/pull request is. The statuses are as follows:

# <a name='#development'>Development - applicable to issues and pull requests</a>

1. `status: in-review` this is the initial status of an issue. If the label is not placed, go ahead and place it.
2. `status: in-development` this is the status once you start working on an issue. Assign the issue to yourself if it hasn't been assigned already, remove the previous status and assign status: in-development.
3. `status: by-design` this is the status of an issue that has been reviewed and has been determined that the current design of the feature is such that the issue describes the correct behavior as incorrect. Remove other statuses and place this status if you've reviewed the issue.
4. `status: third-party-issue` this is the status of an issue that has been reviewed, has been determined to be an issue, but the root case is not in the Ignite UI for Angular code. Example would be browser specific bugs caused by the particular browser's rendering or JavaScript engines, or an issue with the Angular framework. Remove other statuses and place only this one if you're the one performing the investigation.
5. `status: not-to-fix` this is the status of issues that derive from our code, but have been decided to leave as is. This is done when fixes require general design and/or architecture changes and are very risky.
6. `status: already-fixed` this status indicates that the issue is already fixed in the source code. When setting this status assign the person that logged the issue so that he can verify the issue is fixed in the respective development branch. Remove other statuses and place this status if you've reviewed the issue.
7. `status: cannot-reproduce` this status indicates that you cannot reproduce the issue in the source code. A reason may be because the issue is already fixed. When setting this status assign the person that logged the issue so that he can respond with more details on how to reproduce it.
8. `status: not a bug` this is the status of an issue that you reviewed and concluded that it's not a bug. You should comment explaining the reasons why you think the issue is not a bug.
9. `status: resolved` this is the status of an issue that has been fixed and there are active pull requests related to it.

Example status workflows:

`status: in-review` => `status: in-development` => `status: resolved` (PR is created)

`status: in-review` => `status: by-design` (Issue can be closed)

`status: in-review` => `status: third-party-issue` (Issue can be closed)

`status: in-review` => `status: not-to-fix` (Issue can be closed)

# <a name='#testing'>Testing - applicable to pull requests</a>
1. `status: awaiting-test` this is the initial status of pull requests. If you're performing the pull request, please place this status on it. Pull requests are accepted if and only if all status checks pass, review is performed, and the pull request has been tested and contains `status: verified`.
2. `status: in-test` place this status once you pick up the pull request for testing.
3. `status: verified` place this status once you've tested the pull request, have verified that the issue is fixed, and have included all necessary automated tests for the issue.
4. `status: not-fixed` place this status once you've tested the pull request and you are still able to reproduce the issue it's attempting to fix. Then assign the developer back on the pull request.

Example status workflows:

`status: awaiting-test` => `status: in-test` => `status: verified` (PR can be merged if all prerequisites are met)

`status: awaiting-test` => `status: in-test` => `status: not-fixed` => `status: in-development` => `status: awaiting-test`


> Note: Testing a PR from Angular Samples (when new sample is added) with combination of PR related to topic update (or when new topic is added).
Open both repositories ([DocFX Site Builder](https://github.com/IgniteUI/igniteui-docfx) and [Angular Demos](https://github.com/IgniteUI/igniteui-angular-samples)) and perform `npm start`. This will start both projects and you will see the embed sample in your topic under `localhost`.

# <a name='#fixing'> Fixing bugs and adding new samples</a>
## <a name='#bug'> Bug fixing guidelines</a>

1. Depending on where the bug was found `the current version` or the `ongoing release version`, checkout a development branches from `vNext` or/and `master` branch. `vNext` is the version that is going to be used upon release (next version), and `master` is the branch with the current state (current version). If the change/fix is applicable only to the ongoing release branch (`vNext`) there is no need to cherry-pick to `master` branch as the change/fix/feature will be pushed to `master` branch upon release.
2. Run lint
3. Pull request your changes and reference the issue. Use the enforced commit message format with applicable type, scope, etc.
4. Don't forget to make the necessary status updates, as described in the workflow section.

**Example workflow**
When bug fixes are applicable to both `vNext` and `master` branches the process will look like this:

1.	Checkout new branch from `vNext`. For code example purposes let's say the new branch is called `fixing-bug-5423-vNext`.
2.	Commit your changes to your `fixing-bug-5423-vNext` branch.
3.	Push and PR to the `vNext` branch.
4.	Switch to the `master` branch.
5.  Create a new branch from `master`. For code example purposes let's say the new branch is called `fixing-bug-5423-master`.
6.  Cherry pick your commit from the `fixing-bug-5423-vNext` branch: `git cherry-pick ..`
7.  Push to your `fixing-bug-5423-master` branch and PR to the `master` branch.

## <a name='#new-sample'> Adding new samples guidelines </a>
Depending on where the the new sample should be added, `the current version` or the `ongoing release version`, checkout a development branches from `vNext` or/and `master` branch. `vNext` is the version that is going to be used upon release (next version), and `master` is the branch with the current state (current version). If the new sample is applicable only to the ongoing release branch (`vNext`) there is no need to cherry-pick to `master` branch as the new sample will be pushed to `master` branch upon release.
