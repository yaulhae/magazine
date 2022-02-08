import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { storage } from "../firebase";

const UPLOADING = "/image/UPLOADING";
const UPLOAD_IMAGE = "/image/UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW";

export const uploading = createAction(UPLOADING, (uploading) => ({
  uploading,
}));
export const uploadImage = createAction(UPLOAD_IMAGE, (upload_url) => ({
  upload_url,
}));
export const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));

export const uploadImageFB = (image) => {
  return function (dispatch, getState) {
    dispatch(uploading(true));
    const _upload = storage.ref(`images/${image.name}`).put(image);

    _upload.then((snapshot) => {
      console.log(snapshot);
      snapshot.ref.getDownloadURL().then((url) => {
        dispatch(uploadImage(url));
        console.log(url);
      });
    });
  };
};

const initialState = {
  image_url: "",
  uploading: false,
  preview: null,
};

const image = handleActions(
  {
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.image_url = action.payload.upload_url;
        draft.uploading = false;
      }),
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
  },
  initialState
);

export default image;
