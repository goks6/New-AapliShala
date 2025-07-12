import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';

const Events = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [events, setEvents] = useState([]);

  const handleAddEvent = () => {
    if (!eventName || !eventDate) {
      Alert.alert('त्रुटी', 'कृपया सर्व तपशील भरा');
      return;
    }

    const newEvent = { name: eventName, date: eventDate };
    setEvents([...events, newEvent]);
    setEventName('');
    setEventDate('');
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4">कार्यक्रम जोडा</Text>

      <Text className="mb-1">कार्यक्रमाचे नाव</Text>
      <TextInput
        value={eventName}
        onChangeText={setEventName}
        className="border border-gray-300 rounded p-2 mb-3"
        placeholder="उदा. स्वातंत्र्य दिन"
      />

      <Text className="mb-1">दिनांक (dd-mm-yyyy)</Text>
      <TextInput
        value={eventDate}
        onChangeText={setEventDate}
        className="border border-gray-300 rounded p-2 mb-3"
        placeholder="उदा. 15-08-2025"
        keyboardType="numbers-and-punctuation"
      />

      <Button title="कार्यक्रम जोडा" onPress={handleAddEvent} />

      <Text className="text-lg font-semibold mt-6 mb-2">कार्यक्रमांची यादी:</Text>
      <FlatList
        data={events}
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

export default Events;
