import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Labs } from "./routes/AppUILabs";
import { Cats } from "./routes/AppUI";


function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/555Labs" element={<Labs />}></Route>
                <Route path="/Cats/" element={<Cats />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;