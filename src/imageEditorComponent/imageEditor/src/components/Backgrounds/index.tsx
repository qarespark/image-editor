import React, { useState } from 'react'
import { useStore } from '../../hooks';
import { TABS } from '../../';
import BACKGROUND from '../../../../bg';


function RiImageAddFill2(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" {...props}><g><path fill="none" d="M0 0h24v24H0z" /><path d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993v9.349A5.99 5.99 0 0 0 20 13V5H4l.001 14 9.292-9.293a.999.999 0 0 1 1.32-.084l.093.085 3.546 3.55a6.003 6.003 0 0 0-3.91 7.743L2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" /></g></svg>;
}
function Backgrounds({ editorConfig, onChangeBg, appProps, onBgChangeActionSelect }) {
    const { dispatch, tabId }: any = useStore();
    const [activeBgImgCategory, setActiveBgImgCategory] = useState('All');

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
                onChangeBg(dataUrl)
            })
    }

    return (
        <>
            {tabId == TABS.BACKGROUND ? <div className="backdrop-modal-content d-f-c backround-mges-wrap templates-list-wrap">
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
                                                return <div className={`img-wrap ${appProps.source == image ? 'active' : ""}`} key={Math.random()} onClick={() => onSelectBgImage(image)}>
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
                                        return <div className={`img-wrap ${appProps.source == image ? 'active' : ""}`} key={Math.random()} onClick={() => onSelectBgImage(image)}>
                                            <img src={image} id={image} />
                                        </div>
                                    })}
                                </div>
                            </div>
                        </>}
                        <div className='btn-wrap bg-change'>
                            <div className="btn" onClick={() => onBgChangeActionSelect('self')}>Upload from your computer<RiImageAddFill2 /></div>
                        </div>
                    </div>
                </div>
            </div> : null}
        </>
    )
}

export default Backgrounds