# Nodeshift minimal express app

This is an example of a minimal nodejs(with expressjs) app for deployment on Red Hat OpenShift

## How to deploy to openshift
You can deploy directly from github to openshift on a personal (free) account or even on the playground without any registration as a way to try it.

### To deploy on the playground:
* Open https://www.openshift.com/learn/courses/playground/ and login with the provided login information (admin/admin)
* On the web console choose _developer_ instead of _administrator_ if is not selected by default
* From the menu on the left, select _+ Add_ 
* On the right side, from the _Project_ dropdown menu, click on _Create project_ and give it a name
* Out of the options provided to create an application, choose _From Git_
* On the following window, provide the GIT Repo URL
* Under builder images, choose _Node.js_
* Make sure the checkbox _Create a route to the application_ is selected
* Click _create_, this will begin the process to fetch and build an image with your project


### To see if the project is ready:
* Click _Topology_ (left menu) to see your application as a sort of _node_
* Click the _node_ that represents your application, under _resources_ you should see the image for your project being built. Once it's done it will say _Complete_
* Once the build is complete, wait until the app has scaled to 1 pod, once it does you'll see the text _Running_
* To access your app scroll down to _Routes_ and click on the url under _Location_

The _node_ itself provides a lot of information: 
* The node has 3 clickable icons and also an inner circle
* The top right icon is the public URL where you can access your app once it's ready
* The bottom left icon indicates if the image has been built from the source (git)
* The bottom right icon is a link to the git repository
* Once the app is ready and running, the inner circle will be blue

```
WARNING: The playground app will only work for a limited amount of time
```

## Important elements

Include in your in your _package.json_ the following:
```javascript
"main": "index.js",
"scripts": {
  "start": "node index.js"
}
```
replace _index.js_ with your entry file
  
 Use the following default values for port and ip:
 ```js
const ip = process.env.IP  || '0.0.0.0'
const port = process.env.PORT || 8080
 ```
