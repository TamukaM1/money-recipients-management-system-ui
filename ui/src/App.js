import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddRecipient from "./components/AddRecipient";
import RecipientList from "./components/RecipientList";
import Navbar from "./components/Navbar";
import UpdateRecipient from "./components/UpdateRecipient";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<RecipientList />} />
          <Route path="/recipients" element={<RecipientList />}></Route>
          <Route path="/recipientList" element={<RecipientList />} />
          <Route path="/addRecipient" element={<AddRecipient />} />
          <Route path="/editRecipient/:id" element={<UpdateRecipient />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
