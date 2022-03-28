//index.html//
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8" />
//     <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <meta name="theme-color" content="#000000" />
//     <meta
//       name="description"
//       content="Web site created using create-react-app"
//     />
//     <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
//     <!--
//       manifest.json provides metadata used when your web app is installed on a
//       user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
//     -->
//     <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
//     <!--
//       Notice the use of %PUBLIC_URL% in the tags above.
//       It will be replaced with the URL of the `public` folder during the build.
//       Only files inside the `public` folder can be referenced from the HTML.


//       Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
//       work correctly both with client-side routing and a non-root public URL.
//       Learn how to configure a non-root public URL by running `npm run build`.
//     -->
//     <title>React App</title>
//   </head>
//   <body>
//     <noscript>You need to enable JavaScript to run this app.</noscript>
//     <div id="root"></div>
//     <!--
//       This HTML file is a template.
//       If you open it directly in the browser, you will see an empty page.

//       You can add webfonts, meta tags, or analytics to this file.
//       The build step will place the bundled scripts into the <body> tag.

//       To begin the development, run `npm start` or `yarn start`.
//       To create a production bundle, use `npm run build` or `yarn build`.
//     -->
//   </body>
// </html>
//appjs/
// import React from "react";
// import "./App.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Home from "./Component/Home";
// import Registration from "./Component/Registration";
// import Login from "./Component/Login";
// import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

// import "./App.css";
// function App() {
//   return (
//     <div className="App">
//       <ToastContainer />
    
//       <Router>
//         <div className="header">

//           <Link to="/">Home</Link>
//           <Link to="/userlogin">LoginForm</Link>
//           <Link to="/user-registration">Registration</Link>
          
//         </div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/userlogin" element={<Login />} />
//           <Route path="/user-registration" element={<Registration />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }
// export default App;
//index//
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { store } from "./Redux/Store";
// import { Provider } from "react-redux";
// ReactDOM.render(
//   <div>
//     <React.StrictMode>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </React.StrictMode>
//     ,
//   </div>,

//   document.getElementById("root")
//




