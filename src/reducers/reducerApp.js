function getInitialState() {
  return {
    data: []
  };
}

export default function (state = getInitialState(), action) {
  switch (action.type) {
    
    case 'APP_DATA': {
      return {
        ...state,
        data: action.payload
      }
    } 
    default:
      return {};
  }
}