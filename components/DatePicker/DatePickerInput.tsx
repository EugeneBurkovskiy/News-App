import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/themed';
import { DatePickerModal } from 'react-native-paper-dates';
import { CalendarDate } from 'react-native-paper-dates/lib/typescript/Date/Calendar';

import { IParams } from '../../utils/getData';
import { formatDate } from '../../utils/formatDate';

interface IProps {
  setParams: React.Dispatch<React.SetStateAction<IParams>>;
}

interface IDate {
  startDate: CalendarDate;
  endDate: CalendarDate;
}

const DatePickerInput: React.FC<IProps> = ({ setParams }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<IDate>();

  const handleOpen = () => {
    setOpen(false);
  };

  const handleConfirm = ({ startDate, endDate }: IDate) => {
    const formattedStartDate =
      startDate && formatDate(startDate.toDateString());
    const formattedEndDate = endDate && formatDate(endDate.toDateString());
    setParams((prev) => ({
      ...prev,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    }));
    setOpen(false);
    setData((prev) => ({ ...prev, startDate: startDate, endDate: endDate }));
  };

  return (
    <View>
      <Button onPress={() => setOpen(true)} type='outline'>
        Date Interval
      </Button>
      <DatePickerModal
        mode='range'
        visible={open}
        onDismiss={handleOpen}
        startDate={data?.startDate}
        endDate={data?.endDate}
        onConfirm={handleConfirm}
        locale='en'
      />
    </View>
  );
};

export default DatePickerInput;
