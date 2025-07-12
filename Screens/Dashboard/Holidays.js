import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';

const Holidays = () => {
  const [holidayName, setHolidayName] = useState('');
  const [holidayDate, setHolidayDate] = useState('');
  const [holidays, setHolidays] = useState([]);

  const handleAddHoliday = () => {
    if (!holidayName || !holidayDate) {
      Alert.alert('त्रुटी', 'कृपया सर्व माहिती भरा');
      return;
    }

    const newHoliday = { name: holidayName, date: holidayDate };
    setHolidays([...holidays, newHoliday]);
    setHolidayName('');
    setHolidayDate('');
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4">सुट्टी जोडा</Text>

      <Text className="mb-1">सुट्टीचे नाव</Text>
      <TextInput
        value={holidayName}
        onChangeText={setHolidayName}
        className="border border-gray-300 rounded p-2 mb-3"
        placeholder="उदा. दिवाळी"
      />

      <Text className="mb-1">दिनांक (dd-mm-yyyy)</Text>
      <TextInput
        value={holidayDate}
        onChangeText={setHolidayDate}
        className="border border-gray-300 rounded p-2 mb-3"
        placeholder="उदा. 04-11-2025"
        keyboardType="numbers-and-punctuation"
      />

      <Button title="सुट्टी जोडा" onPress={handleAddHoliday} />

      <Text className="text-lg font-semibold mt-6 mb-2">सुट्ट्यांची यादी:</Text>
      <FlatList
        data={holidays}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="border border-gray-300 p-3 mb-2 rounded">
            <Text className="font-medium">{item.name}</Text>
            <Text>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Holidays;
