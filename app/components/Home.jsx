import React from 'react';
import { RoutedViewListMixin } from 'reapp-routes/react-router';
import NestedViewList from 'reapp-ui/views/NestedViewList';
import View from 'reapp-ui/views/View';
import Button from 'reapp-ui/components/Button';

export default React.createClass({
  mixins: [
    RoutedViewListMixin
  ],

  render() {
    return (
      <NestedViewList {...this.routedViewListProps()}>
        <View title={[this.props.handle, '{{reappName}}']}>
          <p>Hello, World!</p>

          <Button onTap={() => this.transitionTo('sub')}>Go to sub view</Button>
        </View>

        {this.childRouteHandler()}
      </NestedViewList>
    );
  }
});