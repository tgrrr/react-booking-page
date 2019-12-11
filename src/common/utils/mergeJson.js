import _ from 'lodash';
// import { map, tail, times, uniq } from 'lodash';

// FIXME: doesn't work for duplicate products
// credit: https://stackoverflow.com/a/51940089/3281978

const mergeJson = (a, b, _keyA, _keyB) => {
    const merged = _.merge(_.keyBy(a, _keyA), _.keyBy(b, _keyB));
    const values = _.values(merged);
    return values;
}

export default mergeJson;

