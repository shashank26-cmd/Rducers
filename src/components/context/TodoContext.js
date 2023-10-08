import { createContext } from "react";
export default createContext(null);

// hence we have transform everything into context api now child comp ko doest not need to acces via props 
//provider ke ander joh bhi hai uske wajah se pure components ko cover krliya usne
// context ek special parent dega uske ander ko value pass ki toh woh property child grand child harr jagah accee hogi

//now reducers introduce