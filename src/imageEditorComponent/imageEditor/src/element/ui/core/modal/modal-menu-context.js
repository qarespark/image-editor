import * as React from 'react';
var ModalMenuContext = React.createContext({
  modalOpened: false
});

if (process.env.NODE_ENV !== 'production') {
  ModalMenuContext.displayName = 'ModalMenuContext';
}

export default ModalMenuContext;