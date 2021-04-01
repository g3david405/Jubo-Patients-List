import React,{Fragment} from "react";
import Patient from "./patient";

function App() {
    document.title = "病人醫囑清單";
    return (
        <Fragment>
            <Patient />
        </Fragment>

    );
}

export default App;
