import { useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  StyleSheet,
} from 'react-native';
import { SearchBar } from '@rneui/themed';

import { IParams } from '../../utils/getData';

interface IProps {
  setParams: React.Dispatch<React.SetStateAction<IParams>>;
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
  },
});

const SearchInput: React.FC<IProps> = ({ setParams }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => {
    setParams((prev) => ({ ...prev, search: e.nativeEvent.text }));
  };

  return (
    <SearchBar
      placeholder='Search...'
      onEndEditing={handleSearchValue}
      onChangeText={(text) => setSearchValue(text)}
      value={searchValue}
      platform='android'
      containerStyle={styles.container}
    />
  );
};

export default SearchInput;
