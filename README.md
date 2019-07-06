# Otter Cart

Amazon says it wants half its shippments to be carbon neutral by 2030. This is a huge challenge to tackle considering that everyday, in the US alone, E-Commerce packages travel the same distance from the moon and back, **133,000 times**, according to Etsy CEO Josh Silverman.

However, there is strong evidence that suggests one very effective way to reduce the carbon emissions on e-commerce is by influencing consumer behavior to request later shipping dates. According to the research of Dr.Wendy Tate and Dr.Lisa M. Ellram, shipping by tomorrow with Amazon will cost you **50lbs of carbon dioxide**, whereas shipping in 4 days will only cost you **8lbs of carbon dioxide**. This extrordinary reduction in emissions due to the delayed shipping behavior is also supported in the research of Dr. Josué C. Velázquez Martínez; a sustainable logistics professor at MIT. His research shows that if you are willing to wait a week, you are **killing 20 trees instead of 100** compared to express shipping.

This is why we started Otter Cart. We aim to reduce Amazons emissions from shippments by showing users a personalized calculation on the trees they can save by extending the shipping time on their Amazon order. With about **100 million active Amazon prime members** around the world, there is huge potential for Otter Cart to really help save the planet.

## Getting Started
Before you begin, ensure you have a version of git installed on your local machine by entering `git --version` in your command line (PC) or terminal (Mac). If there is no version that shows, install git before proceeding. You can find instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

In order to test the extension please download Google Chrome and update to the latest version.

### Steps to set up a development environment for Otter Cart

1. Load git and navigate into your preferred directory using the command `cd <directory name>` 
1. Copy the https address of the repository by clicking on the **clone or download** on the repository page on GitHub
1. In git use the command below to save a copy of the repository
```
git clone <insert https address here>
```
1. Specify which remote repository will be used for network commands by using the command 
```
git remote add origin <insert https address here>
```
1. Implement a remote tracking branch to create a direct link between your local branch and the remote branch by using the command 
```
git branch --set-to <remote name>/<branch name> master
```

## Version Control Practices
Before you begin making any changes to the program, ensure that you are on the branch you want to be making changes on. If you are about to switch branches, check if you have any unsaved and/or uncommitted changes on the current branch with `git status`. Always commit your changes before switching branches.

### Pushing changes
1. Check for existing branches on your local
```
git branch
```
2. If the branch you want to work on is not on local, fetch it from the remote repository
```
git fetch
```
3. Checkout to the branch you would like to work on
```
git checkout <branch>
```
4. When you have done some work and are ready to add changes to the staging area specify the files to be added. Or you can add all changes with `git add .`
```
git add <file>
```
5. Commit your changes and add a message
```
git commit -m "Your message goes here"
```
6. Push your changes to the upstream branch
```
git push
```
OR push them to a remote branch of your choice `git push <remote> <branch>`

### Pulling Changes
If there are new changes on the remote master branch, you'll want to update your local version of the project with those changes.

1. Check which branch you are on with `git branch`, if you're not on master, checkout to it with the command below
```
git checkout master
```
2. Check for differences in your local master and the remote master
```
git status
```
3. Pull the changes from the upstream branch
```
git pull
```
4. If you are working on a different branch you'll want to update that branch with the new changes
```
git checkout <branch>
```
5. Merge from master to recieve the new updates
```
git merge master
``` 

## API Reference
Refer to the links below to see the variety of API's Otter Cart uses to provide the unique service it does. 

* API to check for users location - [Geolocation](https://developers.google.com/maps/documentation/javascript/geolocation#DetectingUserLocation)
* API to convert addresses into latitude and longtitude - [Geocoding service](https://developers.google.com/maps/documentation/javascript/geocoding)
* Amazon Customer Profile LWA - [Customer Profile](https://developer.amazon.com/docs/login-with-amazon/customer-profile.html)

### API Key Protection
These are the following policies which are practiced by the Otter Cart developer team to ensure the security of the API keys used in the application.

> ... Coming soon ...

## Testing
Otter Cart is currently tested manually using the Chrome Extentions Management Page to load new versions onto the browser.
1. Begin by opening a tab in Google Chrome and entering the line below into the search line\
`chrome://extensions`
2. Click the **load unpacked** button near the top left corner of the page
3. Select the `ottercart/build` directory from your file search
4. Enable the extension in your browser by selecting the toggle in the bottom right corner of the extension card on the page
