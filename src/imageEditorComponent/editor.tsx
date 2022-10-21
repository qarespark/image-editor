import React, { useEffect, useRef, useState } from 'react';
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
import { config } from 'process';


function AiOutlineCloseCircle(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>;
}

function RiImageAddFill(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><g><path fill="none" d="M0 0h24v24H0z" /><path d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993v9.349A5.99 5.99 0 0 0 20 13V5H4l.001 14 9.292-9.293a.999.999 0 0 1 1.32-.084l.093.085 3.546 3.55a6.003 6.003 0 0 0-3.91 7.743L2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" /></g></svg>;
}

function RiImageEditFill(props) {
    return <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7 7C5.34315 7 4 8.34315 4 10C4 11.6569 5.34315 13 7 13C8.65685 13 10 11.6569 10 10C10 8.34315 8.65685 7 7 7ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H3ZM21 5H3C2.44772 5 2 5.44772 2 6V18C2 18.5523 2.44772 19 3 19H7.31374L14.1924 12.1214C15.364 10.9498 17.2635 10.9498 18.435 12.1214L22 15.6863V6C22 5.44772 21.5523 5 21 5ZM21 19H10.1422L15.6066 13.5356C15.9971 13.145 16.6303 13.145 17.0208 13.5356L21.907 18.4217C21.7479 18.7633 21.4016 19 21 19Z" fill="currentColor"></path></svg>;
}

function VscSaveAll(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" {...props}><path d="M14.85 2.65l-1.5-1.5L13 1H4.48l-.5.5V4H1.5l-.5.5v10l.5.5h10l.5-.5V12h2.5l.5-.5V3l-.15-.35zM11 14H2V5h1v3.07h6V5h.79L11 6.21V14zM6 7V5h2v2H6zm8 4h-2V6l-.15-.35-1.5-1.5L10 4H5V2h7.81l1.21 1.21L14 11z" /></svg>;
}

function ImFilePicture(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" {...props}><path d="M13 14h-10v-2l3-5 4.109 5 2.891-2v4z" /><path d="M13 7.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5 0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5z" /><path d="M14.341 3.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-7.75c-0.689 0-1.25 0.561-1.25 1.25v13.5c0 0.689 0.561 1.25 1.25 1.25h11.5c0.689 0 1.25-0.561 1.25-1.25v-9.75c0-0.224-0.068-0.615-0.659-1.421zM12.271 2.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-11.5c-0.135 0-0.25-0.114-0.25-0.25v-13.5c0-0.135 0.115-0.25 0.25-0.25 0 0 7.749-0 7.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v9.75z" /></svg>;
}

function GoDesktopDownload(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" {...props}><path fillRule="evenodd" d="M4 6h3V0h2v6h3l-4 4-4-4zm11-4h-4v1h4v8H1V3h4V2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z" /></svg>;
}

function RiExchangeLine(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><g><path fill="none" d="M0 0h24v24H0z" /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-7h9v2h-4v3l-5-5zm5-4V6l5 5H8V9h4z" /></g></svg>;
}

function IoMdCloseCircleOutline(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"></path></g></svg>;
}

function IoIosArrowBack(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" {...props}><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" /></svg>;
}

function MdNavigateNext(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" strokeWidth="2" points="9 6 15 12 9 18"></polyline></svg>
}

function RiAddCircleLine(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><g><path fill="none" d="M0 0h24v24H0z" /><path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" /></g></svg>;
}

function FaCrown(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" height="1em" width="1em" {...props}><path d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z" /></svg>;
}

function RiDeleteBin5Line(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><g><path fill="none" d="M0 0h24v24H0z" /><path d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm2 2v10h12V10H6zm3 2h2v6H9v-6zm4 0h2v6h-2v-6zM7 5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9z" /></g></svg>;
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

function IoIosImage(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" {...props}><path d="M112.6 312.3h190.7c4.5 0 7.1-5.1 4.5-8.8l-95.4-153.4c-2.2-3.2-6.9-3.2-9.1 0L108 303.5c-2.6 3.7.1 8.8 4.6 8.8zM306.7 254.3l35 55.7c1 1.5 2.7 2.4 4.5 2.4h53.2c4.5 0 7.1-5.1 4.5-8.8l-61.6-87.7c-2.2-3.2-6.9-3.2-9.1 0L306.6 248c-1.2 1.8-1.2 4.3.1 6.3zM351.1 167.9c13.1-1.3 23.7-11.9 25-25 1.8-17.7-13-32.5-30.7-30.7-13.1 1.3-23.7 11.9-25 25-1.7 17.7 13 32.5 30.7 30.7z" /><path d="M432 48H80c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zm-2.7 280c0 4.4-3.6 8-8 8H90.7c-4.4 0-8-3.6-8-8V90.7c0-4.4 3.6-8 8-8h330.7c4.4 0 8 3.6 8 8V328z" /></svg>;
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

const defaultConfig = {
    tenantId: 0,
    storeId: 0,
    type: '413X284',
    height: '200',
    width: '400',
    group: 'both',
    baseURL: "https://prod.respark.in:8082/pcs-catalog/v1/templates",
    baseDeleteURL: "https://prod.respark.in:8082/pcs-catalog/v1/template"
}

const getEmptyTemplateObj = () => {
    return {
        "designState": {},
        "image": "",
        "index": 1,
        "active": true,
        "group": "both",
        "category": "",
        "storeId": defaultConfig.storeId,
        "tenantId": defaultConfig.tenantId,
        "type": defaultConfig.type
    }
}

function Editor() {
    const [showEditor, setShowEditor] = useState(true);
    const [bgImage, setBgImage] = useState<any>(initialBg);
    const [showSaveActionModal, setShowSaveActionModal] = useState(false);
    const [resparkTemplates, setResparkTemplates] = useState<any[]>([]);
    const [templatesList, setTemplatesList] = useState<any[]>([]);
    const [activeTemplate, setActiveTemplate] = useState<any>(getEmptyTemplateObj());
    const [showBgImagesModal, setShowBgImagesModal] = useState(false)
    const [oldBgImage, setOldBgImage] = useState(initialBg);
    const imageResolutionsMode = defaultConfig.type;
    const [savedTemplatesHeight, setSavedTemplatesListHeight] = useState('50vh');
    // const [bgImages, setBgImages] = useState<any>(bgImagesList); //used for collecting base64 urls of images
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const bgImageModalRef = useRef<any>(null);
    const testStyleModalRef = useRef<any>(null);
    const bgModalRef = useRef<any>(null);
    const editorWrapRef = useRef<any>(null);
    const [userAcceptedTemplateChangeMessage, setUserAcceptedTemplateChangeMessage] = useState(false)
    const [showTemplateChangeConfirmation, setShowTemplateChangeConfirmation] = useState({ active: false, template: {} });
    const uploadImgsInput = useRef();
    const [activeBgImgCategory, setActiveBgImgCategory] = useState('All');
    const [showAddTextModal, setShowAddTextModal] = useState(false);
    const [editorConfig, setEditorConfig] = useState(defaultConfig);
    const editedImage = useRef<(imageFileInfo?: object, pixelRatio?: boolean, keepLoadingSpinnerShown?: boolean) => { imageData: object; designState: object; hideLoadingSpinner: (...args: any[]) => any }>();

    useEffect(() => {


        let config: any = localStorage.getItem('editor__config');
        if (config) {
            config = JSON.parse(config);
        } else {
            config = defaultConfig;
        }

        let params = new URLSearchParams(window.location.search);
        if (window.location.hostname == 'localhost') {
            params = new URLSearchParams('?env=qa&t_id=0&s_id=0&type=413X284');
        }
        if (params) {
            console.log(params)
            if (params.get('env') == 'qa') {
                config.baseURL = "https://qa.respark.in:8082/pcs-catalog/v1/templates";
                config.baseDeleteURL = "https://qa.respark.in:8082/pcs-catalog/v1/template";
            } else {
                config.baseURL = "https://prod.respark.in:8082/pcs-catalog/v1/templates";
                config.baseDeleteURL = "https://prod.respark.in:8082/pcs-catalog/v1/template";
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
        }
        console.log(config)
        setEditorConfig(config)
        getTemplatesData(config)

        axios.get(`${config.baseURL}/0/0`).then((templates: any) => {
            setResparkTemplates(templates.data.reverse())
        });
    }, [])

    const getTemplatesData = (config: any) => {
        if (config.tenantId != 0) {
            axios.get(`${config.baseURL}/${config.tenantId}/${config.storeId}`).then((response: any) => {
                setTemplatesList(response.data.reverse() || []);
            });
        }
    }

    useEffect(() => {
        if (activeTemplate?.designState?.imgSrc) {
            setOldBgImage(activeTemplate?.designState?.imgSrc)
            setBgImage(activeTemplate?.designState?.imgSrc)
        }
        if (showEditor) {
            setShowEditor(false);
            setTimeout(() => setShowEditor(true), 1)
        }
    }, [activeTemplate])

    const closeSaveModal = () => {
        setAnchorEl(null);
        setShowSaveActionModal(false);
    }

    const onSelectTemplate = (template: any) => {
        if (template) {
            if (!activeTemplate.id || userAcceptedTemplateChangeMessage || activeTemplate.id == template.id) {
                setActiveTemplate({ ...template });
            } else {
                setShowTemplateChangeConfirmation({ template, active: true });
            }
        } else {
            setActiveTemplate({ ...getEmptyTemplateObj() });
            setBgImage(initialBg);
        }
    }

    const replaceTemplate = () => {
        setActiveTemplate(showTemplateChangeConfirmation.template);
        setShowTemplateChangeConfirmation({ active: false, template: {} })
    }

    const onChangeBg = (bgImage: any) => {
        if (bgImage) setBgImage(bgImage)
        else setBgImage(oldBgImage);
        setShowBgImagesModal(false)
    }

    const handleSaveClick = (event: any) => {
        if (event) {
            if (event == 'add') {
                addNewTemplate(); closeSaveModal();
            } else if (event == 'update') {
                updateTemplate(); closeSaveModal();
            } else if (event == 'download') {
                downloadTemplate(); closeSaveModal();
            } else {
                setAnchorEl(event.currentTarget);
                setShowSaveActionModal(true);
            }
        } else closeSaveModal();
    };

    const addNewTemplate = () => {
        getEditorInstance().then((editorInstance: any) => {
            if (editorInstance.designState) {
                console.log("Success", "Image added successfully")
                const { designState, imageData } = editorInstance;
                const template: any = { ...getEmptyTemplateObj() };
                template.designState = { ...designState };
                template.image = imageData.imageBase64;
                axios.post(editorConfig.baseURL, template).then((response: any) => {
                    setActiveTemplate({ ...activeTemplate, id: response.data.id })
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
                axios.post(editorConfig.baseURL, template).then((response: any) => {
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

    const downloadTemplate = () => {
        getEditorInstance().then((editorInstance: any) => {
            if (editorInstance.designState && editorInstance.imageData) {
                const { imageData } = editorInstance;
                var a = document.createElement("a"); //Create <a>
                a.href = imageData.imageBase64; //Image Base64 Goes here
                a.download = "banner.png"; //File name Here
                a.click(); //Downloaded file
            }
            setShowSaveActionModal(false)
            console.log("Success", "Image downloaded successfully")
        })
    }

    const onBgChangeActionSelect = (from: any) => {
        setOldBgImage(bgImage)
        if (from == 'self') uploadNewBgFromLocal();
        else if (from == 'gallery') setShowBgImagesModal(true);
        setAnchorEl(null);
    };

    const toggleEditor = () => {
        setShowEditor(showEditor ? false : true);
    };

    const uploadNewBgFromLocal = () => {
        let element: any = uploadImgsInput.current;
        element?.click();
    }

    const onSelectImage = (e: any) => {
        if (e.target.files && e.target.files.length) {
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]); // read file as data url
            reader.onload = (event: any) => { // called once readAsDataURL is completed
                onChangeBg(event.target!.result);
            }
        }
    }

    const onSelectBgImage = (url: any) => {

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

    const deleteCustomerTemplate = (event: any, template: any, templateIndex: number) => {
        axios.delete(`${editorConfig.baseDeleteURL}/${template.id}`).then((response: any) => {
            if (editorConfig.tenantId == 0) {
                const resparkTemplatesCopy: any = JSON.parse(JSON.stringify(resparkTemplates));
                resparkTemplatesCopy.splice(templateIndex, 1);
                setResparkTemplates(resparkTemplatesCopy);
            } else {
                const templatesListCopy: any = JSON.parse(JSON.stringify(templatesList));
                templatesListCopy.splice(templateIndex, 1);
                setTemplatesList(templatesListCopy);
            }
        });
        event.stopPropagation();
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
                setActiveTemplate(template);
                setShowEditor(false);
                setTimeout(() => setShowEditor(true), 1)
                setShowAddTextModal(false)
            }
        })
    }

    const getEditorInstanceInConsole = () => {
        getEditorInstance().then((editorInstance: any) => {
            console.log(editorInstance.designState.annotations)
        })
    }

    return (
        <>
            <div className="editor-component-wrap">
                <div className="editor-container">
                    <div className="page-heading">Respark Image Editor
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
                            <div className="info">
                                <div className="heading">How to make a banner</div>
                                <div className="info-details-wrap">
                                    <div className="sub-heading">1) Choose template</div>
                                    <div className="details">
                                        Explore Respark's wide range of banner templates for various needs in different styles and themes.
                                        Choose any template you like and click on the template and start designing and making changes.
                                    </div>
                                </div>
                                <div className="info-details-wrap">
                                    <div className="sub-heading">2) Customize your banner in a minutes</div>
                                    <div className="details">
                                        Found the right template but want to make a few adjustments? Simple. With a few clicks, you can edit the text, change fonts and try out different color combinations for the perfect banner design. Also you can change background too.
                                    </div>
                                </div>
                                <div className="info-details-wrap">
                                    <div className="sub-heading">3) Get creative with design ingredients</div>
                                    <div className="details">
                                        You will find all the design elements you need to create the perfect banner. Explore images, illustrations, icons, logos, fonts, shapes, lines, pen tool and more.
                                        Get creative!
                                    </div>
                                </div>
                                <div className="info-details-wrap">
                                    <div className="sub-heading">4) Add identity (Watermark)</div>
                                    <div className="details">
                                        Also you can add watermark to your newly created banner.
                                    </div>
                                </div>
                                <div className="info-details-wrap">
                                    <div className="sub-heading">5) Final step</div>
                                    <div className="details">
                                        When your design is ready then you can save it as a template for your further editing and customisation or you can update previously saved template.
                                    </div>
                                </div>
                                <div className="heading">Tabs Details</div>
                                <div className="info-details-wrap">
                                    <div className="sub-heading">1) Adjust</div>
                                    <div className="details">
                                        <div className="image-wrap d-f-c-c">
                                            <BiImages />Adjust
                                        </div>
                                        <div className="features">
                                            a) Croping (Default - original)<br />
                                            b) Rotate<br />
                                            c) Flip X (Flip Horizontal)<br />
                                            d) Flip Y (Flip Vertical)<br />
                                        </div>
                                    </div>
                                </div>
                                <div className="info-details-wrap">
                                    <div className="sub-heading">2) Draw</div>
                                    <div className="details">
                                        <div className="image-wrap d-f-c-c">
                                            <RiImageEditLine />Draw
                                        </div>
                                        <div className="features">
                                            a) Text editing - Font, color, alignment, size, spacing<br />
                                            b) Image - Graphic images, icons <br />
                                            c) Shapes - Rectangle, square, ellips, polygoan, , line, arrow<br />
                                            d) Drawing<br />
                                        </div>
                                    </div>
                                </div>
                                <div className="info-details-wrap">
                                    <div className="sub-heading">3) Filters</div>
                                    <div className="details">
                                        <div className="image-wrap d-f-c-c">
                                            <IoIosImages />Filters
                                        </div>
                                        <div className="features">
                                            a) Images filters - Invert, black&white, sepia, solarize, and many more...
                                        </div>
                                    </div>
                                </div>
                                <div className="info-details-wrap">
                                    <div className="sub-heading">4) Finetune</div>
                                    <div className="details">
                                        <div className="image-wrap d-f-c-c">
                                            <BsFillImageFill />Finetune
                                        </div>
                                        <div className="features">
                                            a) Brightness<br />
                                            b) Contrast<br />
                                            c) HSV<br />
                                            d) Blur<br />
                                            d) Warmth<br />
                                        </div>
                                    </div>
                                </div>
                                <div className="info-details-wrap">
                                    <div className="sub-heading">5) Watermark</div>
                                    <div className="details">
                                        <div className="image-wrap d-f-c-c">
                                            <MdBrandingWatermark />Watermark
                                        </div>
                                        <div className="features">
                                            a) Watermark logo
                                        </div>
                                    </div>
                                </div>
                                <div className="info-details-wrap">
                                    <div className="sub-heading">6) Resize</div>
                                    <div className="details">
                                        <div className="image-wrap d-f-c-c">
                                            <RiPictureInPicture2Fill />Resize
                                        </div>
                                        <div className="features">
                                            a) Change image width and height in specific ratio
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='editor-wrapper'>
                        <div className='images-list-wrap' style={{ height: savedTemplatesHeight }}>
                            <div className="heading">Recommended
                                <div className="icon-wrap"><BsInfoCircle />
                                    <div className="info">Templates created by Respark for you!</div>
                                </div>
                            </div>
                            <div className="templates-list">
                                {resparkTemplates.map((template: any) => {
                                    return <React.Fragment key={Math.random()}>
                                        {template.tenantId == 0 && <div className="template-details" onClick={() => onSelectTemplate(template)}>
                                            <div className="icon-wrap"><FaCrown /></div>
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
                                    {templatesList.map((template: any, i: number) => {
                                        return <React.Fragment key={Math.random()}>
                                            <div className="template-details users-template" onClick={() => onSelectTemplate(template)}>
                                                <div className="info-icon-wrap" onClick={(e) => deleteCustomerTemplate(e, template, i)}>
                                                    <div className="info">Delete template</div>
                                                    <div className="icon-wrap" ><AiOutlineCloseCircle /></div>
                                                </div>
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
                        <div className='editor-wrap' >
                            <div className='editor-root' ref={editorWrapRef}>
                                <div className="actions-wrap">
                                    <div className='btn-wrap'>
                                        <div className='btn' id="bg-change-btn" onClick={() => onBgChangeActionSelect('gallery')}>
                                            <div className="text"> Change Backround</div>
                                            <div className="icon"><RiImageEditFill /></div>
                                        </div>
                                    </div>

                                    <div className='btn-wrap'>
                                        <div className='btn save-btn' id="save-btn" onClick={handleSaveClick}>
                                            <div className="text">Save Image</div>
                                            <div className="icon"><VscSaveAll /></div>
                                        </div>
                                        <Menu
                                            className='menu-item-wrap'
                                            id="save-menu"
                                            anchorEl={anchorEl}
                                            open={showSaveActionModal}
                                            onClose={() => handleSaveClick('')}
                                            MenuListProps={{ 'aria-labelledby': 'save-btn' }}>
                                            <MenuItem id="add" className='menu-item' onClick={() => handleSaveClick('add')}>
                                                <div className="icon"><RiImageAddFill /></div>
                                                <div className="text">Save as new template</div>
                                            </MenuItem>
                                            {(editorConfig.tenantId == 0 ? true : activeTemplate.tenantId != 0) && <MenuItem id="update" className='menu-item' onClick={() => handleSaveClick('update')}>
                                                <div className="icon"><ImFilePicture /></div>
                                                <div className="text">Update selected template</div>
                                            </MenuItem>}
                                            <MenuItem id="download" className='menu-item' onClick={() => handleSaveClick('download')}>
                                                <div className="icon"><GoDesktopDownload /></div>
                                                <div className="text">Download</div>
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </div>

                                {showEditor && (
                                    <ImageEditor
                                        source={bgImage}
                                        onSave={(editedImageObject, designState) => {
                                            setShowSaveActionModal(true);
                                        }}
                                        loadableDesignState={activeTemplate.designState}
                                        onBeforeSave={() => false}
                                        savingPixelRatio={1.2}
                                        previewPixelRatio={window.devicePixelRatio}
                                        onClose={toggleEditor}
                                        getCurrentImgDataFnRef={editedImage}
                                        annotationsCommon={{
                                            fill: 'black',
                                        }}
                                        Text={{
                                            text: 'Add text here',
                                            fontFamily: 'Poppins',
                                            fonts: [
                                                'Poppins',
                                                { label: 'Mvboli', value: 'Mvboli' },
                                                { label: 'Blackjack', value: 'Blackjack' },
                                                { label: 'Domaine', value: 'Domaine' },
                                                { label: 'Gothic', value: 'Gothic' },
                                                { label: 'Claredon', value: 'Claredon' },
                                                { label: 'ArgoFlats', value: 'ArgoFlats' },
                                                { label: 'Antonio', value: 'Antonio' },
                                                { label: 'Bakery', value: 'bakery' },
                                                { label: 'Allura', value: 'Allura' },
                                                { label: 'Lhandw', value: 'Lhandw' },
                                                { label: 'Fontspring', value: 'Fontspring' },
                                                { label: 'Philosopher', value: 'Philosopher' },
                                                { label: 'Abuget', value: 'Abuget' },
                                                { label: 'Alexis Marie', value: 'Alexis Marie' },
                                                { label: 'Manta', value: 'Manta' },
                                                { label: 'Wayfarer', value: 'Wayfarer' },
                                                { label: 'Thunder', value: 'Thunder' },
                                            ],
                                            fontSize: 40,
                                            letterSpacing: 0,
                                            lineHeight: 1,
                                            align: 'left',
                                            fontStyle: 'normal',
                                        }}
                                        Watermark={{ gallery: [...waterMarks] }}
                                        tabsIds={[TABS.ANNOTATE, TABS.FILTERS, TABS.FINETUNE, TABS.WATERMARK, TABS.ADJUST]} //in case of new image add TABS.RESIZE
                                        defaultTabId={TABS.ANNOTATE}
                                        defaultToolId={TOOLS.TEXT}
                                    />
                                )}
                                <div className="add-text-btn" onClick={() => setShowAddTextModal(true)}>
                                    <div className="btn"><BsTextareaT />Text</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <input style={{ visibility: 'hidden' }} accept='image/*' type="file" id="background-img" onChange={uploadMultipleFilesToS3} multiple />
                    <button className="upload-multi-image" onClick={() => document.getElementById('background-img').click()}>Upload multi images</button> */}
                    <HiddenUploadInput
                        ref={uploadImgsInput}
                        onChange={onSelectImage}
                        multiple
                    />
                    <Backdrop
                        className="backdrop-modal-wrapper"
                        open={showBgImagesModal ? true : false}
                        onClick={onOutsideClick}
                    >
                        <div className="backdrop-modal-content d-f-c" style={{ height: `${showBgImagesModal ? '440px' : '0'}` }} ref={bgImageModalRef}>
                            <div className="heading-wrap">
                                <div className="heading">Select background image</div>
                                <div className="modal-close" onClick={() => onChangeBg(null)}><AiOutlineCloseCircle /></div>
                            </div>
                            <div className="modal-containt">
                                <div className="category-image-wrap">
                                    <div className="cat-list-wrap">
                                        <div className={`category ${activeBgImgCategory == 'All' ? "active" : ""}`} onClick={() => setActiveBgImgCategory('All')}>All</div>
                                        {Object.keys(BACKGROUND[editorConfig.type])?.map((imageCategory) => {
                                            return <div className={`category ${activeBgImgCategory == imageCategory ? "active" : ""}`} key={Math.random()} onClick={() => setActiveBgImgCategory(imageCategory)}>{imageCategory}</div>
                                        })}
                                    </div>
                                    {activeBgImgCategory == 'All' ? <>
                                        <div className="all">
                                            {Object.keys(BACKGROUND[editorConfig.type])?.map((imageCategory) => {
                                                return <div className="image-category-wrap" key={Math.random()}>
                                                    <div className="bg-images-list-wrap">
                                                        {BACKGROUND[editorConfig.type][imageCategory]?.map((image) => {
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
                                </div>
                            </div>
                            <div className='btn-wrap'>
                                <div className="btn" onClick={() => onBgChangeActionSelect('self')}>Upload from your computer <RiImageAddFill /></div>
                                <div className='btn' onClick={() => onChangeBg(null)}>Cancel <IoMdCloseCircleOutline /></div>
                                <div className='btn' onClick={() => onChangeBg(bgImage)}>Apply <RiExchangeLine /></div>
                            </div>
                        </div>
                    </Backdrop>
                    <Backdrop
                        className="backdrop-modal-wrapper confirmation-modal"
                        open={showTemplateChangeConfirmation.active ? true : false}
                    >
                        <div className="backdrop-modal-content d-f-c " style={{ height: '300px' }}>
                            <div className="modal-close" onClick={() => {
                                setShowTemplateChangeConfirmation({ active: false, template: {} });
                                setUserAcceptedTemplateChangeMessage(false);
                            }}><AiOutlineCloseCircle /></div>
                            <div className="heading">Change template</div>
                            <div className="modal-containt">
                                <div className={`message ${userAcceptedTemplateChangeMessage ? " active" : ""}`} onClick={() => setUserAcceptedTemplateChangeMessage(!userAcceptedTemplateChangeMessage)}>
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
                        className="backdrop-modal-wrapper text-type-modal"
                        open={showAddTextModal ? true : false}
                        onClick={onOutsideClick}
                    >
                        <div className="backdrop-modal-content d-f-c" style={{ height: `${showAddTextModal ? '340px' : '0'}` }} ref={testStyleModalRef}>
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
                </div>
            </div>
        </>
    );
}
export default Editor;