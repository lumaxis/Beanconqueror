/** Interfaces */
import {IPreparation} from '../../interfaces/preparation/iPreparation';
/** Classes */
import {Config} from '../objectConfig/objectConfig';
import {PREPARATION_TYPES} from '../../enums/preparations/preparationTypes';


export class Preparation implements IPreparation {
  public name: string;
  public note: string;
  public config: Config;
  public type: PREPARATION_TYPES;
  public finished: boolean;
  constructor() {
    this.name = '';
    this.note = '';
    this.config = new Config();
    this.type = 'CUSTOM_PREPARATION' as PREPARATION_TYPES;
    this.finished = false;
  }

  public initializeByObject (preparationObj: IPreparation): void {
    Object.assign(this, preparationObj);
  }

  public getIcon(_key?: PREPARATION_TYPES): string {
    if (_key === undefined) {
      _key = this.type;
    }
    switch (_key) {
      case PREPARATION_TYPES.BIALETTI:
        return 'beanconqueror-preparation-bialetti';
      case PREPARATION_TYPES.V60:
        return 'beanconqueror-preparation-v60';
      case PREPARATION_TYPES.CHEMEX:
        return 'beanconqueror-preparation-chemex';
      case PREPARATION_TYPES.AEROPRESS:
        return 'beanconqueror-preparation-aeropress';
      case PREPARATION_TYPES.KALITA_WAVE:
        return 'beanconqueror-preparation-kalita-wave';
      case PREPARATION_TYPES.PORTAFILTER:
        return 'beanconqueror-preparation-portafilter';
      case PREPARATION_TYPES.FRENCH_PRESS:
        return 'beanconqueror-preparation-frenchpress';
      default:
        return 'beanconqueror-preparation-custom';
    }
  }

}
