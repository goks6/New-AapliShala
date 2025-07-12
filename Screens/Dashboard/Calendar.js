import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Calendar() {
  const navigation = useNavigation();
  const [holidayList, setHolidayList] = useState([]);
  const [holiday, setHoliday] = useState('');

  const addHoliday = () => {
    if (holiday.trim() === '') return;
    const newHoliday = { id: Date.now().toString(), name: holiday };
    setHolidayList([newHoliday, ...holidayList]);
    setHoliday('');
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-center mb-4">शाळेचा कॅलेंडर</Text>

      <TextInput
        placeholder="सुट्टीचं नाव लिहा (उदा. दिवाळी)"
        value={holiday}
        onChangeText={setHoliday}
        className="border border-gray-300 rounded px-3 py-2 mb-3"
      />

      <TouchableOpacity onPress={addHoliday} className="bg-green-500 p-3 rounded mb-4">
        <Text className="text-white text-center text-lg">सुट्टी जोडा</Text>
      </TouchableOpacity>

      <Text className="text-xl font-semibold mb-2">यादी:</Text>
      {holidayList.length === 0 ? (
        <Text className="text-gray-500">सध्या कोणतीही सुट्टी नोंदवलेली नाही.</Text>
      ) : (
        <FlatList
          data={holidayList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="p-3 bg-blue-100 rounded mb-2">
              <Text className="text-lg">{item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
