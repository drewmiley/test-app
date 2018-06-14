export const mapDispatchToProps = dispatch => {
    return { fetchData: url => dispatch(itemsFetchData(url)) };
};

function itemsFetchData(apiRoute) {
    return dispatch => {
        dispatch(itemsIsLoading(true));

        fetch(`https://enigmatic-waters-95441.herokuapp.com/api${ apiRoute }`)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}
