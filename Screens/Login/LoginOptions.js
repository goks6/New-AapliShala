import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginOptions() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <Text className="text-2xl font-bold mb-10">लॉगिन निवडा</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('HeadmasterLogin')}
        className="bg-blue-700 w-full py-3 mb-4 rounded-lg"
      >
        <Text className="text-white text-center text-lg">मुख्याध्यापक लॉगिन</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('TeacherLogin')}
        className="bg-green-600 w-full py-3 rounded-lg"
      >
        <Text className="text-white text-center text-lg">शिक्षक लॉगिन</Text>
      </TouchableOpacity>
    </View>
  );
}
