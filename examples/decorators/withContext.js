
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

function withContext(ComposedComponent) {
  return class WithContext extends Component {

    // static propTypes = {
    //   context: PropTypes.shape({
    //     onInsertCss: PropTypes.func,
    //     onSetTitle: PropTypes.func,
    //     onSetMeta: PropTypes.func,
    //     onPageNotFound: PropTypes.func,
    //   }),
    // };

    // static childContextTypes = {
    //   onInsertCss: PropTypes.func.isRequired,
    //   onSetTitle: PropTypes.func.isRequired,
    //   onSetMeta: PropTypes.func.isRequired,
    //   onPageNotFound: PropTypes.func.isRequired,
    // };

    getChildContext() {
      const context = this.props.context;
      return {
        onInsertCss: context.onInsertCss || function onInsertCss() {},
        onSetTitle: context.onSetTitle || function onSetTitle() {},
        onSetMeta: context.onSetMeta || function onSetMeta() {},
        onPageNotFound: context.onPageNotFound || function onPageNotFound() {},
      };
    }

    render() {
      const { context, ...other } = this.props;
      return <ComposedComponent {...other} />;
    }

  };
}

export default withContext;
