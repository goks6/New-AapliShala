import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

const TodayPrayer = () => {
  const [prayerData, setPrayerData] = useState({
    srNo: '',
    nationalAnthem: '',
    stateSong: '',
    pledge: '',
    preamble: '',
    dailyPrayer: '',
    thought: '',
    story: '',
    groupSong: '',
    pasaydan: '',
  });

  const handleChange = (field, value) => {
    setPrayerData({ ...prayerData, [field]: value });
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4">आजचा परिपाठ</Text>

      {Object.keys(prayerData).map((key) => (
        <View key={key} className="mb-4">
          <Text className="capitalize mb-1">{key.replace(/([A-Z])/g, ' $1')}</Text>
          <TextInput
            value={prayerData[key]}
            onChangeText={(text) => handleChange(key, text)}
            className="border border-gray-300 rounded p-2"
            placeholder={`${key} लिहा`}
            multiline
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default TodayPrayer;
