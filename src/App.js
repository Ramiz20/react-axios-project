// import Header from "./components/Header";
// import Main from "./components/Main";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Product from "./components/Product";
// import AdminPanel from "./components/AdminPanel";
// import Update from "./components/Update";

// function App() {
//   return (
//     <>
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/product/:id" element={<Product />} />
//           <Route path="/admin" element={<AdminPanel />}/>
//           <Route path="/admin/update/:id" element={<Update />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import AdminPanel from "./components/AdminPanel";
import Update from "./components/Update";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Main />} />
            <Route path="/product/:id" element={<Product />} />
          </Route>

          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/update/:id" element={<Update />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
