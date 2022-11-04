import React, { createContext, useMemo, useState } from 'react';
import ImageEditor from './editor'
import { TABS } from './imageEditor/src';

const EditorContext = createContext<any>({
    //fir setting active left side tab
    currentTab: TABS.TEMPLATE,
    setCurrentTab: () => { },

    //for setting active sub tab
    currentId: '',
    setCurrentId: () => { },

    activeTemplateContext: null,
    setActiveTemplateContext: () => { },

    editorConfigContext: null,
    setEditorConfigContext: () => { },

    //for handling clicked actions
    currentAction: null,
    setCurrentAction: () => { },
});
function ImageEditorWrapper() {
    const [currentTab, setCurrentTab] = useState(TABS.TEMPLATE);
    const [currentId, setCurrentId] = useState('');
    const [currentAction, setCurrentAction] = useState({ type: '', action: '' });
    const [editorConfigContext, setEditorConfigContext] = useState<any>({})
    const [activeTemplateContext, setActiveTemplateContext] = useState<any>({})
    const value = useMemo(() => ({
        currentTab,
        setCurrentTab,
        currentId,
        setCurrentId,
        editorConfigContext,
        setEditorConfigContext,
        activeTemplateContext,
        setActiveTemplateContext,
        currentAction,
        setCurrentAction
    }), [currentTab, currentId, editorConfigContext, activeTemplateContext, currentAction]
    );
    return <EditorContext.Provider value={value}>
        <ImageEditor />
    </EditorContext.Provider>
}

export { EditorContext, ImageEditorWrapper }