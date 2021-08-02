import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './Modal.module.css';

class Modal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    modalImg: PropTypes.string.isRequired,
    modalAlt: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onCloseModal(e);
    }
  };

  render() {
    return (
      <div onClick={this.props.onCloseModal} className={s.Overlay}>
        <div className={s.Modal}>
          <img src={this.props.modalImg} alt={this.props.modalAlt} />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  onKeyDown: PropTypes.func,
};
export default Modal;
