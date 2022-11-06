import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TABS } from '../..';
import { SET_ACTIVE_TEMPLATE } from '../../actions';
import { useStore } from '../../hooks';

function BsInfoCircle(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" {...props}><path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" /><path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" /><circle cx={8} cy={4.5} r={1} /></svg>;
}
function AiOutlineCloseCircle(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>;
}
function FaCrown(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" height="1em" width="1em" {...props}><path d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z" /></svg>;
}
function RiAddCircleLine(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><g><path fill="none" d="M0 0h24v24H0z" /><path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" /></g></svg>;
}


function Templates({ editorConfig, resparkTemplates, setResparkTemplates, templatesList, setTemplatesList, onSelectTemplate, onDeleteTemplateClick }) {
    const { dispatch, activeTemplate, tabId }: any = useStore();

    // const onClickTemplate = (template) => {
    //     onSelectTemplate(template);
    //     dispatch({
    //         type: SET_ACTIVE_TEMPLATE,
    //         payload: {
    //             activeTemplate: template,
    //         },
    //     });
    // }

    return (
        <>
            {tabId == TABS.TEMPLATE ? <div className='templates-list-wrap'>
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
            </div> : null}
        </>

    )
}

export default Templates