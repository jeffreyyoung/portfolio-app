import React from 'react';
import newPostStore from './../models/NewPostStore';
import {observer} from 'mobx-react';
export default function withStore(WrappedComponent, selectData) {
  return class extends React.Component {
    render() {
			const store = {newPost:newPostStore};
      return <WrappedComponent store={store} {...this.props} />;
    }
  };
}