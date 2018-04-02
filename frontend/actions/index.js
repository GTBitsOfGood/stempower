// Action Creators

import * as types from './types';

export const addBioInfo = (content) => {
	return {
		type: types.ADD_BIO_INFO,
		content: content
	};
}

