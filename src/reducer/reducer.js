const reducer = (state, action) => {
    switch (action.type) {
        case 'set_isBurguer':
            return{...state, isBurguer: action.payload};
        case 'set_valueSelectNavbar':
            return{...state, valueSelectNavbar: action.payload}
        default:
          break;
      }
  };
  
  export default reducer;