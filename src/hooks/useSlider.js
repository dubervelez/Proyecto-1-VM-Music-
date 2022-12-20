import ContextSlider from "../context/context";
import { useContext} from "react";


 const useSlider = ()=> {
   return useContext(ContextSlider);
}

export default useSlider