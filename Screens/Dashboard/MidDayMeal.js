import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

const MidDayMeal = () => {
  const [menu, setMenu] = useState({
    Monday: '',
    Tuesday: '',
    Wednesday: '',
    Thursday: '',
    Friday: '',
    Saturday: '',
  });

  const handleChange = (day, value) => {
    setMenu({ ...menu, [day]: value });
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4">पोषण आहार यादी</Text>
      {Object.keys(menu).map((day, index) => (
        <View key={index} className="mb-4">
          <Text className="text-base font-semibold mb-1">{day}</Text>
          <TextInput
            placeholder="आहाराचा तपशील लिहा"
            className="border border-gray-300 rounded p-2"
            value={menu[day]}
            onChangeText={(text) => handleChange(day, text)}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default MidDayMeal;
