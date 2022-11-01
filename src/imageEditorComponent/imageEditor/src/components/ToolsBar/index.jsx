/** External Depepdencneis */
import React, { useCallback, useEffect, useMemo, useContext } from 'react';

/** Internal Depepdencneis */
import { SELECT_TOOL } from '../../actions';
import { TABS_TOOLS, TOOLS_ITEMS } from '../../components/tools/tools.constants';
import { TABS_IDS, TOOLS_IDS } from '../../utils/constants';
import { useStore } from '../../hooks';
import { StyledToolsBar, StyledToolsBarItems } from './ToolsBar.styled';
import ToolsBarItemOptionsWrapper from './ToolsBarItemOptionsWrapper';
import { EditorContext } from '../../../../../imageEditorComponent'

const ToolsBar = () => {
  const {
    t,
    dispatch,
    tabId,
    toolId,
    annotations,
    selectionsIds = [],
    config: { defaultTabId, defaultToolId, useCloudimage },
  } = useStore();
  const currentTabId = tabId || defaultTabId;
  const { currentId, setCurrentId } = useContext(EditorContext);
  const currentToolId =
    toolId || defaultToolId || TABS_TOOLS[currentTabId]?.[0];

  const tabTools = useMemo(
    () => TABS_TOOLS[currentTabId] || [],
    [currentTabId],
  );

  const selectTool = useCallback((newToolId) => {
    if (newToolId == TOOLS_IDS.TEXT) setCurrentId(TOOLS_IDS.TEXT);
    else setCurrentId('');
    dispatch({
      type: SELECT_TOOL,
      payload: {
        toolId: newToolId,
      },
    });
  }, []);

  const items = useMemo(
    () =>
      tabTools.map((id) => {
        const { Item, hideFn } = TOOLS_ITEMS[id];
        return (
          Item &&
          (!hideFn || !hideFn({ useCloudimage })) && (
            <Item
              key={id}
              selectTool={selectTool}
              t={t}
              isSelected={currentToolId === id}
            />
          )
        );
      }),
    [tabTools, currentToolId],
  );

  const ToolOptionsComponent = useMemo(() => {
    if (!currentToolId) {
      return false;
    }

    if (currentTabId === TABS_IDS.ANNOTATE) {
      const selectionsLength = selectionsIds.length;
      if (selectionsLength === 1) {
        const selectedAnnotation = annotations[selectionsIds[0]];
        return TOOLS_ITEMS[selectedAnnotation.name]?.ItemOptions;
      }
      if (selectionsLength > 1) {
        return null;
      }
    }

    return (
      currentTabId &&
      currentToolId &&
      TABS_TOOLS[currentTabId].includes(currentToolId) &&
      (!TOOLS_ITEMS[toolId]?.hideFn ||
        !TOOLS_ITEMS[toolId]?.hideFn({ useCloudimage })) &&
      TOOLS_ITEMS[toolId]?.ItemOptions
    );
  }, [currentTabId, currentToolId, annotations, selectionsIds]);

  useEffect(() => {
    if (!toolId && currentToolId) {
      dispatch({
        type: SELECT_TOOL,
        payload: { toolId: currentToolId },
      });
    }
  }, []);

  return (
    <StyledToolsBar className={`respark_tools-bar-wrapper ${tabId}`}>
      {items && (
        <StyledToolsBarItems className="respark_tools-bar">
          {items}
        </StyledToolsBarItems>
      )}
      {(ToolOptionsComponent && t) && <ToolsBarItemOptionsWrapper>
        {ToolOptionsComponent && <ToolOptionsComponent t={t} />}
      </ToolsBarItemOptionsWrapper>}
    </StyledToolsBar>
  );
};

export default ToolsBar;
