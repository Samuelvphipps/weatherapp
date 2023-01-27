

//weather reducer
const weatherReducer = (state={}, action) => {
    switch (action.type){
        case 'SET_WEATHER':
        return action.payload;
    };
    return state;
}

export default weatherReducer;