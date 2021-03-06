import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Panel extends PureComponent {
  render() {
    const { prefixCls, className, theme, children, ...others } = this.props;

    const cls = classnames({
      [`${prefixCls}`]: true,
      [className]: !!className,
      [`theme-${theme}`]: !!theme,
    });

    return <div {...others} className={cls}>{children}</div>;
  }
}

Panel.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['default', 'primary', 'info', 'success', 'warning', 'error']),
};

Panel.defaultProps = {
  prefixCls: 'za-panel',
  className: null,
  theme: null,
};

export default Panel;
