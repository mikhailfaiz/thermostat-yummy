import { Machine } from 'xstate';

const states = Machine({
    id: 'Thermostat mode',
    initial: 'idle',
    states: {
      idle: {
        on: {
          isCold: 'heating',
          isHot: 'cooling',
          isComfortable: 'idle'
        }
      },
      heating: {
        on: {
          heated: 'idle',
          stillHeating: 'heating'
        }
      },
      cooling: {
        on: {
          cooled: 'idle',
          stillCooling: 'cooling'
        }
      }
    }
  });

  export default states;
  