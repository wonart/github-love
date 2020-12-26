import createSelectors from './createSelectors';

export const {
    resourceSelector: adminLoginSelector,
    objSelector: adminLoginListSelector,
    collectionLoadingStateSelector: adminLoginListLoadingStateSelector,
} = createSelectors('admin_user');
