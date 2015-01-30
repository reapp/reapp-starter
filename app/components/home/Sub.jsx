import React from 'react';
import View from 'reapp-ui/views/View';

export default React.createClass({
  render() {
    return (
      <View {..this.props} title="Sub Route">
        <p>I'm the sub route!</p>
      </View>
    );
  }
});