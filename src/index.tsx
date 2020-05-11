import { NativeModules } from 'react-native';

type IosCalendarType = {
  multiply(a: number, b: number): Promise<number>;
};

const { IosCalendar } = NativeModules;

export default IosCalendar as IosCalendarType;
