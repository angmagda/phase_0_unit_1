## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add

git add - adds file contents to the staging area. 
If the file is new, it initially adds the file to your staging area. If the file is already tracked, you still need to call git add to add new modifications to your staging area.																		

#### branch

git branch - lists all the available branches. 
git branch (branchname) - creates a new branch.

#### checkout

git checkout - switches between branches.

#### clone

git clone - copies a git repository so you can look at it or start modifying it. You run the code 'git clone [url]'

#### commit

git commit - saves a snapshot of the staging area. Records all the changes.

#### fetch

git fetch - will synchronize you with another repository. It updates new branches and data from a remote repo.

#### log

git log - show commit history of a branch. Shows all the commit messages that have lead up to the snapshot you are currently on.

#### merge

git merge - merges  a branch context into your current branch.

#### pull

git pull - Will basically run a 'git fetch' immediately followed by a 'git merge' of the branch on the remote repo.

#### push

git push - Updates a remote repo with the changes you have made locally.

#### reset

git reset - undoes changes and commits.

#### rm

git rm - removes files from the staging area entirely, so that it's not included in the next commit snapshot, thereby effectively deleting it.

#### status

git status - lets you view the status of your files in the working directory and staging area.


## Release 4: Git Workflow

- Push files to a remote repository
$ git push origin master - sends changes made in your local repository to the remote one.

- Fetch changes
  To fetch changes from a remote repository that you already have set up.
$ git remote -v - to verify your remote
$ git fetch upstream -  to get the changes from the remote repository to your local one.
$ git branch - make sure you're on your master branch *master
$ git merge upstream/master - merges upstream master into your local repo.
$ git commit -m - save changes with a message
$ git push origin master - syncronizes the local repo with the remote fork repo.

- Commit locally
$ git add - to track new files and also to stage changes to already tracked files
$ git status - to check your files status
$ git commit - to record the snapshot into your history.

## Release 5: Errors you encountered
1. Error
2. Solution
3. Cause (explain the error)

## Release 6: Reflection

Every time I work from the terminal I get really nervous. 
Because I've been fetching DBC's changes from the terminal, this time was a little different. I knew what to do, what to expect and what the commands would do. I understand better the information the terminal shows and if there are no errors I suppose I did things right. This challenge helped me understand better the basic git commands. I went through a couple of git tutorials and everything was fine, but at the end I'm still confused by the terminology and other commands.
I enjoyed this challenge because learning about git and Github is really interesting.
I'm not that scared of the terminal now...I'm starting to like it!
Some of the resources I found helpful are:
http://gitref.org/basic/
http://rogerdudler.github.io/git-guide/