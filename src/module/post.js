import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { firestore, storage } from "../firebase";
import moment from "moment";
import { history } from "../App";
import { setPreview } from "./image";
import { queryByTitle } from "@testing-library/react";
import firebase from "firebase/compat/app";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const LOADING = "LOADING";
const DELETE = "DELETE";
const CHECK_LAYOUT = "CHECK_LAYOUT";
const LIKE_UP = "LIKE_UP";
const DELIKE = "DELIKE";

export const setPost = createAction(SET_POST, (post_list, paging) => ({
  post_list,
  paging,
}));
export const addPost = createAction(ADD_POST, (post) => ({ post }));
export const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
export const loading = createAction(LOADING, (is_loading) => ({ is_loading }));
export const deleteP = createAction(DELETE, (post_id) => ({ post_id }));
export const checkL = createAction(CHECK_LAYOUT, (check_value) => ({
  check_value,
}));
export const likeUp = createAction(LIKE_UP, (post_id, user_id) => ({
  post_id,
  user_id,
}));
export const deLike = createAction(DELIKE, (post_id, user_id) => ({
  post_id,
  user_id,
}));

export const getPostFB = (start = null, size = 3) => {
  return function (dispatch, getState) {
    let _paging = getState().post.paging;
    if (_paging.start && !_paging.next) {
      return;
    }

    dispatch(loading(true));
    const postDB = firestore.collection("post");
    let query = postDB.orderBy("insert_dt", "desc");

    if (start) {
      query = query.startAt(start);
    }

    query
      .limit(size + 1)
      .get()
      .then((docs) => {
        let post_list = [];
        let paging = {
          start: docs.docs[0],
          next:
            docs.docs.length === size + 1
              ? docs.docs[docs.docs.length - 1]
              : null,
          size: size,
        };
        docs.forEach((doc) => {
          let _post = {
            id: doc.id,
            ...doc.data(),
          };
          //is_loading이 왜 있음?
          post_list.push(_post);
        });
        post_list.pop();
        dispatch(setPost(post_list, paging));
      });
    /*{
      postDB.get().then((docs) => {
      let post_list = [];
      docs.forEach((doc) => {
        let _post = {
          id: doc.id,
          ...doc.data(),
        };

        post_list.push(_post);
      });
      dispatch(setPost(post_list));
    });
    }*/
  };
};

export const getOnePostFB = (id) => {
  return function (dispatch, getState) {
    const postDB = firestore.collection("post");
    postDB
      .doc(id)
      .get()
      .then((doc) => {
        let _post = { id: doc.id, ...doc.data() };
        dispatch(setPost([_post]));
      });
  };
};

export const editPostFB = (post_id = null, post = {}) => {
  return function (dispatch, getState) {
    if (!post_id) {
      console.log("게시물 정보가 없군요");
      return;
    }

    const _image = getState().image.preview;
    const _post_idx = getState().post.list.findIndex((p) => p.id === post_id);
    const _post = getState().post.list[_post_idx];

    const postDB = firestore.collection("post");
    if (_image === _post.post_img) {
      postDB
        .doc(post_id)
        .update(post)
        .then((doc) => {
          dispatch(editPost(post_id, { ...post }));
          history.replace("/");
        });

      return;
    } else {
      const user_id = getState().auth.user.uid;
      const _upload = storage
        .ref(`images/${user_id}_${new Date().getTime()}`)
        .putString(_image, "data_url");
      _upload.then((snapshot) => {
        snapshot.ref
          .getDownloadURL()
          .then((url) => {
            return url;
          })
          .then((url) => {
            postDB
              .doc(post_id)
              .update({ ...post, post_img: url })
              .then((doc) => {
                dispatch(editPost(post_id, { ...post, post_img: url }));
                history.replace("/");
              });
          })
          .catch((err) => {
            window.alert("앗! 이미지 업로드에 문제가 있어요!");
            console.log("앗! 이미지 업로드에 문제가 있어요!", err);
          });
      });
    }
  };
};

export const deletePostFB = (id) => {
  return function (dispatch, getState) {
    const post = firestore.collection("post");
    post.doc(id).delete();
    dispatch(deleteP(id));
    history.push("/");
  };
};

const initialPost = {
  is_loading: false,
  username: "",
  profile: "",
  post_text: "",
  post_img: "",
  like_count: "0",
  insert_dt: "",
  comment_count: "0",
  checked: {},
};

export const addPostFB = (post_text) => {
  return function (dispatch, getState) {
    const postDB = firestore.collection("post");
    const _user = getState().auth.user;
    const checkL = getState().post.checkL;
    const _post = {
      ...initialPost,
      user_id: _user.uid,
      profile: _user.user_profile,
      username: _user.name,
      post_text: post_text,
      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
      checkL: checkL,
      checked: { [_user.uid]: false },
    };
    const _image = getState().image.preview;

    const _upload = storage
      .ref(`images/${_user.uid}_${new Date().getTime()}`)
      .putString(_image, "data_url");
    _upload.then((snapshot) => {
      snapshot.ref
        .getDownloadURL()
        .then((url) => {
          return url;
        })
        .then((url) => {
          postDB
            .add({ ..._post, post_img: url })
            .then((doc) => {
              let post = { ..._post, id: doc.id, post_img: url };
              dispatch(addPost(post));
              history.replace("/");

              dispatch(setPreview(null));
            })
            .catch((err) => {
              window.alert("앗 ! 포스트 작성에 문제가 있어요!");
              console.log("post 작성에 실패했어요", err);
            });
        })
        .catch((err) => {
          window.alert("앗! 이미지 업로드에 문제가 있어요!");
          console.log("앗! 이미지 업로드에 문제가 있어요!", err);
        });
    });
  };
};

export const likeUpFB = (post_id, user_uid) => {
  return function (dispatch, getState) {
    let post_list = getState().post.list;
    let idx = post_list.findIndex((p) => p.id === post_id);
    let post = post_list[idx];

    const postDB = firestore.collection("post");
    const increment = firebase.firestore.FieldValue.increment(1);
    postDB
      .doc(post_id)
      .update({
        like_count: increment,
        checked: { ...post.checked, [user_uid]: true },
      })
      .then((_post) => {
        dispatch(likeUp(post_id, user_uid));
      });
  };
};

export const deLikeFB = (post_id, user_uid) => {
  return function (dispatch, getState) {
    let post_list = getState().post.list;
    let idx = post_list.findIndex((p) => p.id === post_id);
    let post = post_list[idx];

    const postDB = firestore.collection("post");
    const increment = firebase.firestore.FieldValue.increment(-1);
    postDB
      .doc(post_id)
      .update({
        like_count: increment,
        checked: { ...post.checked, [user_uid]: false },
      })
      .then((_post) => {
        dispatch(deLike(post_id, user_uid));
      });
  };
};

const initialState = {
  list: [],
  paging: { start: null, next: null, size: 3 },
  is_loading: false,
};

const post = handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.post_list);

        draft.list = draft.list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.id === cur.id) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.id === cur.id)] = cur;
            return acc;
          }
        }, []);

        if (action.payload.paging) {
          draft.paging = action.payload.paging;
        }
        draft.is_loading = false;
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),

    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
      }),

    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
    [DELETE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.filter((a) => {
          return a.id !== action.payload.post_id;
        });
      }),
    [CHECK_LAYOUT]: (state, action) =>
      produce(state, (draft) => {
        draft.checkL = action.payload.check_value;
      }),
    [LIKE_UP]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
        draft.list[idx].like_count = Number(draft.list[idx].like_count) + 1;
        draft.list[idx].checked = {
          ...draft.list[idx].checked,
          [action.payload.user_id]: true,
        };
      }),
    [DELIKE]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
        draft.list[idx].like_count = Number(draft.list[idx].like_count) - 1;
        draft.list[idx].checked = {
          ...draft.list[idx].checked,
          [action.payload.user_id]: false,
        };
      }),
  },
  initialState
);

export default post;
