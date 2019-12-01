const carAction = (state = null, action) => {
    switch (action.type) {
        case 'CAR_SELECTED':
            return action.payload;
        default:
            return state;
    }
};

export default carAction;