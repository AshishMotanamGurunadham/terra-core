import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Table.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The child content for the table consisting of either a TableHeader and/or a TableBody.
   */
  children: PropTypes.node.isRequired,
  /**
   * Whether or not the rows should be zebra striped.
   */
  disableStripes: PropTypes.bool,
  /**
   * Indicates the desired divider styles to apply to a row and its children.
   * One of `'none'`, `'standard'`, `'compact'`.
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
};

const defaultProps = {
  disableStripes: false,
  paddingStyle: 'none',
};

const Table = ({
  children,
  disableStripes,
  paddingStyle,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const tableClassNames = classNames(
    cx(
      'table',
      { striped: !disableStripes },
      { 'padding-standard': paddingStyle === 'standard' },
      { 'padding-compact': paddingStyle === 'compact' },
      theme.className,
    ),
    customProps.className,
  );

  return (
    <table
      {...customProps}
      className={tableClassNames}
    >
      {children}
    </table>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
