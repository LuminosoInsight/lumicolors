import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import Modal from "react-modal";

Modal.setAppElement("#root");

const outputTypes = {
  SASS: "SASS",
  STYL: "STYL",
  LESS: "LESS",
  CSS: "CSS",
  JS: "JS"
};

class CodeOutput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      outputType: outputTypes.SASS
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeOutputType = this.changeOutputType.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  changeOutputType(e) {
    this.setState({ outputType: e.target.value });
  }

  render() {
    const modalStyles = {
      content: {
        width: "400px",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
      }
    };

    const closeButtonStyles = {
      position: "absolute",
      top: "1rem",
      right: "1rem"
    };

    let getSass = () => {
      let code = `// Sass color variables\n`;
      _.each(this.props.colors, color => {
        code += `// Shades of ${color.name}\n`;
        _.each(color.swatches, swatch => {
          code += `$${swatch.name}: ${swatch.hex};\n`;
        });
      });
      return code;
    };

    let getStylus = () => {
      let code = `// Stylus color variables\n`;
      _.each(this.props.colors, color => {
        code += `\n// Shades of ${color.name}\n`;
        _.each(color.swatches, swatch => {
          code += `${swatch.name} = ${swatch.hex}\n`;
        });
      });
      return code;
    };

    let getLess = () => {
      let code = `// Less color variables\n`;
      _.each(this.props.colors, color => {
        code += `\n// Shades of ${color.name}\n`;
        _.each(color.swatches, swatch => {
          code += `@${swatch.name}: ${swatch.hex};\n`;
        });
      });
      return code;
    };

    let getCss = () => {
      let code = `// CSS color variables\n`;
      code += `:root {\n`;
      _.each(this.props.colors, color => {
        code += `\n  /* Shades of ${color.name} */\n`;
        _.each(color.swatches, swatch => {
          code += `  --${swatch.name}: ${swatch.hex};\n`;
        });
      });
      code += `}\n`;
      return code;
    };

    let getJavascript = () => {
      let code = `// JS color variables\n`;
      code += `const colorPalette = {\n`;
      _.each(this.props.colors, color => {
        code += `\n  // Shades of ${color.name}\n`;
        _.each(color.swatches, swatch => {
          code += `  ${swatch.name}: ${swatch.hex},\n`;
        });
      });
      code += `};`;
      return code;
    };

    let getCode = () => {
      switch (this.state.outputType) {
        case outputTypes.SASS:
          return getSass();

        case outputTypes.STYL:
          return getStylus();

        case outputTypes.LESS:
          return getLess();

        case outputTypes.CSS:
          return getCss();

        case outputTypes.JS:
          return getJavascript();

        default:
          return null;
      }
    };

    let copyCode = () => {
      let codeTextArea = document.getElementById("code-output__textarea");
      codeTextArea.select();
      document.execCommand("copy");
    };

    return (
      <div className="code-output">
        <button onClick={this.openModal}>Get code</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          style={modalStyles}
          onRequestClose={this.closeModal}
        >
          <div>
            <button onClick={this.closeModal} style={closeButtonStyles}>
              Close
            </button>
          </div>
          <div>
            <select
              value={this.state.outputType}
              onChange={this.changeOutputType}
            >
              <option value={outputTypes.SASS}>Sass</option>
              <option value={outputTypes.STYL}>Stylus</option>
              <option value={outputTypes.LESS}>Less</option>
              <option value={outputTypes.CSS}>CSS</option>
              <option value={outputTypes.JS}>Javascript</option>
            </select>
          </div>
          <div>
            <p>{this.state.outputType} variables</p>
            <textarea
              id="code-output__textarea"
              style={{ width: "100%", height: "200px" }}
              value={getCode()}
              readOnly
            />
            <button onClick={copyCode}>Copy to clipboard</button>
          </div>
        </Modal>
      </div>
    );
  }
}

CodeOutput.propTypes = {
  colors: PropTypes.object.isRequired
};

export default CodeOutput;
