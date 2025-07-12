import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert } from 'react-native';

const Notifications = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!title || !message) {
      Alert.alert('त्रुटी', 'कृपया शीर्षक व संदेश भरा');
      return;
    }

    // Logic to send notification
    Alert.alert('यशस्वी', 'सूचना पालकांपर्यंत पाठवली गेली');
    setTitle('');
    setMessage('');
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-4">सूचना पाठवा</Text>

      <Text className="mb-1">शीर्षक</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        className="border border-gray-300 rounded p-2 mb-4"
        placeholder="उदा. सुट्टी बाबत"
      />

      <Text className="mb-1">संदेश</Text>
      <TextInput
        value={message}
        onChangeText={setMessage}
        className="border border-gray-300 rounded p-2 mb-4"
        placeholder="सूचना संदेश लिहा"
        multiline
        numberOfLines={4}
      />

      <Button title="सूचना पाठवा" onPress={handleSend} />
    </ScrollView>
  );
};

export default Notifications;
