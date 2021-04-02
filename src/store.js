import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {categoryListReducer }from './reducers/categoryReducer'
import { mealListReducer, mealSearchReducer, randomMealReducer, singleMealReducer } from './reducers/mealReducers'
import { loginReducer } from './reducers/loginReducers'
const reducer = combineReducers({
    categoryList:categoryListReducer,
    mealList: mealListReducer,
    mealDetails:singleMealReducer,
    searchResult: mealSearchReducer,
    logedin:loginReducer,
    randomMeal:randomMealReducer

})

const initialState={}
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store