import * as React from 'react';
var TableContext = React.createContext({
  padding: 'default',
  size: 'meduim'
});

if (process.env.NODE_ENV !== 'production') {
  TableContext.displayName = 'TableContext';
}

export default TableContext;