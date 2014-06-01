## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
<!-- Your defnition here -->
let git know the current directory is the current version we want to save

#### branch
<!-- Your defnition here -->
split the workflow, so could enable work on different branches under their parent commit
#### checkout
<!-- Your defnition here -->
go the the commit you want to sit on
#### clone
<!-- Your defnition here -->
copy the remote dirctory and save it to local.
#### commit
<!-- Your defnition here -->
save the file just added to git
#### fetch
<!-- Your defnition here -->
update the local remote tracking branch with the remote branch
#### log
<!-- Your defnition here -->
show the activities and commits have done 
#### merge
<!-- Your defnition here -->
copy the changes from one commit to another you want
#### pull
<!-- Your defnition here -->
equals git fetch + git merge
#### push
<!-- Your defnition here -->
push the local repository to the remote repository.
#### reset
<!-- Your defnition here -->
it udo the changes/commits
#### rm
<!-- Your defnition here -->
remove files from the staging area
#### status
it show the status of the working directory. Use it to see if anything has been modified and/or staged since your last commit so you can decide if you want to commit a new snapshot and what will be recorded in it.

## Release 4: Git Workflow

- Push files to a remote repository
- git add filename =>git commit -m 'comment' =>git push remotename branchname
- Fetch changes
- git fetch => git checkout brachname =>git merge branchname
- Commit locally
- git add filename =>git commit -m 'comment'
## Release 5: Reflection
The branching and rebase was a bit confusing to me. cherry-pick is a really easy commend to add commits to different braches. Generally, the https://www.youtube.com/watch?v=XogN0Q4sb9o videos and http://gitref.org/ are two good resources to learn more about git.
