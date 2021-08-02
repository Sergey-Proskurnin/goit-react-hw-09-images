import React from 'react';
import { useEffect, useContext, useCallback } from 'react';
import contextProps from 'context/context';
import PropTypes from 'prop-types';

import s from './Modal.module.css';

const Modal = ({ onCloseModal }) => {
  const { modalImg, modalAlt } = useContext(contextProps);

  const onKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        onCloseModal(e);
      }
    },
    [onCloseModal],
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <div onClick={onCloseModal} className={s.Overlay}>
      <div className={s.Modal}>
        <img src={modalImg} alt={modalAlt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func,
};
export default Modal;

// class Modal extends Component {
//   static propTypes = {
//     onCloseModal: PropTypes.func.isRequired,
//     modalImg: PropTypes.string.isRequired,
//     modalAlt: PropTypes.string.isRequired,
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.onKeyDown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onKeyDown);
//   }

//   onKeyDown = e => {
//     if (e.key === 'Escape') {
//       this.props.onCloseModal(e);
//     }
//   };

//   render() {
//     return (
//       <div onClick={this.props.onCloseModal} className={s.Overlay}>
//         <div className={s.Modal}>
//           <img src={this.props.modalImg} alt={this.props.modalAlt} />
//         </div>
//       </div>
//     );
//   }
// }
// Modal.propTypes = {
//   onKeyDown: PropTypes.func,
// };
// export default Modal;
