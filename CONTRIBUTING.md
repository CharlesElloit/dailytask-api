# Contributing to Dailytasks API

We'll love your input, idea and just about anything in this project! We want to
make contributing to this project as easy and transparent as possible, whether
it's:

- Reporting a issue
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Code of Conduct

The code of conduct is described in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)

## The Development Process

All changes happen through pull requests, Pull requests are the best way to
propose changes. We actively welcome your pull requests and invite you to submit
pull requests directly
<a href="https://github.com/Eklow-softwares/dailytask-api/pulls">here</a>
and, after review, these can be merged into the project.

## Pull Requests

1. Fork the repo and create your branch (usually named
   `patch-%the number of PRs you've already made%`) from `staging`.
1. If you've added code that should be tested, please add some tests' example.
1. Ensure to describe your pull request.

## Local Development

How to run it locally

**Requirements**

- Node
- Mongodb instance, `Campus or Cluster.`
- yarn package manager (Optional) but Recommanded

**Setup**

### Clone the repo

Please make sure you're cloning the repo after you forked.

```bash
  $ git clone https://github.com/Eklow-softwares/dailytask-api.git
```

```bash
  $ cd dailytask-api
```

## using yarn (Recommanded)

```bash
  $ yarn
```

## using npm

**If your using npm**

- Delete the yarn.lock file
- Update the dev script in package.json
- In .husky folder update all the instance of yarn in the pre-commit file to npm

Then Run the command.

```bash
  $ npm install
```

## Issues

We use GitHub issues to track public bugs. Please ensure your description is
clear and has sufficient instructions to be able to reproduce the issue. Report
a bug by
<a href="https://github.com/Eklow-softwares/dailytask-api/issues">opening
a new issue</a>; it's that easy!

## Frequently Asked Questions (FAQs)

I thought it would be great to have a list of FAQs for the project to help save
time for new contributors-

    - Q: [The Question?]
    - A: [The Answer!]

## Feature Request

Great Feature Requests tend to have:

- A quick idea summary
- What & why you wanted to add the specific feature
- Additional Context like images, links to resources to implement the feature
  etc etc.

## License

By contributing to Find Experts, you agree that your contributions will be
licensed under the LICENSE file in the root directory of this source tree.
