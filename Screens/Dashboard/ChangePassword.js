import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      Alert.alert('त्रुटी', 'कृपया सर्व फील्ड भरा');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('त्रुटी', 'नवीन पासवर्ड आणि खात्री पासवर्ड जुळत नाहीत');
      return;
    }

    // Actual password change logic
    Alert.alert('यशस्वी', 'पासवर्ड यशस्वीरित्या बदलला गेला आहे');
  };

  return (
    <View className="flex-1 bg-white p-4 justify-center">
      <Text className="text-xl font-bold mb-4">पासवर्ड बदला</Text>

      <Text className="mb-1">सध्याचा पासवर्ड</Text>
      <TextInput
        secureTextEntry
        value={oldPassword}
        onChangeText={setOldPassword}
        className="border border-gray-300 rounded p-2 mb-4"
      />

      <Text className="mb-1">नवीन पासवर्ड</Text>
      <TextInput
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
        className="border border-gray-300 rounded p-2 mb-4"
      />

      <Text className="mb-1">नवीन पासवर्ड पुन्हा टाका</Text>
      <TextInput
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        className="border border-gray-300 rounded p-2 mb-4"
      />

      <Button title="पासवर्ड बदला" onPress={handleChange} />
    </View>
  );
};

export default ChangePassword;
