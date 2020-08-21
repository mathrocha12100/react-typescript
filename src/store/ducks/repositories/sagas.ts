import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from '../repositories/actions';
import { RepositoriesTypes } from '../repositories/types';

export function* getRepositories() {
  try {
    const response = yield call(api.get, '/users/mathrocha12100/repos');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default all([
  takeLatest(RepositoriesTypes.LOAD_REQUEST, getRepositories)
]);
