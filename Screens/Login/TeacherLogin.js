import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TeacherLogin() {
  const navigation = useNavigation();
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (mobile === '8888888888' && password === '8888888888') {
      navigation.navigate('TeacherDashboard');
    } else {
      Alert.alert('त्रुटी', 'मोबाईल नंबर किंवा पासवर्ड चुकीचा आहे');
    }
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-2xl font-bold mb-8 text-center">शिक्षक लॉगिन</Text>

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

      <TouchableOpacity onPress={handleLogin} className="bg-green-600 py-3 rounded">
        <Text className="text-white text-center text-lg">लॉगिन करा</Text>
      </TouchableOpacity>
    </View>
  );
}
