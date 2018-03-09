# Your react project in GitHub Pages

This is the web template explained in the Women Techmakers BCN talk.

*note: Before installing React.js you need to install Node.js and npm.
(They are just a set of tool that are going to help us with the software installation).*

*Just [download the packages from this link](https://www.npmjs.com/get-npm) and follow the instructions.*




Our Tools:
* React.js
* SASS
* GitHub Pages



## [Install React.js](https://reactjs.org/tutorial/tutorial.html#what-were-building)
1. Open your terminal and go to your desktop:  `cd Desktop`
 *(or the place where you want to create your project ).*

2. Install React.js: `npm install -g create-react-app`

3. Create your project: `create-react-app name-of-ur-project`

4. See your project in the browser:
   - Go to your project: `cd name-of-ur-project`
   - Run your project locally: `npm start` *(Remember to keep this terminal window open)*



## [Install SASS](http://sass-lang.com/install)

1. Open your terminal and go to your project:  `cd name-of-ur-project`

2. Install SASS: `sudo gem install sass`

3. Create your files manually

4. Watch your main scss file and point out the output to **a css file**: example:
  `sass --watch src/sass/app.scss:src/app.css`


## Host your site  in GitHub Pages

1.  Create a repo in your GitHub account

2. Upload your files in GitHub:
   - See your changes: `git status`
   - Include all your changes: `git add .`
   - Name your changes: `git commit -m "name your changes"`
   - Send your files to GitHub: `git push`


3. Add the url website in the .json file from your project:
 `"homepage": "https://user-name.github.io/repo-name"`
 *example, in my case was:*
 `"homepage": "https://dulce-delarosa.github.io/my-website"`.

4. Go to the terminal and install the GitHub Pages plugin: `npm install --save-dev gh-pages -g`

5. Translate from js to html (build): `npm run build`

6. Save the translated files in GitHub Pages: `gh-pages -d build`

7. Your website is published!.

8. Go to the settings from your repo *(in your GitHub account)*, and look the message that confirms that your website is published:

>Your site is published at https://dulce-delarosa.github.io/womentechmakersbcn/

#### Find out more about Git and GitHub Pages:
- [GitHub Pages](https://pages.github.com/)
- [About Git](https://git-scm.com/doc)



