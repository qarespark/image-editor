import React, { useCallback, useContext, useEffect, useRef, useState, memo } from 'react';
import Backdrop from '@mui/material/Backdrop';
import ImageEditor, { TOOLS, TABS } from "./imageEditor/src"
import { Menu, MenuItem } from '@mui/material';
import initialBg from './initialBG';
import textStyles, { Headings } from './textStyles';
import BACKGROUND from './bg';
import axios from "axios";
import './editor.scss';
import waterMarks from './waterMarks';
import HiddenUploadInput from './imageEditor/src/components/common/HiddenUploadInput';
import Compressor from 'compressorjs';
import ImageCropper from './imageCropper';
import Spinner from './imageEditor/src/components/common/Spinner';
import EditorGuide from './editorGuide';
import { EditorContext } from '.';

function AiOutlineCloseCircle(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>;
}

function RiImageAddFill(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#8CBCD6" d="M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"></path><circle fill="#B3DDF5" cx="35" cy="16" r="3"></circle><polygon fill="#9AC9E3" points="20,16 9,32 31,32"></polygon><polygon fill="#B3DDF5" points="31,22 23,32 39,32"></polygon><circle fill="#43A047" cx="38" cy="38" r="10"></circle><g fill="#fff"><rect x="36" y="32" width="4" height="12"></rect><rect x="32" y="36" width="12" height="4"></rect></g></svg>;
}

function RiImageEditFill(props) {
    return <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7 7C5.34315 7 4 8.34315 4 10C4 11.6569 5.34315 13 7 13C8.65685 13 10 11.6569 10 10C10 8.34315 8.65685 7 7 7ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM21 5H3C2.44772 5 2 5.44772 2 6V18C2 18.5523 2.44772 19 3 19H7.31374L14.1924 12.1214C15.364 10.9498 17.2635 10.9498 18.435 12.1214L22 15.6863V6C22 5.44772 21.5523 5 21 5ZM21 19H10.1422L15.6066 13.5356C15.9971 13.145 16.6303 13.145 17.0208 13.5356L21.907 18.4217C21.7479 18.7633 21.4016 19 21 19Z" fill="currentColor"></path></svg>;
}

function VscSaveAll(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" {...props}><path d="M14.85 2.65l-1.5-1.5L13 1H4.48l-.5.5V4H1.5l-.5.5v10l.5.5h10l.5-.5V12h2.5l.5-.5V3l-.15-.35zM11 14H2V5h1v3.07h6V5h.79L11 6.21V14zM6 7V5h2v2H6zm8 4h-2V6l-.15-.35-1.5-1.5L10 4H5V2h7.81l1.21 1.21L14 11z" /></svg>;
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

function RiExchangeLine(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><g><path fill="none" d="M0 0h24v24H0z" /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-7h9v2h-4v3l-5-5zm5-4V6l5 5H8V9h4z" /></g></svg>;
}

function RiAddCircleLine(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><g><path fill="none" d="M0 0h24v24H0z" /><path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" /></g></svg>;
}

function FaCrown(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" height="1em" width="1em" {...props}><path d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z" /></svg>;
}

function BsInfoCircle(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" {...props}><path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" /><path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" /><circle cx={8} cy={4.5} r={1} /></svg>;
}

function RiImageEditLine(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0H24V24H0z"></path><path d="M20 3c.552 0 1 .448 1 1v1.757l-2 2V5H5v8.1l4-4 4.328 4.329-1.327 1.327-.006 4.239 4.246.006 1.33-1.33L18.899 19H19v-2.758l2-2V20c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h16zm1.778 4.808l1.414 1.414L15.414 17l-1.416-.002.002-1.412 7.778-7.778zM15.5 7c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S14 9.328 14 8.5 14.672 7 15.5 7z"></path></g></svg>;
}

function IoIosImages(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" {...props}><path d="M262.3 199.2c-1.6-2.8-5.6-3.2-7.7-.7l-91.9 122.2c-2.5 2.9-.6 7.4 3.2 7.7l161.1 14c3.8.3 6.4-3.8 4.5-7.1l-69.2-136.1zM367.2 264.1c-1.6-2.8-5.6-3.2-7.7-.7l-24.8 25.1a4.68 4.68 0 0 0-.5 5.4l25.4 49.5c.8 1.3 2.1 2.2 3.7 2.3l44.9 3.9c3.8.3 6.4-3.8 4.5-7.1l-45.5-78.4zM378.1 224.4c11.2-.1 20.9-8.3 23-19.2 2.8-14.8-8.6-28.3-23.7-28.1-11.2.1-20.9 8.3-23 19.2-2.8 14.8 8.6 28.3 23.7 28.1z" /><path d="M455.2 129.3l-65.8-5.7-6.1-67c-1.3-14.9-14.5-25.9-29.5-24.5L56.7 58.9c-14.9 1.3-25.9 14.5-24.6 29.4l26.8 296.5c1.3 14.9 14.5 25.9 29.5 24.5l15.7-1.4-1.5 16.7c-1.3 14.9 9.7 28 24.7 29.3l297.3 25.9c14.9 1.3 28.1-9.7 29.4-24.6l26-296.6c1.2-14.8-9.8-28-24.8-29.3zM87.6 300.7c-3.7.3-7-2.4-7.4-6.1l-18-200c-.3-3.7 2.4-7 6.1-7.3l279.2-25.1c3.7-.3 7 2.4 7.4 6.1l4.8 52.8L158 103.4c-14.9-1.3-28.1 9.7-29.4 24.6l-14.9 170.3-26.1 2.4zm362.2-135.6l-17.5 200c-.3 3.7-3.6 6.5-7.3 6.2l-18.6-1.6L145.7 347c-3.7-.3-6.5-3.6-6.2-7.3l3.8-43.9L157 139.7c.3-3.7 3.6-6.5 7.3-6.2l198 17.3 29.7 2.6 51.6 4.5c3.8.2 6.6 3.5 6.2 7.2z" /></svg>;
}

function BsFillImageFill(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" {...props}><path fillRule="evenodd" d="M.002 3a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2h-12a2 2 0 01-2-2V3zm1 9l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71a.5.5 0 01.577-.094L15.002 9.5V13a1 1 0 01-1 1h-12a1 1 0 01-1-1v-1zm5-6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clipRule="evenodd" /></svg>;
}

function BiImages(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><path d="M20,2H8C6.897,2,6,2.897,6,4v12c0,1.103,0.897,2,2,2h12c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M8,16V4h12 l0.002,12H8z" /><path d="M4,8H2v12c0,1.103,0.897,2,2,2h12v-2H4V8z" /><path d="M12 12L11 11 9 14 19 14 15 8z" /></svg>;
}

function RiPictureInPicture2Fill(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><g><path fill="none" d="M0 0h24v24H0z" /><path fillRule="nonzero" d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8zM6.707 6.293l2.25 2.25L11 6.5V12H5.5l2.043-2.043-2.25-2.25 1.414-1.414z" /></g></svg>;
}

function MdBrandingWatermark(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M553.1 509.1l-77.8 99.2-41.1-52.4a8 8 0 0 0-12.6 0l-99.8 127.2a7.98 7.98 0 0 0 6.3 12.9H696c6.7 0 10.4-7.7 6.3-12.9l-136.5-174a8.1 8.1 0 0 0-12.7 0zM360 442a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm494.6-153.4L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z"></path></svg>;
}

function BsTextareaT(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" {...props}><path fillRule="evenodd" d="M14 9a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zM2 9a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /><path fillRule="evenodd" d="M1.5 2.5A1.5 1.5 0 013 1h10a1.5 1.5 0 011.5 1.5v4h-1v-4A.5.5 0 0013 2H3a.5.5 0 00-.5.5v4h-1v-4zm1 7v4a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-4h1v4A1.5 1.5 0 0113 15H3a1.5 1.5 0 01-1.5-1.5v-4h1z" clipRule="evenodd" /><path d="M11.434 4H4.566L4.5 5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 1.496h.386L11.434 4z" /></svg>;
}

function RiImageAddFill2(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><g><path fill="none" d="M0 0h24v24H0z" /><path d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993v9.349A5.99 5.99 0 0 0 20 13V5H4l.001 14 9.292-9.293a.999.999 0 0 1 1.32-.084l.093.085 3.546 3.55a6.003 6.003 0 0 0-3.91 7.743L2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" /></g></svg>;
}

const defaultConfig: any = {
    tenantId: '',
    storeId: '',
    type: '',
    height: '',
    width: '',
    aspectRatio: '',
    group: '',
    from: '',
    baseURL: '',
    log: "https://pcs-s3.s3.ap-south-1.amazonaws.com/3/logo/2022-09-15T14%3A57%3A13.639213_slider.png",
}

function Editor({ props }: any = {}) {
    const [showEditor, setShowEditor] = useState(true);
    const [bgImage, setBgImage] = useState<any>(initialBg);
    const [resparkTemplates, setResparkTemplates] = useState<any[]>([]);
    const [templatesList, setTemplatesList] = useState<any[]>([]);
    const [activeTemplate, setActiveTemplate] = useState<any>(null);
    const [showBgImages, setShowBgImages] = useState(false)
    const [showTemplates, setshowTemplates] = useState(true)
    const [oldBgImage, setOldBgImage] = useState(initialBg);
    const [savedTemplatesHeight, setSavedTemplatesListHeight] = useState('50vh');
    // const [bgImages, setBgImages] = useState<any>(bgImagesList); //used for collecting base64 urls of images
    const bgImageModalRef = useRef<any>(null);
    const testStyleModalRef = useRef<any>(null);
    const bgModalRef = useRef<any>(null);
    const editorWrapRef = useRef<any>(null);
    const cropperRef = useRef<any>(null);
    const [showTemplateChangeConfirmation, setShowTemplateChangeConfirmation] = useState({ active: false, template: {}, userAgreeToChange: false });
    const [showTemplateDeleteConfirmation, setShowTemplateDeleteConfirmation] = useState<any>({ active: false, template: {}, userAgreeToChange: false, templateIndex: null });
    const uploadImgsInput = useRef();
    const [activeBgImgCategory, setActiveBgImgCategory] = useState('All');
    const [showAddTextModal, setShowAddTextModal] = useState(false);
    const [editorConfig, setEditorConfig] = useState<any>(defaultConfig);
    const editedImage = useRef<(imageFileInfo?: object, pixelRatio?: boolean, keepLoadingSpinnerShown?: boolean) => { imageData: object; designState: object; hideLoadingSpinner: (...args: any[]) => any }>();
    const [showCropper, setShowCropper] = useState({ active: false, img: '' });
    const [parentConfigMesg, setParentConfigMesg] = useState(defaultConfig);
    const { currentTab, currentId, currentAction, setCurrentAction, setActiveTemplateContext, setCurrentId, setEditorConfigContext } = useContext(EditorContext);
    const [waterMarks, setWaterMarks] = useState('');

    // const { dispatch, tabId }: any = useStore();
    useEffect(() => {
        setshowTemplates(false);
        setShowBgImages(false);
        setShowAddTextModal(false);
        if (currentTab == TABS.BACKGROUND) {
            setShowBgImages(true);
        } else if (currentTab == TABS.TEMPLATE) {
            setShowBgImages(false);
            setshowTemplates(true);
        }
    }, [currentTab, currentId])

    useEffect(() => {
        if (currentAction?.type == 'save' && currentAction?.action) handleSaveButtonClick(currentAction?.action);
    }, [currentAction])


    useEffect(() => {
        if (currentId == TOOLS.TEXT) {
            setShowAddTextModal(true);
        }
    }, [currentId])

    useEffect(() => {
        if (!showAddTextModal) setCurrentId('');
    }, [showAddTextModal])

    useEffect(() => {
        if (window.location.ancestorOrigins.length) {//this means editor opens in iframe
            window.parent.postMessage({ type: 'Editor Mounted', data: 'true' }, window.location.ancestorOrigins[0]);
            // console.log("message sent")
            window.addEventListener('message', function (e) {
                if (e.data.type == 'Editor Config') {
                    // console.log("message for child", e)
                    setParentConfigMesg(e.data.data);
                }
            });
        } else {
            const config = sessionStorage.getItem('editor__config');
            if (config) {
                setParentConfigMesg(JSON.parse(config));
            } else setParentConfigMesg({
                tenantId: 0,
                storeId: 0,
                type: 'small_banner',
                height: 284,
                width: 413,
                aspectRatio: 1.4,
                group: 'both',
                from: 'Slider',
                title: "Update slider banner!",
                baseURL: "https://qa.respark.in:8082/pcs-catalog/v1/template",
                logo: defaultConfig.logo,
            });
        }
    }, [])

    useEffect(() => {
        if (parentConfigMesg && parentConfigMesg.type) {
            const config = parentConfigMesg;
            if (window.location.search) {
                let params = new URLSearchParams(window.location.search);
                if (params.get('env') == 'prod') {
                    config.baseURL = "https://prod.respark.in:8082/pcs-catalog/v1/template";
                } else {
                    config.baseURL = "https://qa.respark.in:8082/pcs-catalog/v1/template";
                }
                if (params.get('t_id')) {
                    config.tenantId = params.get('t_id');
                }
                if (params.get('s_id')) {
                    config.storeId = params.get('s_id');
                }
                if (params.get('type')) {
                    config.type = params.get('type');
                }
                if (params.get('w')) {
                    config.width = Number(params.get('w'));
                }
                if (params.get('h')) {
                    config.height = Number(params.get('h'));
                }
                if (params.get('r')) {
                    config.aspectRatio = Number(params.get('r'));
                }
            }
            // console.log(config);
            setTimeout(() => {
                setEditorConfig(config)
            }, 1000);
            setActiveTemplate({ ...getEmptyTemplateObj() });
            setActiveTemplateContext({ ...getEmptyTemplateObj() });
            setBgImage(BACKGROUND['initial_bg'][config.type]);
            getTemplatesData(config)
            setEditorConfigContext(config)
            axios.get(`${config.baseURL}s/0/0/${config.type}`).then((templates: any) => {
                setResparkTemplates(templates.data.reverse())
            }).catch((e) => { });
        }
    }, [parentConfigMesg])

    function convert(oldImag: any, callback: any) {
        var img = new Image();
        img.onload = function () {
            callback(img)
        }
        img.setAttribute('crossorigin', 'anonymous');
        img.src = oldImag;
    }
    function getBase64Image(img: any, callback: any) {
        convert(img, function (newImg: any) {
            var canvas = document.createElement("canvas");
            canvas.width = newImg.width;
            canvas.height = newImg.height;
            var ctx: any = canvas.getContext("2d");
            ctx.drawImage(newImg, 0, 0);
            var base64 = canvas.toDataURL("image/png");
            callback(base64)
        })
    }
    useEffect(() => {
        if (!waterMarks && document.getElementById("client-logo") && editorConfig.type) {
            if (document.getElementById("client-logo")) {
                getBase64Image(editorConfig.logo, function (base64: any) {
                    setWaterMarks(base64)
                });
            }
        }
    }, [editorConfig])

    const getTemplatesData = (config: any) => {
        if (config.tenantId != 0) {
            axios.get(`${config.baseURL}s/${config.tenantId}/${config.storeId}/${config.type}`)
                .then((response: any) => {
                    setTemplatesList(response.data.reverse() || []);
                })
                .catch((e) => { });
        }
    }

    useEffect(() => {
        if (activeTemplate?.designState?.imgSrc) {
            setOldBgImage(activeTemplate?.designState?.imgSrc)
            setBgImage(activeTemplate?.designState?.imgSrc)
        }
        if (showEditor) {
            setShowEditor(false);
            setTimeout(() => setShowEditor(true))
        }
    }, [activeTemplate])

    const getEmptyTemplateObj = () => {
        return {
            "designState": {},
            "image": "",
            "index": 1,
            "active": true,
            "group": "both",
            "category": "",
            "storeId": editorConfig.storeId,
            "tenantId": editorConfig.tenantId,
            "type": editorConfig.type
        }
    }

    const onSelectTemplate = (template: any) => {
        if (template) {
            if (!activeTemplate.id || showTemplateChangeConfirmation.userAgreeToChange || activeTemplate.id == template.id) {
                setActiveTemplateContext({ ...template })
                setActiveTemplate({ ...template });
            } else {
                setShowTemplateChangeConfirmation({ ...showTemplateChangeConfirmation, template, active: true });
            }
        } else {
            setActiveTemplate({ ...getEmptyTemplateObj() });
            setActiveTemplateContext({ ...getEmptyTemplateObj() })
            setBgImage(initialBg);
        }
    }

    const replaceTemplate = () => {
        setActiveTemplateContext(showTemplateChangeConfirmation.template);
        setActiveTemplate(showTemplateChangeConfirmation.template);
        setShowTemplateChangeConfirmation({ ...showTemplateChangeConfirmation, active: false, template: {} })
    }

    const onChangeBg = (bgImage: any) => {
        if (bgImage) setBgImage(bgImage)
        else setBgImage(oldBgImage);
        // setShowBgImages(false)
    }

    const handleSaveButtonClick = (event: any) => {
        if (event) {
            if (event == 'add') {
                addNewTemplate();
            } else if (event == 'update') {
                updateTemplate();
            } else if (event == 'download') {
                downloadTemplate();
            } else if (event == 'submit') {
                onSubmitImage();
            }
            setCurrentAction(null);
        }
    };

    const addNewTemplate = () => {
        getEditorInstance().then((editorInstance: any) => {
            if (editorInstance.designState) {
                console.log("Success", "Image added successfully")
                const { designState, imageData } = editorInstance;
                const template: any = { ...getEmptyTemplateObj() };
                template.designState = { ...designState };
                template.image = imageData.imageBase64;
                axios.post(`${editorConfig.baseURL}s`, template).then((response: any) => {
                    setActiveTemplateContext({ ...response.data });
                    setActiveTemplate({ ...response.data });
                    if (editorConfig.tenantId == 0) {
                        const resparkTemplatesCopy: any = JSON.parse(JSON.stringify(resparkTemplates));
                        resparkTemplatesCopy.unshift(response.data);
                        setResparkTemplates(resparkTemplatesCopy);
                    } else {
                        const templatesListCopy: any = JSON.parse(JSON.stringify(templatesList));
                        templatesListCopy.unshift(response.data);
                        setTemplatesList(templatesListCopy);
                    }
                });
            }
        })
    }

    const updateTemplate = () => {
        getEditorInstance().then((editorInstance: any) => {
            if (editorInstance.designState && editorInstance.imageData) {
                console.log("Success", "Image updated successfully")
                const { designState, imageData } = editorInstance;
                const template = { ...activeTemplate }
                template.designState = { ...designState };
                template.image = imageData.imageBase64;
                axios.post(`${editorConfig.baseURL}s`, template).then((response: any) => {
                    setActiveTemplateContext({ ...response.data });
                    setActiveTemplate(response.data);
                    if (editorConfig.tenantId == 0) {
                        let tIndex = resparkTemplates.findIndex((t: any) => t.id == activeTemplate.id);
                        const resparkTemplatesCopy: any = JSON.parse(JSON.stringify(resparkTemplates));
                        resparkTemplatesCopy[tIndex] = response.data;
                        setResparkTemplates(resparkTemplatesCopy);
                    } else {
                        let tIndex = templatesList.findIndex((t: any) => t.id == activeTemplate.id);
                        const templatesListCopy: any = JSON.parse(JSON.stringify(templatesList));
                        templatesListCopy[tIndex] = response.data;
                        setTemplatesList(templatesListCopy);
                    }
                });

            }
        })
    }

    const onDeleteTemplateClick = (event: any, template: any, templateIndex: number) => {
        setShowTemplateDeleteConfirmation({ active: true, template, templateIndex });
        event.stopPropagation()
    }
    const deleteCustomerTemplate = () => {
        axios.delete(`${editorConfig.baseURL}/${showTemplateDeleteConfirmation.template.id}`).then((response: any) => {
            if (editorConfig.tenantId == 0) {
                const resparkTemplatesCopy: any = JSON.parse(JSON.stringify(resparkTemplates));
                resparkTemplatesCopy.splice(showTemplateDeleteConfirmation.templateIndex, 1);
                setResparkTemplates(resparkTemplatesCopy);
            } else {
                const templatesListCopy: any = JSON.parse(JSON.stringify(templatesList));
                templatesListCopy.splice(showTemplateDeleteConfirmation.templateIndex, 1);
                setTemplatesList(templatesListCopy);
            }
            setShowTemplateDeleteConfirmation({ active: false, template: null, templateIndex: null });
        });
    }

    const downloadTemplate = () => {
        getEditorInstance().then((editorInstance: any) => {
            if (editorInstance.designState && editorInstance.imageData) {
                const { imageData } = editorInstance;
                var a = document.createElement("a"); //Create <a>
                a.href = imageData.imageBase64; //Image Base64 Goes here
                a.download = "banner.png"; //File name Here
                a.click(); //Downloaded file
            }
            console.log("Success", "Image downloaded successfully")
        })
    }

    const onBgChangeActionSelect = (from: any) => {
        setOldBgImage(bgImage)
        if (from == 'self') uploadNewBgFromLocal();
        else if (from == 'gallery') setShowBgImages(true);
    };

    const uploadNewBgFromLocal = () => {
        let element: any = uploadImgsInput.current;
        element?.click();
    }

    const onUploadLocalBGImage = (e: any) => {
        if (e.target.files && e.target.files.length) {
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]); // read file as data url
            reader.onload = (event: any) => { // called once readAsDataURL is completed
                setShowCropper({ active: true, img: event.target!.result })
                // onChangeBg(event.target!.result);
            }
        }
    }

    const onCropSubmit = () => {
        const croppedImage = cropperRef.current.getCroppedImage();
        croppedImage.then((imgUrl) => {
            onChangeBg(imgUrl);
            setShowCropper({ active: false, img: "" });
        })
    }

    const onSelectBgImage = (url: any) => {

        // getBase64Image(url, function (base64: any) {
        //     setBgImage(base64)
        // });

        const toDataURL = url => fetch(url)
            .then(response => response.blob())
            .then(blob => new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.onloadend = () => resolve(reader.result)
                reader.onerror = reject
                reader.readAsDataURL(blob)
            }))
        toDataURL(url)
            .then(dataUrl => {
                setBgImage(dataUrl)
            })
    }

    const getEditorInstance = async () => {
        const { current: saveFunction } = editedImage;
        if (!saveFunction) return;
        const result = await saveFunction();
        return result;
    }

    const onOutsideClick = (event: any) => {
        if (event.target.classList.contains('text-type-modal')) {
            if (testStyleModalRef.current && !testStyleModalRef.current.contains(event.target)) {
                setShowAddTextModal(false);
                setCurrentId('')
            }
        } else {
            if (bgImageModalRef.current && !bgImageModalRef.current.contains(event.target)) {
                onChangeBg(null);
            }
        }
    }

    const onArrowClick = (action: any) => {
        if (action == 'left') {
            bgModalRef.current.scrollLeft -= 400
        } else {
            bgModalRef.current.scrollLeft += 400
        }
    }

    const multiFileToBase64 = (e: any) => {
        if (e.target.files) {
            const base64Images: any = [];
            const filesArray = Array.from(e.target.files);
            filesArray.map((file: any, i: number) => {
                if (file.type.startsWith('image/')) {
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = (event: any) => {
                        base64Images.push(event.target.result);
                        // base64Images.push(`aaa/${file.name}`);
                        if (i == filesArray.length - 1) {
                            console.log(base64Images)
                        }
                    };
                }
            });
        }
        e.target.value = '';
    }

    const uploadMultipleFilesToS3 = (e: any) => {
        if (e.target.files) {
            const uploadedImages: any = [];
            const filesArray = Array.from(e.target.files);
            filesArray.map((file: any, fileIndex: number) => {
                if (file.type.startsWith('image/')) {
                    const compressOptions = { quality: 1 }
                    new Compressor(file, {
                        ...compressOptions,
                        success(result: any) {
                            const formData = new FormData();
                            // The third parameter is required for server
                            formData.append('file', result, result.name);
                            formData.append("id", '0');
                            formData.append("type", 'promotions');
                            // Send the compressed image file to server with XMLHttpRequest.
                            axios.post('https://qa.respark.in:8082/pcs-catalog/v1/s3/uploadwithtype', formData).then((res: any) => {
                                uploadedImages.push(res.data)
                                if (uploadedImages.length == filesArray.length) {
                                    console.log(uploadedImages)
                                }
                            });
                        },
                        error(err) {
                            console.log(err.message);
                        },
                    });
                }
            })
        }
        e.target.value = '';
    }

    const textObj = {
        "fill": "black",
        "stroke": "#000000",
        "strokeWidth": 0,
        "shadowOffsetX": 0,
        "shadowOffsetY": 0,
        "shadowBlur": 0,
        "shadowColor": "#000000",
        "shadowOpacity": 1,
        "opacity": 1,
        "fontFamily": "Poppins",
        "letterSpacing": 0,
        "lineHeight": 1,
        "align": "left",
        "fontStyle": "normal",
        "name": "Text",
        "rotation": 0,
        "scaleX": 1,
        "scaleY": 1,
        "text": "Respark",
        "x": 50,
        "y": 40,
        "fontSize": 50,
        "width": 270,
        "height": 55
    }

    const addTextToEditorInstance = (style: any) => {
        getEditorInstance().then((editorInstance: any) => {
            if (editorInstance.designState && editorInstance.imageData) {
                const { designState, imageData } = editorInstance;
                const template = { ...activeTemplate }
                const textEle: any = {};
                let id: any = Date.now() * Math.random();
                const newTextId: any = `Text-${parseInt(id, 10)}`;
                textEle[newTextId] = {
                    ...textObj,
                    "id": newTextId,
                }
                textEle[newTextId] = { ...textEle[newTextId], ...style }
                designState.annotations = { ...designState.annotations, ...textEle }
                template.designState = { ...designState };
                template.image = imageData.imageBase64;
                setActiveTemplateContext(template);
                setActiveTemplate(template);
                setCurrentId('');
                setShowAddTextModal(false)
            }
        })
    }

    const getEditorInstanceInConsole = () => {
        getEditorInstance().then((editorInstance: any) => {
            console.log(editorInstance)
        })
    }

    const onSubmitImage = () => {
        getEditorInstance().then((editorInstance: any) => {
            if (editorInstance.designState) {
                const { imageData } = editorInstance;
                if (editorConfig.outputImageType == 'base64') {
                    window.parent.postMessage({ type: 'Editor Closed', data: imageData.imageBase64 }, window.location.ancestorOrigins[0]);
                } else {
                    imageData.imageCanvas.toBlob(function (blob) {
                        const formData = new FormData();
                        formData.append('file', blob, `${Math.random()}_banner.png`);
                        formData.append("id", '0');
                        formData.append("type", 'promotions');
                        axios.post('https://qa.respark.in:8082/pcs-catalog/v1/s3/uploadwithtype', formData).then((res: any) => {
                            if (window.location.ancestorOrigins.length) {
                                window.parent.postMessage({ type: 'Editor Closed', data: res.data }, window.location.ancestorOrigins[0]);
                            }
                            console.log(res.data)
                        });
                    })
                }
            }
        })
    }

    const onClose = () => {
        setShowEditor(showEditor ? false : true);
        window.parent.postMessage({ type: 'Editor Closed', data: '' }, window.location.ancestorOrigins[0]);
        sessionStorage.removeItem('editor__config');
    }

    const RenderTemplatesList = () => {
        return <div className='templates-list-wrap' style={{ height: savedTemplatesHeight }}>
            <div className='images-list-wrap' >
                <div className="heading">Recommended
                    <div className="icon-wrap"><BsInfoCircle />
                        <div className="info">Templates created by Respark for you!</div>
                    </div>
                </div>
                <div className="templates-list">
                    {resparkTemplates.map((template: any, templateIndex: number) => {
                        return <React.Fragment key={Math.random()}>
                            {template.tenantId == 0 && <div className="template-details users-template" onClick={() => onSelectTemplate(template)}>
                                {editorConfig.tenantId == 0 ? <div className="info-icon-wrap" onClick={(e) => onDeleteTemplateClick(e, template, templateIndex)}>
                                    <div className="info">Delete template</div>
                                    <div className="icon-wrap" ><AiOutlineCloseCircle /></div>
                                </div> : <div className="icon-wrap"><FaCrown /></div>}
                                <div className="template-id">{template.id}</div>
                                <img src={template?.image} />
                            </div>}
                        </React.Fragment>
                    })}
                </div>
                {templatesList.length != 0 && <>
                    <div className="heading">Your creations
                        <div className="icon-wrap"><BsInfoCircle />
                            <div className="info">Previously created templates by you!</div>
                        </div>
                    </div>
                    <div className="templates-list">
                        {templatesList.map((template: any, templateIndex: number) => {
                            return <React.Fragment key={Math.random()}>
                                <div className="template-details users-template" onClick={() => onSelectTemplate(template)}>
                                    <div className="info-icon-wrap" onClick={(e) => onDeleteTemplateClick(e, template, templateIndex)}>
                                        <div className="info">Delete template</div>
                                        <div className="icon-wrap" ><AiOutlineCloseCircle /></div>
                                    </div>
                                    <div className="template-id">{template.id}</div>
                                    <img src={template?.image} />
                                </div>
                            </React.Fragment>
                        })}
                    </div>
                </>}
                <div className='btn-wrap' onClick={() => onSelectTemplate(null)}>
                    <div className="btn">Create template
                        <RiAddCircleLine />
                    </div>
                </div>
            </div>
        </div>
    }

    const renderBackgroundsList = () => {
        return <div className="backdrop-modal-content d-f-c backround-mges-wrap templates-list-wrap" ref={bgImageModalRef}>
            <div className="modal-containt">
                <div className="category-image-wrap">
                    <div className="cat-list-wrap">
                        <div className={`category ${activeBgImgCategory == 'All' ? "active" : ""}`} onClick={() => setActiveBgImgCategory('All')}>All</div>
                        {editorConfig.type && BACKGROUND[editorConfig.type] && Object.keys(BACKGROUND[editorConfig.type])?.map((imageCategory) => {
                            return <div className={`category ${activeBgImgCategory == imageCategory ? "active" : ""}`} key={Math.random()} onClick={() => setActiveBgImgCategory(imageCategory)}>{imageCategory}</div>
                        })}
                    </div>
                    {activeBgImgCategory == 'All' ? <>
                        <div className="all">
                            {editorConfig.type && BACKGROUND[editorConfig.type] && Object.keys(BACKGROUND[editorConfig.type])?.map((imageCategory) => {
                                return <div className="image-category-wrap" key={Math.random()}>
                                    <div className="bg-images-list-wrap">
                                        {editorConfig.type && BACKGROUND[editorConfig.type] && BACKGROUND[editorConfig.type][imageCategory]?.map((image) => {
                                            return <div className={`img-wrap ${bgImage == image ? 'active' : ""}`} key={Math.random()} onClick={() => onSelectBgImage(image)}>
                                                <img src={image} id={image} />
                                            </div>
                                        })}
                                    </div>
                                </div>
                            })}
                        </div>
                    </> : <>
                        <div className="image-category-wrap">
                            <div className="bg-images-list-wrap">
                                {BACKGROUND[editorConfig.type][activeBgImgCategory]?.map((image) => {
                                    return <div className={`img-wrap ${bgImage == image ? 'active' : ""}`} key={Math.random()} onClick={() => onSelectBgImage(image)}>
                                        <img src={image} id={image} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </>}
                    <div className='btn-wrap bg-change'>
                        <div className="btn" onClick={() => onBgChangeActionSelect('self')}>Upload from your computer<RiImageAddFill2 /></div>
                        {/* <div className='btn' onClick={() => onChangeBg(bgImage)}>Apply <RiExchangeLine /></div> */}
                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <>
            <div className={`editor-component-wrap  ${showBgImages ? "modal-opened" : ""}`}>
                <div className="editor-container ">
                    {editorConfig.type ? <>
                        <div className="page-heading">Respark Image Editor
                            <img id="client-logo" onClick={() => setShowEditor(true)} className='client-logo' src={editorConfig.logo || 'https://pcs-s3.s3.ap-south-1.amazonaws.com/3/logo/2022-09-15T14%3A57%3A13.639213_slider.png'} />
                            {editorConfig.title && <>- {editorConfig.title}</>}
                            <span> Width:{editorConfig.width}, Height:{editorConfig.height}, Ratio:{editorConfig.aspectRatio}</span>
                            <div className="get-instance" onClick={getEditorInstanceInConsole}>Get editor instance</div>
                            <div className="tenant-store-input">
                                <div className='input-wraps'>
                                    <label className='' >Tenant</label>
                                    <input type="number" value={editorConfig.tenantId} onChange={(e: any) => setEditorConfig({ ...editorConfig, tenantId: e.target.value })} />
                                </div>
                                <div className='input-wraps'>
                                    <label className='' >Store</label>
                                    <input type="number" value={editorConfig.storeId} onChange={(e: any) => setEditorConfig({ ...editorConfig, storeId: e.target.value })} />
                                </div>
                                <div className='input-wraps btn' onClick={() => getTemplatesData(editorConfig)}>Update</div>
                            </div>
                            <div className="icon-wrap"><BsInfoCircle />
                                <EditorGuide />
                            </div>
                        </div>
                        <div className='editor-wrapper'>
                            <div className='editor-wrap' >
                                <div className='editor-root' ref={editorWrapRef}>
                                    {showTemplates && RenderTemplatesList()}
                                    {showBgImages && renderBackgroundsList()}
                                    {showEditor && (
                                        <ImageEditor
                                            source={bgImage}
                                            onSave={(editedImageObject, designState) => {
                                                // setCurrentAction({type:'',action:''});
                                            }}
                                            loadableDesignState={activeTemplate.designState}
                                            onBeforeSave={() => false}
                                            savingPixelRatio={1.2}
                                            previewPixelRatio={window.devicePixelRatio}
                                            onClose={onClose}
                                            getCurrentImgDataFnRef={editedImage}
                                            annotationsCommon={{
                                                fill: 'black',
                                            }}
                                            Text={{
                                                text: 'Add text here',
                                                fontFamily: 'Poppins',
                                                fonts: [
                                                    'Poppins',
                                                    { label: 'Abuget', value: 'Abuget' },
                                                    { label: 'AlexisMarie', value: 'AlexisMarie' },
                                                    { label: 'Allura', value: 'Allura' },
                                                    { label: 'Antonio', value: 'Antonio' },
                                                    { label: 'ArgoFlats', value: 'ArgoFlats' },
                                                    { label: 'Bakery', value: 'bakery' },
                                                    { label: 'Blackjack', value: 'Blackjack' },
                                                    { label: 'Claredon', value: 'Claredon' },
                                                    { label: 'Domaine', value: 'Domaine' },
                                                    { label: 'Enchanting', value: 'Enchanting' },
                                                    { label: 'Fontspring', value: 'Fontspring' },
                                                    // { label: 'Gothic', value: 'Gothic' },
                                                    { label: 'Lhandw', value: 'Lhandw' },
                                                    { label: 'Manta', value: 'Manta' },
                                                    { label: 'Mvboli', value: 'Mvboli' },
                                                    { label: 'Philosopher', value: 'Philosopher' },
                                                    { label: 'Thunder', value: 'Thunder' },
                                                    { label: 'Wayfarer', value: 'Wayfarer' },
                                                ],
                                                fontSize: 40,
                                                letterSpacing: 0,
                                                lineHeight: 1,
                                                align: 'left',
                                                fontStyle: 'normal',
                                            }}
                                            Crop={{ noPresets: true }}
                                            Watermark={waterMarks ? { gallery: [waterMarks] } : { gallery: [] }}
                                            tabsIds={[TABS.TEMPLATE, TABS.BACKGROUND, TABS.ANNOTATE, TABS.FILTERS, TABS.WATERMARK, TABS.FINETUNE, TABS.WATERMARK, TABS.ADJUST]} //in case of new image add TABS.RESIZE
                                            defaultTabId={currentTab}
                                            defaultToolId={TOOLS.TEXT}
                                        />
                                    )}
                                    {/* <div className="add-text-btn" onClick={() => setShowAddTextModal(true)}>
                                        <div className="btn"><BsTextareaT />Text</div>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        {/* <input style={{ visibility: 'hidden' }} accept='image/*' type="file" id="background-img" onChange={uploadMultipleFilesToS3} multiple />
                        <button className="upload-multi-image" onClick={() => document.getElementById('background-img').click()}>Upload multi images</button> */}

                        <HiddenUploadInput
                            ref={uploadImgsInput}
                            onChange={onUploadLocalBGImage}
                            multiple
                        />
                        <Backdrop
                            className="backdrop-modal-wrapper cropper-modal"
                            open={showCropper.active ? true : false}
                        >
                            <div className="backdrop-modal-content d-f-c "
                                style={{
                                    height: `auto`,
                                    width: `${editorConfig.width + 500}px`
                                }}>
                                <div className="modal-close" onClick={() => setShowCropper({ active: false, img: "" })}><AiOutlineCloseCircle /></div>
                                <div className="heading">Crop Selected Image</div>
                                <div className="modal-containt">
                                    <ImageCropper
                                        ref={cropperRef}
                                        editorConfig={editorConfig}
                                        IMG={showCropper.img} />
                                    <div className="btn-wrap">
                                        <div className="btn" onClick={() => onBgChangeActionSelect('self')}>Change Image</div>
                                        <div className="btn" onClick={onCropSubmit}>Crop Image</div>
                                    </div>
                                </div>
                            </div>
                        </Backdrop>
                        <Backdrop
                            className="backdrop-modal-wrapper confirmation-modal"
                            open={showTemplateChangeConfirmation.active ? true : false}
                        >
                            <div className="backdrop-modal-content d-f-c " style={{ height: '300px' }}>
                                <div className="modal-close" onClick={() => setShowTemplateChangeConfirmation({ active: false, template: {}, userAgreeToChange: false })}><AiOutlineCloseCircle /></div>
                                <div className="heading">Change template</div>
                                <div className="modal-containt">
                                    <div className={`message ${showTemplateChangeConfirmation.userAgreeToChange ? " active" : ""}`} onClick={() => setShowTemplateChangeConfirmation({ ...showTemplateChangeConfirmation, userAgreeToChange: !showTemplateChangeConfirmation.userAgreeToChange })}>
                                        <div className={`checkbox`}></div>
                                        Dont show again
                                    </div>
                                    <div className="warning-msg">Please make sure that all current template changes will reverted and this action cannot be undo.</div>
                                    <div className="btn-wrap">
                                        <div className="btn" onClick={replaceTemplate}>Replace current template</div>
                                    </div>
                                </div>
                            </div>
                        </Backdrop>
                        <Backdrop
                            className="backdrop-modal-wrapper confirmation-modal"
                            open={showTemplateDeleteConfirmation.active ? true : false}
                        >
                            <div className="backdrop-modal-content d-f-c " style={{ height: '280px' }}>
                                <div className="modal-close" onClick={() => setShowTemplateDeleteConfirmation({ active: false, template: {}, userAgreeToChange: false, templateIndex: null })}><AiOutlineCloseCircle /></div>
                                <div className="heading">Delete template</div>
                                <div className="modal-containt">
                                    <div className={`message ${showTemplateDeleteConfirmation.userAgreeToChange ? " active" : ""}`} onClick={() => setShowTemplateDeleteConfirmation({ ...showTemplateDeleteConfirmation, userAgreeToChange: !showTemplateDeleteConfirmation.userAgreeToChange })}>
                                        <div className={`checkbox`}></div>
                                        Dont show again
                                    </div>
                                    <div className="warning-msg">Please make sure that this action cannot be undo.</div>
                                    <div className="btn-wrap">
                                        <div className="btn" onClick={deleteCustomerTemplate}>Delete current template</div>
                                    </div>
                                </div>
                            </div>
                        </Backdrop>
                        <Backdrop
                            className="backdrop-modal-wrapper text-type-modal"
                            open={showAddTextModal ? true : false}
                            onClick={onOutsideClick}
                        >
                            <div className="backdrop-modal-content d-f-c" style={{ width: `${showAddTextModal ? '400px' : '0'}` }} ref={testStyleModalRef}>
                                <div className="modal-close" onClick={() => setShowAddTextModal(false)}><AiOutlineCloseCircle /></div>
                                <div className="heading">Click text to add to image</div>
                                <div className="modal-containt">
                                    <div className="headings-wrap text-styles-wrap">
                                        {Headings.map((style: any) => {
                                            return <div className="text-type" key={Math.random()} onClick={() => addTextToEditorInstance(style)}>
                                                <div className="text"
                                                    style={{
                                                        fontStyle: style.fontStyle,
                                                        fontSize: style.fontSize / 1.5,
                                                        color: style.fill,
                                                        textAlign: style.align,
                                                        fontFamily: style.fontFamily,
                                                        letterSpacing: style.letterSpacing,
                                                        lineHeight: style.lineHeight,
                                                    }}>
                                                    {style.text}
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                    <div className="text-styles-wrap">
                                        {textStyles.map((style: any) => {
                                            return <div className="text-type" key={Math.random()} onClick={() => addTextToEditorInstance(style)}>
                                                <div className="text"
                                                    style={{
                                                        fontStyle: style.fontStyle,
                                                        fontSize: style.fontSize / 2,
                                                        color: style.fill,
                                                        textAlign: style.align,
                                                        fontFamily: style.fontFamily,
                                                        letterSpacing: style.letterSpacing,
                                                        lineHeight: style.lineHeight,
                                                        stroke: style.stroke,
                                                        strokeWidth: style.strokeWidth,
                                                        WebkitTextStroke: style.strokeWidth,
                                                        WebkitTextStrokeColor: style.stroke,
                                                        width: `${style.width / 2}px`,
                                                        height: `${style.height / 2}px`,
                                                        textShadow: `${style.shadowOffsetX}px ${style.shadowOffsetY}px ${style.shadowBlur}px ${style.shadowColor}`,
                                                    }}>
                                                    {style.text}
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </Backdrop>
                    </> : <>
                        <Spinner />
                    </>}
                </div>
            </div>
        </>
    );
}
export default memo(Editor);