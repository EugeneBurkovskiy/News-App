import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { IParams } from '../../utils/getData';

interface IProps {
  setParams: React.Dispatch<React.SetStateAction<IParams>>;
}

const styles = StyleSheet.create({
  select: {
    padding: 5,
  },
});

const SortSelect: React.FC<IProps> = ({ setParams }) => {
  const [selectedValue, setSelectedValue] = useState('relevancy');

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    setParams((prev) => ({ ...prev, sort: selectedValue }));
  }, [selectedValue]);

  return (
    <View>
      <Picker
        style={styles.select}
        selectedValue={selectedValue}
        onValueChange={handleChange}
      >
        <Picker.Item label='by relevancy' value='relevancy' />
        <Picker.Item label='by popularity' value='popularity' />
        <Picker.Item label='newest' value='publishedAt' />
      </Picker>
    </View>
  );
};

export default SortSelect;
