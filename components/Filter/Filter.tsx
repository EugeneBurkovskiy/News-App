import { View, StyleSheet } from 'react-native';

import { IParams } from '../../utils/getData';

import SortSelect from '../SortSelect/SortSelect';
import DatePicker from '../DatePicker/DatePickerInput';

interface IProps {
  setParams: React.Dispatch<React.SetStateAction<IParams>>;
}

const styles = StyleSheet.create({
  filter: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
});

const Filter: React.FC<IProps> = ({ setParams }) => {
  return (
    <View style={styles.filter}>
      <SortSelect setParams={setParams} />
      <DatePicker setParams={setParams} />
    </View>
  );
};

export default Filter;
