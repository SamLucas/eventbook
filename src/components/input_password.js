import React, { Component } from "react";

// import icons
import { FaRegEye } from "react-icons/fa";

class InputPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    return (
      <div>
        <input type={this.state.hidden ? "password" : "text"} />
        <FaRegEye
          className="icon"
          onMouseDown={this.toggleShow}
          onMouseUp={this.toggleShow}
          style={{ opacity: 0.6 }}
        />
      </div>
    );
  }
}

export default InputPassword;
