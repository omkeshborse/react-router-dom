import { Routes, Route } from "react-router-dom";
/* this is Do to Default Export  */
import { Admin , Home , PageNotFound ,ProductsDetails ,ProductsList  } from "./pages";
import { Contact, ContactEu, ContactIn, ContactUsa ,ContactOther} from "./pages/Contact";
import {Header ,Footer} from './components'



import "./App.css";

function App() {
  const user = true;
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<ProductsDetails />} />
            <Route path="/contact" element={<Contact />}>
              {/* nested Routes */}
              <Route path="in" element={<ContactIn />} />
              <Route path="eu" element={<ContactEu />} />
              <Route path="usa" element={<ContactUsa />} />
              <Route path="*" element={<ContactOther />} />
            </Route>

            <Route
              path="/admin"
              element={user ? <Admin /> : <PageNotFound />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
