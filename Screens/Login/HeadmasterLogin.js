import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HeadmasterLogin() {
  const navigation = useNavigation();
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Placeholder validation logic
    if (mobile === '9999999999' && password === 'password') {
      navigation.navigate('HeadmasterDashboard');
    } else {
      Alert.alert('त्रुटी', 'मोबाईल नंबर किंवा पासवर्ड चुकीचा आहे');
    }
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-2xl font-bold mb-8 text-center">मुख्याध्यापक लॉगिन</Text>

      <Text className="mb-1">मोबाईल नंबर</Text>
      <TextInput
        keyboardType="numeric"
        maxLength={10}
        className="border px-4 py-2 rounded mb-4"
        placeholder="१० अंकी मोबाईल क्रमांक"
        value={mobile}
        onChangeText={setMobile}
      />

      <Text className="mb-1">पासवर्ड</Text>
      <TextInput
        secureTextEntry
        className="border px-4 py-2 rounded mb-6"
        placeholder="पासवर्ड टाका"
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={handleLogin} className="bg-blue-700 py-3 rounded">
        <Text className="text-white text-center text-lg">लॉगिन करा</Text>
      </TouchableOpacity>
    </View>
  );
}
