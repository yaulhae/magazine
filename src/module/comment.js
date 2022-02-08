import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore, realtime } from "../firebase";
import "moment";
import moment from "moment";
import firebase from "firebase/compat/app";
import { editPost } from "./post";

const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";

const LOADING = "LOADING";

const setComment = createAction(SET_COMMENT, (post_id, comment_list) => ({
  post_id,
  comment_list,
}));
const addComment = createAction(ADD_COMMENT, (post_id, comment) => ({
  post_id,
  comment,
}));

const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: {},
  is_loading: false,
};

export const addCommentFB = (post_id, contents) => {
  return function (dispatch, getState) {
    const commentDB = firestore.collection("comment");
    const user_info = getState().auth.user;

    let comment = {
      post_id: post_id,
      user_id: user_info.uid,
      user_name: user_info.name,
      user_profile: user_info.user_profile,
      contents: contents,
      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    commentDB.add(comment).then((doc) => {
      const postDB = firestore.collection("post");

      const post = getState().post.list.find((l) => l.id === post_id);

      const increment = firebase.firestore.FieldValue.increment(1);
      comment = { ...comment, id: doc.id };
      postDB
        .doc(post_id)
        .update({ comment_count: increment })
        .then((_post) => {
          dispatch(addComment(post_id, comment));
          if (post) {
            dispatch(
              editPost(post_id, {
                comment_count: parseInt(post.comment_count) + 1,
              })
            );
            const _noti_item = realtime.ref(`noti/${post.user_id}/list`).push();
            console.log(post);
            console.log(comment);
            _noti_item.set(
              {
                post_id: post.id,
                user_name: comment.user_name,
                image_url: post.post_img,
                insert_dt: comment.insert_dt,
              },
              (err) => {
                if (err) {
                  console.log("알림 저장에 실패했어요!");
                } else {
                  const notiDB = realtime.ref(`noti/${post.user_id}`);

                  notiDB.update({ read: false });
                }
              }
            );
            //notiDB.update({ read: false });
          }
        });
    });
  };
};

export const getCommentFB = (post_id = null) => {
  return function (dispatch, getState) {
    if (!post_id) {
      return;
    }
    const commentDB = firestore.collection("comment");
    commentDB
      .where("post_id", "==", post_id)
      .orderBy("insert_dt", "desc")
      .get()
      .then((docs) => {
        let list = [];
        docs.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        dispatch(setComment(post_id, list));
      })
      .catch((err) => {
        console.log("댓글 정보를 가져올 수가 없네요!", err);
      });
  };
};

export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.post_id] = action.payload.comment_list;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.post_id].unshift(action.payload.comment);
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState
);

const actionCreators = {
  getCommentFB,
  setComment,
  addComment,
};

export { actionCreators };
