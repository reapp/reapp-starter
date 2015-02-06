import React from 'react';
import { RoutedViewListMixin } from 'reapp-routes/react-router';
import NestedViewList from 'reapp-ui/views/NestedViewList';
import View from 'reapp-ui/views/View';

export default React.createClass({
  mixins: [
    RoutedViewListMixin
  ],

  render() {
    return (
      <NestedViewList {...this.routedViewListProps()}>
        <View title={[this.props.handle, '{{reappName}}']}>
          <p>Hello, World!</p>
        </View>

        {this.childRouteHandler()}
      </NestedViewList>
    );
  }
});