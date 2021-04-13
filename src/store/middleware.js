import promise from 'redux-promise-middleware';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';


const middleware = () => {
    return (
        [ promise, ReduxThunk, logger ]
    );
}

export default middleware;