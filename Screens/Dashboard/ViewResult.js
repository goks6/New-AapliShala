import React, { useState } from 'react';
import { View, Text, Picker, ScrollView, TouchableOpacity } from 'react-native';

const ViewResult = () => {
  const [selectedClass, setSelectedClass] = useState('');

  const handleViewResult = () => {
    alert(`${selectedClass} चा निकाल दाखवला जात आहे.`);
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4">निकाल पाहा</Text>

      <Text className="mb-2">इयत्ता निवडा:</Text>
      <View className="border border-gray-300 rounded mb-4">
        <Picker
          selectedValue={selectedClass}
          onValueChange={(itemValue) => setSelectedClass(itemValue)}
        >
          <Picker.Item label="इयत्ता निवडा" value="" />
          <Picker.Item label="1ली" value="1" />
          <Picker.Item label="2री" value="2" />
          <Picker.Item label="3री" value="3" />
          <Picker.Item label="4थी" value="4" />
          <Picker.Item label="5वी" value="5" />
        </Picker>
      </View>

      <TouchableOpacity
        onPress={handleViewResult}
        className="bg-blue-500 p-3 rounded"
      >
        <Text className="text-white text-center font-semibold">निकाल पाहा</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ViewResult;
