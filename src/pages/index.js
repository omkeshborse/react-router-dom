/* this method is for name Export only  */
// export { Home } from "./Home.js";
// export { PageNotFound } from "./PageNotFound.js";
// export { ProductsDetails } from "./ProductsDetail.js";
// export { Admin } from "./Admin.js";
// export { ProductsList } from "./ProductsList.js";



/* THis method use for default export  */
import Admin from './Admin' ;
import Home from './Home' ;
import PageNotFound from './PageNotFound' ;
import ProductsList from './ProductsList' ;
import ProductsDetails from "./ProductsDetail"; 

/* if VS code does not allow to make index.js in folder inside folder then use below method*/
// import Contact from "./Contact/Contact";
// import ContactEu from "./Contact/ContactEu";
// import ContactIn from "./Contact/ContactIn";
// import ContactUsa from "./Contact/ContactUsa";
// import ContactOther from './Contact/ContactOther';


export { Admin, Home, PageNotFound, ProductsDetails, ProductsList };
