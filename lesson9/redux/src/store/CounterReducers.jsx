
let value = 0
const counterReducer = (state = value, action)=>{
    switch(action.type){
        case 'ADD':
            return state+1;
        case 'MINUS':
            return state-1;
        case 'ADD_VALUE':
            return state+parseInt(action.payload);
        default:
            state;
    }
}

export default counterReducer;