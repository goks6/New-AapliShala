import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StartScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <Text className="text-2xl font-bold mb-8">आपली शाळा</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('RegisterSchool')}
        className="bg-blue-600 px-6 py-3 rounded-lg mb-4 w-full"
      >
        <Text className="text-white text-center font-semibold">नवीन शाळा नोंदणी</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('LoginOptions')}
        className="bg-green-600 px-6 py-3 rounded-lg w-full"
      >
        <Text className="text-white text-center font-semibold">प्र existing user लॉगिन</Text>
      </TouchableOpacity>
    </View>
  );
}
