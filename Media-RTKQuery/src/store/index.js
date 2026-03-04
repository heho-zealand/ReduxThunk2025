import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from './apis/usersApi';
import { albumsApi } from './apis/albumsApi';
import { photosApi } from './apis/photosApi';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,  //ReducerPath er navnet på vores reducer i storen
    [albumsApi.reducerPath]: albumsApi.reducer,  //ReducerPath er navnet på vores reducer i storen
    [photosApi.reducerPath]: photosApi.reducer,  //slipper for stavefejl, da vi bruger variablen reducerPath, vi kunne have skrevet albums i stedet for albumsApi.reducerPath
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useFetchUsersQuery,
  useAddUserMutation,
  useRemoveUserMutation,
} from './apis/usersApi';
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from './apis/albumsApi';
export {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} from './apis/photosApi';
