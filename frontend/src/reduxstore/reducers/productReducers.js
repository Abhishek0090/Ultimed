import axios from "axios";
import { Medicineapi } from "../../components/api/Medicineapi";

// const meds = axios.get("http://localhost:3001/api/meds")

const initialstate = {
    item : Medicineapi
}

export const getProductReducer = (state = initialstate, action) => {
    switch(action.type) {
        case "GET_PRODUCTS_SUCCESS":
            return { products: action.payload }
        case "GET_PRODUCTS_FAIL":
            return { error: action.payload }
        default:
            return state
    }
};

export const getProductDetailsReducer = (state = { product: {}}, action) => {
    
    console.log('Hi', action.type)
    switch(action.type){
        case "GET_PRODUCT_DETAILS_REQUEST":
            return { loading: true }
        case "GET_PRODUCT_DETAILS_SUCCESS":
            return { loading: false, product: action.payload }
        case "GET_PRODUCT_DETAILS_FAIL":
            return {
                loading: false,
                error: action.payload
            }
        case "GET_PRODUCT_DETAILS_RESET": 
            return {
                product: {}
            }
        default:
            return state
    }
}

// const initialState = {
//     item : Medicineapi,
//     totalAmount : 0,
//     totalItem : 0,
//   }

// //   useEffect(() => {
// //     dispatch({type:"GET_TOTAL"})
// //   }, [initialState.item])
  
//   const Reducers = (state=initialState,action)=>{

//     if(action.type === "REMOVE_ITEM"){
//         return{
//             ...state,
//             item : state.item.filter((element)=>{
//                    return element.id != action.payload; 
//             })
//         }
//     }
//     if(action.type === "CLEAR_CART"){
//     return{
//         ...state,
//         item : []
//     }
//     }
//     if(action.type === "INC_ITEM"){
//         let updateCart = state.item.map((e)=>{
//             if(e.id === action.payload ){
//                  return{...e,amount:e.amount + 1}   
//             }
//             return e
//         })
//         return {
//             ...state,
//             item : updateCart
//         }
//     }

//     if(action.type === "DEC_ITEM"){
//         let decCart = state.item.map((curE)=>{
//             if(curE.id === action.payload){
//                 return{
//                     ...curE,
//                     amount:curE.amount - 1
//                 }
//             }
//             return curE
//         })
//        return{
//            ...state,
//            item: decCart
//        }
//     }
//     if(action.type === "GET_TOTAL"){
//         let {totalItem,totalAmount} = state.item.reduce((accum,curVal)=>{
//             let {amount,price} = curVal;
//             let updatedTotalAmount = price * amount;
//             accum.totalItem += amount;
//             accum.totalAmount += updatedTotalAmount;
//             return accum;
//         },  {
//             totalItem: 0    ,
//             totalAmount:0
//         });
//         return {...state,totalItem,totalAmount};
//     }
//     return state;
// }

// export default Reducers;