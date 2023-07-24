# Lab: Webpack

### Intro

##### What we're building

A site that will let you vote on what to eat for dinner tonight!

##### Setup

1. Fork & clone [this repo](https://github.com/se7en-illa/webpack-lab) to your computer.
2. Navigate into the project and open it in VSCode.
3. To run this app, open the public/index.html in your browser. Right now, it doesn't do anything. That's your job!

### Webpack

##### Improving with Modules - Background

Poke around the starting code. Right now, there's a couple voting buttons on the page, and some JS code set up that looks like it will help us get this voting system started.

If you take a look at the `index.html`, you'll notice there's no JavaScript being loaded on to the page yet. If you want, you can add the JS files in the `client` folder using the `script` tag (e.g. `<script src="/client/app.js" defer></script>`) and see if that helps our site's functionality.

But... while this may seem to work out fine for our little site, there are some problems with this approach. Think for a moment about what those may be, and check the hint below for some of our thoughts.

<details>
<summary>Hint: Problems with this approach</summary>

If you open up the console in the dev tools, you're able to call any function we've defined in our JS code. Everything is in the global scope!
Anyone can come in and just start calling our functions however they please. For this app, the consequences are not that bad... but what if we had other functions exposed, like `showAdminPage()` or `getUserDetails()`? These functions are clearly not meant for everyone, yet they are available to anyone.

As a consequence of the issue above, we run into the potential for naming conflicts since variables across all files now share the same scope. This can lead to some pretty unexpected behavior... accidentally overwriting or misusing variables, errors if you accidentally try to reassign a const. If you're mixing your own custom code with a library, you'd have to be careful not to mix up names!

Finally... exposing this much of our source code is probably not the greatest idea.

</details>

##### Modules

By modularizing our code, we fix a lot of the issues mentioned in the previous section.

Global scope? No way! Naming conflicts? Get outta town! And what about all that exposed code? We can tackle that too!

##### Webpack as a module bundler

Turning each file into its own `module` will clear up a lot of these scoping issues (sound familiar? This is what Node does too!)

Then, we can use Webpack to `bundle` all those modules together into a single file. Webpack is pretty smart, and it will trace all your dependencies so you can be sure that the final bundled file includes everything you need. Webpack does some other cool things as well that we'll start to see later in the course, such as modularizing other types of files... But for right now, we're going to focus on plain ol' JS.

##### Config

###### Installs

To get going with webpack, `npm install --save-dev webpack webpack-cli`.

This command downloads the packages webpack and webpack-cli (We need both!) and saves them to our package.json

###### Config file

You can run `webpack` from the command line and it will work with a default configuration set up. You can also create your own!

Create a file called exactly `webpack.config.js`. This is so Webpack knows where to look.

There's 3 big parts of the config file that you'll want to define:

- `mode`: There's usually a difference between a `'production'` project and one that's still in development. When you're in `'development'` mode, Webpack will create a more "human readable" file that's easier to debug than the `'production'` mode file.
- `entry`: This is where you tell Webpack where to "start". What's the main "entry point" of your app? What's the first JS file that runs? If you had to draw a hierarchy of files and dependencies, which one's at the top of the tree?
- `output`: Once Webpack does its bundling, where do you want the resulting file to go? And what do you want it to be called?

Take a look at the instructions for [setting up a config file](https://webpack.js.org/concepts/configuration/#simple-configuration), and give it a shot yourself.

<details>
<summary>Hint: Solution</summary>

```javascript

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './client/app.js',
    output: {
        path: path.resolve(__dirname, 'public').
        filename: 'bundle.js'
    }
}
```

You can name the output file whatever you want, but commonly used names are "bundle" or "main". Similarly, we put all our client-facing resources in a folder called "public", but you may see other names like "dist" for a folder like this.

</details>

###### A note on .gitignore

Since the bundle is an auto-generated file that we can recreate by running `webpack`, we don't need to include it in our repo. You'll see that `bundle.js` is already added to your `.gitignore` file.

##### Scripts

Let's add some scripts to the package.json to run Webpack for us:

```javascript

"build": "webpack",
"build-watch": "webpack -w"
```

These scripts will allow you to run the local installation of webpack from the command line. Both of these scripts will create a new bundle file, but the `"build-watch"` one will automatically update the bundle every time you make changes.

##### Test your config

Try running `webpack` using the build script `npm run build`. You should see something like this as output:

```zsh

asset bundle.js 5.1 KiB [compared for emit] (name: main)
runtime modules 670 bytes 3 modules
cacheable modules 845 bytes
  ./client/app.js 505 bytes [built] [code generated]
webpack 5.30.0 compiled successfully in 115 ms
```

This tells you that it made a file called `bundle.js`, what modules were included, the size of all these files, and how long it took! All nice things to know.

You should also see that a `bundle.js` file appeared (refresh your VSCode if you don't see it yet).

### Making it work!

##### Load the bundle

###### HTML

Now let's bring in this `bundle.js` file into our HTML. You'll only need this file (remove any other scripts you may have had before). Make sure this file is loaded after the DOM is loaded.

Load the page and try clicking on the voting buttons. What happens? Are you getting an error that the voting functions are not defined? That's exactly where you should be right now, and we'll be hooking that up in the final step, up next!

If this is not what you're seeing, check the hints below for some debugging help.

<details>
<summary>Hint: Adding the bundle</summary>

Add the `script` tag: `script src="bundle.js"`

</details>

<details>
<summary>Hint: Cannot read property addeventlistener</summary>

This might be caused by the JS trying to run before the DOM has been loaded onto the page. If the DOM isn't set up yet, then we can't fetch elements (all undefined!) and attach event listeners to them.

Move your script tag to the bottom, OR add a "defer" keyword to force it to load later.

</details>

<details>
<summary>Hint: 404 not found(for bundle)</summary>

Check the `src` of your script tag, and make sure it's correct.

If your bundle is in the "public" folder (i.e. the same folder as the HTML), then you can just put the filename: "bundle.js" as the source.

</details>

<details>
<summary>Hint: Trouble running webpack</summary>

Check your config file, and make sure all your ducks are in a row. This file is very picky about formatting, and very specific about the options it knows how to deal with. You can compare to our solution in the previous step!

</details>

##### The Final Step

Let's talk about the error we're getting right now: the voting functions aren't defined! Why is that?

We told webpack to start bundling with `app.js`. That's where our click handlers are, which then call functions... in another file. But we don't reference this other file anywhere!

##### import/export with modules

If you want to use the `voteTakeout` function from `scores.js`, it needs to be exported. Then we need to `import` it in the file we want to use it in. Go ahead and import/export this function, as well as everything else you need to get this voting app functional!

Note: If you want your code to auto-update the build, use the `npm run build-watch` script instead. Otherwise, every time you update your Javascript code, you would need to "re-bundle" your code.

<details>
<summary>Hint: Importing</summary>

In `client/app.js` we need to import at the top. For example:

```javascript
import { voteTakout } from "./score.js";
```

</details>

<details>
<summary>Hint: Exporting</summary>

In `client/score.js` we need to add the export keyword in front of our function definitions. For example:

```javascript
export const voteTakout = () => {
  takeoutScore++;
};
```

</details>

### Bonus: Live Voting

You've conquered the important stuff about webpack and modules.

But now, let's get some external input on this tough dinner decision.

##### Live Server & ngrok

You can get a VSCode extension called Live Server, which will show your app on a certain localhost port. Then you can use ngrok to open up a tunnel to that port, that can be shared with the outside world!

To use `ngrok` with Live Server:

- `npm install ngrok`
- click the "Go Live" button at the bottom of your screen (after the extension is installed)
- `npx ngrok http <PORT>` (use whatever port Live Server is running on)
- You will likely need to add `/public` to the end of the URL since that's where our `index.html` lives

From there, you can share the ngrok link for others to use! This is the "free tier" of ngrok, so it will only allow a certain number of visitors at a time before it will stop letting people in. Go ahead and share if you'd like! (You'll also need to create an ngrok account to view your deployment)

##### Shutting it down

- Make sure to `ctrl+c` from ngrok in your terminal. This will close the tunnel and no one from the outside world will be able to access that port anymore
- Close the Live Server by clicking the extension again (it should say something like "Port: 5500")
- If you want to uninstall `ngrok`, you can run `npm uninstall ngrok`
