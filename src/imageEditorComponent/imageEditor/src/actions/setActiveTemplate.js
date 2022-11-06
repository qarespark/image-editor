export const SET_ACTIVE_TEMPLATE = 'SET_ACTIVE_TEMPLATE';

const setActiveTemplate = (state, payload) => {
    return {
        ...state,
        activeTemplate: payload.activeTemplate
    };
};

export default setActiveTemplate;
