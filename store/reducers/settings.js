import * as SettingsTypes from '../actions/types/settings'
import Units from "../../constants/Units";

const INITIAL_STATE = {
    degreeUnits: Units.CELSIUS,
}

const settings = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SettingsTypes.CHANGE_DEGREE_UNITS:
            return { ...state, degreeUnits: action.units }
        default:
            return state
    }
}

const getSettings = state => state.settings
export const getDegreeUnits = state => getSettings(state).degreeUnits

export default settings
