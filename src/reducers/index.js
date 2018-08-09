import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectonReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibraryReducer,
    SelectedLibraryId: SelectonReducer
});
