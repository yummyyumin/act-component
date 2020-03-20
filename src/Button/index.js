import React, { Component } from 'react';
import './index.less';

class Button extends Component {
  render() {
    return (
      <div className='bg-btn'>
        <h2>这是Button组件</h2>
      </div>
    );
  }
}

// Button.propTypes = {
//   children: PropTypes.string,
//   onClick: PropTypes.func,
//   disabled: PropTypes.bool,
// }
// Button.defaultProps = {
//   children:"Button",
//   onClick: () => {return null},
//   disabled : false,
// }

export default Button;
