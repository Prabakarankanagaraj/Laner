import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import { Filter } from "./Filter";
import { Lists} from "./Lists";
import { Create} from "./Create";
import { Main } from "./Main";
import { Read } from './Read';
import { Update } from './Update';
import { BySkills } from './BySkills';
import { Filtertwo } from './Filtertwo';
import { Filterskills } from './Filterskills';
import { Filtersalary } from './Filtersalary';
import { Filterexp } from './Filterexp';
import { Alter } from './Alter';
import { Remove } from './Remove';
import { Login } from './Login';
import { Caro } from './Caro';

 

const App=()=> {
  return (
    <>
    {
      sessionStorage.getItem("user")?
      <>
        <HashRouter>
      <Main/>
      
        <Routes>
           <Route exact path="/" element={<Caro/>}/>
           <Route exact path="/view" element={<Lists/>}/>
           <Route exact path="/fresh" element={<Create/>}/>
           <Route exact path="/short" element={<Filter/>}/>
           <Route exact path="/open/:key" element={<Read/>}/>
           <Route exact path="/modify/:primary" element={<Update/>}/>
           <Route exact path="/skillShort" element={<BySkills/>}/>           
           <Route exact path="/skillTwo" element={<Filtertwo/>}/>
           <Route exact path="/filterSkills" element={<Filterskills/>}/>
           <Route exact path="/filterSalary" element={<Filtersalary/>}/>           
           <Route exact path="/filterExperience" element={<Filterexp/>}/>       
           <Route exact path="/alter" element={<Alter/>}/>       
           <Route exact path='/remove' element={<Remove/>}/>
       </Routes>
     </HashRouter>

      </>
      :
      <>
       <Login/>
      </>
    }
    </>
  )
}

export default App;
