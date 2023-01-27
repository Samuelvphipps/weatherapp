// axios.get('/api/updatecart', {
//     params: {
//       product: this.product
//     }
//   }).then(...)

import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';



function* fetchWeather(action){
    // console.log('in fetchWeather saga');
    try{

        const response = yield axios.get('/api/weather',{
            params: {
                location: action.payload
            }
        });

    } catch (err) {
        console.error('in fetchWeather saga error', err);
    }
}

function* weatherSaga() {
    yield takeEvery('FETCH_WEATHER', fetchWeather);
}

export default weatherSaga;