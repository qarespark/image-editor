import React, { createContext, useMemo, useState } from 'react';
import ImageEditor from './editor'
import { TABS } from './imageEditor/src';

const EditorContext = createContext<any>({
    currentTab: TABS.TEMPLATE,
    currentId: '',
    setCurrentTab: () => { },
    setCurrentId: () => { },
});
function ImageEditorWrapper() {
    const [currentTab, setCurrentTab] = useState(TABS.TEMPLATE);
    const [currentId, setCurrentId] = useState('');
    const value = useMemo(() => ({ currentTab, setCurrentTab, currentId, setCurrentId }), [currentTab, currentId]
    );
    return <EditorContext.Provider value={value}>
        <ImageEditor />
    </EditorContext.Provider>
}

export { EditorContext, ImageEditorWrapper }