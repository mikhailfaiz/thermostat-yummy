class BusinessLogic {
    
    constructor(tc, tt, dt, dtcool, dtheat) {
        this.tc = tc;
        this.tt = tt;
        this.dt = dt;
        this.dtcool = dtcool;
        this.dtheat = dtheat;
    }

    thermostatModeSelect(tc, tt, currentMode) {
        var resultingEvent;
        switch(currentMode) {
            case 'idle':
                if (tc >= tt + this.dt + this.dtheat) {
                    resultingEvent = 'isHot';
                } else if (tc <= tt - this.dt - this.dtcool) {
                    resultingEvent = 'isCold';
                } else {
                    resultingEvent = 'isComfortable';
                }
                break;
            case 'heating':
                if (tc >= tt + this.dt) {
                    resultingEvent = 'heated';
                } else {
                    resultingEvent = 'stillHeating';
                }
                break;
            case 'cooling':
                if (tc <= tt - this.dt) {
                    resultingEvent = 'cooled';
                } else {
                    resultingEvent = 'stillCooling';
                }
                break;
        }
        return resultingEvent;
    }
}

export default BusinessLogic;