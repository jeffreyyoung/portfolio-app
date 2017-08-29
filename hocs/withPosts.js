import React from 'react';
const posts = require('./posts.js');

export default function withSubscription(WrappedComponent, selectData) {
  return class extends React.Component {
    render() {
			console.log(posts);
      return <WrappedComponent posts={posts} {...this.props} />;
    }
  };
}