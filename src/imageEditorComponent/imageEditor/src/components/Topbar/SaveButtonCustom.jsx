import React, { useCallback, useContext, useEffect, useRef, useState, memo } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { EditorContext } from '../../../../../imageEditorComponent'


function VscSaveAll(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" {...props}><path d="M14.85 2.65l-1.5-1.5L13 1H4.48l-.5.5V4H1.5l-.5.5v10l.5.5h10l.5-.5V12h2.5l.5-.5V3l-.15-.35zM11 14H2V5h1v3.07h6V5h.79L11 6.21V14zM6 7V5h2v2H6zm8 4h-2V6l-.15-.35-1.5-1.5L10 4H5V2h7.81l1.21 1.21L14 11z" /></svg>;
}
function RiImageAddFill(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#8CBCD6" d="M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"></path><circle fill="#B3DDF5" cx="35" cy="16" r="3"></circle><polygon fill="#9AC9E3" points="20,16 9,32 31,32"></polygon><polygon fill="#B3DDF5" points="31,22 23,32 39,32"></polygon><circle fill="#43A047" cx="38" cy="38" r="10"></circle><g fill="#fff"><rect x="36" y="32" width="4" height="12"></rect><rect x="32" y="36" width="12" height="4"></rect></g></svg>;
}
function ImFilePicture(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#8CBCD6" d="M31,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v17C44,35.2,38.2,41,31,41z"></path><circle fill="#B3DDF5" cx="35" cy="16" r="3"></circle><polygon fill="#9AC9E3" points="20,16 9,32 31,32"></polygon><polygon fill="#B3DDF5" points="31,22 23,32 39,32"></polygon><path fill="#E57373" d="M47.7,29.1l-2.8-2.8c-0.4-0.4-1.1-0.4-1.6,0L42,27.6l4.4,4.4l1.3-1.3C48.1,30.3,48.1,29.6,47.7,29.1z"></path><rect x="27.1" y="35.1" transform="matrix(.707 -.707 .707 .707 -16.508 36.511)" fill="#FF9800" width="17.4" height="6.2"></rect><rect x="41.5" y="27.8" transform="matrix(-.707 .707 -.707 -.707 95.395 22.352)" fill="#B0BEC5" width="3.1" height="6.2"></rect><polygon fill="#FFC107" points="27.5,42.2 26,48 31.8,46.5"></polygon><polygon fill="#37474F" points="26.7,45 26,48 29,47.3"></polygon></svg>;
}

function FcImageFile(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#8cbcd6" d="M 40 42.6 H 8 c -2.2 0 -4 -1.9 -4 -4.2 V 11.2 c 0 -2.3 1.8 -4.2 4 -4.2 h 32 c 2.2 0 4 1.9 4 4.2 v 27.2 C 44 40.7 42.2 42.6 40 42.6 z"></path><circle fill="#b3ddf5" cx="35" cy="16" r="3"></circle><polygon fill="#9ac9e3" points="20,16 9,32 31,32"></polygon><polygon fill="#b3ddf5" points="31,22 23,32 39,32"></polygon><text x="18.3" y="44.3" textLength="28.2" fontSize="30.2" fill="rgb(255, 255, 255)">
    📲</text>
  </svg>;
}

function GoDesktopDownload(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#8cbcd6" d="M 40 41 H 8 c -2.2 0 -4 -1.8 -4 -4 V 11 c 0 -2.2 1.8 -4 4 -4 h 32 c 2.2 0 4 1.8 4 4 v 26 C 44 39.2 42.2 41 40 41 z"></path><circle fill="#b3ddf5" cx="35" cy="16" r="3"></circle><polygon fill="#9ac9e3" points="20,16 9,32 31,32"></polygon><polygon fill="#b3ddf5" points="31,22 23,32 39,32"></polygon><text x="24.8" y="43.8" textLength="28.2" fontSize="23.3" fill="rgb(255, 255, 255)">
    ⤵️</text>
  </svg>;

}

function SaveButtonCustom() {
  const { setCurrentAction, editorConfigContext, activeTemplateContext } = useContext(EditorContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showSaveActionModal, setShowSaveActionModal] = useState(false);

  const handleSaveClick = (action) => {
    if (action) {
      setCurrentAction({ type: 'save', action });
      setAnchorEl(null);
      setShowSaveActionModal(false);
    }
  }

  return (
    <div className="save-btn-wrap">
      <div className='btn'
        id="save-btn"
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
          setShowSaveActionModal(true);
        }}>
        <div className="text">Save Image</div>
        <div className="icon"><VscSaveAll /></div>
      </div>
      <Menu
        className='menu-item-wrap'
        id="save-menu"
        anchorEl={anchorEl}
        open={showSaveActionModal}
        onClose={() => {
          setAnchorEl(null);
          setShowSaveActionModal(false);
        }}
        MenuListProps={{ 'aria-labelledby': 'save-btn' }}>
        <MenuItem id="add" className='menu-item' onClick={() => handleSaveClick('add')}>
          <div className="icon"><RiImageAddFill /></div>
          <div className="text">Save as new template</div>
        </MenuItem>
        {(editorConfigContext?.tenantId == 0 ? true : activeTemplateContext?.tenantId != 0) && <MenuItem id="update" className='menu-item' onClick={() => handleSaveClick('update')}>
          <div className="icon"><ImFilePicture /></div>
          <div className="text">Update selected template</div>
        </MenuItem>}
        {editorConfigContext?.tenantId != 0 && <MenuItem id="download" className='menu-item' onClick={() => handleSaveClick('submit')}>
          <div className="icon"><FcImageFile /></div>
          <div className="text">Submit Banner Image</div>
        </MenuItem>}
        <MenuItem id="download" className='menu-item' onClick={() => handleSaveClick('download')}>
          <div className="icon"><GoDesktopDownload /></div>
          <div className="text">Download</div>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default SaveButtonCustom