export const AppReducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_LOCKED_TOKENS':
            return {
                ...state,
                lockedTokens: action.payload
            }
        case 'UPDATE_APY':
            return {
                ...state,
                apy: action.payload
            }
        
        case 'UPDATE_STAKES':
            return {
                ...state,
                userStakes: action.payload
            }

        case 'UPDATE_STAKERS':
            return {
                ...state,
                stakers: action.payload
            }
        case 'UPDATE_LOADING':
            return {
                ...state,
                loading: action.payload
            }
        
        case 'UPDATE_POOLS':
            return {
                ...state,
                pools: action.payload
            }
        default:
            return state;
    };
}