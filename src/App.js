import React from "react";
import { BrowserRouter} from "react-router-dom";
import AppcuesRouter from "./Appcues";

/*
The AppcuesRouter contains the Appcues.page call, as well as all the app's page
changes. It needs to be additionally wrapped in BrowserRouter to function properly.

This is also where the Appcues.identify call is made, as well as any event listeners
like Appcues.on so that they will be called every time the page loads.
*/

let testVariable = "NateTest";

console.log(testVariable);

const App = () => {
  if (!window.localStorage.currentUser) { // persists the current user across page refresh
    window.localStorage.setItem("currentUser", "testUser"); // if no current user, set userID to "testUser"
  }

  if (!window.localStorage.timestamp) { // persists the timestamp across refresh
    window.localStorage.setItem("timestamp", Date.now()); // if no timestamp, sets it to now
  }

  return ( 
    <BrowserRouter> 
      <AppcuesRouter /> 
    </BrowserRouter>
  )
}

export default App;
