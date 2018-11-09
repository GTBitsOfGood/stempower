import React from 'react';
import { connect } from 'react-redux';

export function fetchMentor() {
    return dispatch => {
        return fetch("/mentors")
            .then(res => res.json())
            .then(json => {
                //dispatch(fetchProductsSuccess(json.products));
                console.log(json);
                return json;
            })
    };
}
