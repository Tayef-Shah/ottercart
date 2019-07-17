# Otter Cart

Amazon says it wants half its shippments to be carbon neutral by 2030. This is a huge challenge to tackle considering that everyday, in the US alone, E-Commerce packages travel the same distance from the moon and back, **133,000 times**, according to Etsy CEO Josh Silverman.

However, there is strong evidence that suggests one very effective way to reduce the carbon emissions on e-commerce is by influencing consumer behavior to request later shipping dates. According to the research of Dr.Wendy Tate and Dr.Lisa M. Ellram, shipping by tomorrow with Amazon will cost you **50lbs of carbon dioxide**, whereas shipping in 4 days will only cost you **8lbs of carbon dioxide**. This extrordinary reduction in emissions due to the delayed shipping behavior is also supported in the research of Dr. Josué C. Velázquez Martínez; a sustainable logistics professor at MIT. His research shows that if you are willing to wait a week, you are **killing 20 trees instead of 100** compared to express shipping.

This is why we started Otter Cart. We aim to reduce Amazons emissions from shippments by showing users a personalized calculation on the trees they can save by extending the shipping time on their Amazon order. With about **100 million active Amazon prime members** around the world, there is huge potential for Otter Cart to really help save the planet.

## Getting Started
Before you begin, ensure you have a version of git installed on your local machine by entering `git --version` in your command line (PC) or terminal (Mac). If there is no version that shows, install git before proceeding. You can find instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

You must also have a recent version of the node package manager (npm) installed on your machine. Check the npm version on your machine with `npm -v` or `npm --version`. If you do not have any version of npm, you can find instructions to download npm [here](https://www.npmjs.com/get-npm)

In order to test the extension please download Google Chrome and update to the latest version.

### Steps to set up a development environment for Otter Cart

1. Load git and navigate into your preferred directory using the command `cd <directory name>`
1. Copy the https address of the repository by clicking on the **clone or download** on the repository page on GitHub
1. In git use the command below to save a copy of the repository
```
git clone <insert https address here>
```
2. Specify which remote repository will be used for network commands by using the command
```
git remote add origin <insert https address here>
```
3. Implement a remote tracking branch to create a direct link between your local branch and the remote branch by using the command
```
git branch --set-to <remote name>/<branch name> master
```
4. Install node modules in root directory
```
npm install
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
You can also use npm scripts to play around with the project. These are outlined in the section below.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.