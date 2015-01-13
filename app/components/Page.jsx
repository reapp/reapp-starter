import React from 'react';
import { RoutedViewListMixin } from 'reapp-platform';
import NestedViewList from 'reapp-ui/views/NestedViewList';
import View from 'reapp-ui/views/View';

export default React.createClass({
  mixins: [
    RoutedViewListMixin
  ],

  render() {
    return (
      <NestedViewList {...this.routedViewListProps()}>
        <View title={[this.props.handle, 'Kitchen Sink']}>
          <p>Hello, World!</p>
        </View>

        {this.routedSubRoute()}
      </NestedViewList>
    );
  }
});