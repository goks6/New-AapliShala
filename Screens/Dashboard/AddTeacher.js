import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

export default function AddTeacher() {
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [section, setSection] = useState('');
  const [mobile, setMobile] = useState('');

  const handleAddTeacher = async () => {
    if (!name || !className || !section || !mobile) {
      Alert.alert('संपूर्ण माहिती भरा');
      return;
    }

    try {
      const defaultPassword = mobile; // Default password = Mobile number

      await addDoc(collection(db, 'teachers'), {
        name,
        class: className,
        section,
        mobile,
        password: defaultPassword,
        role: 'teacher'
      });

      Alert.alert('शिक्षक नोंदवला गेला');
      setName('');
      setClassName('');
      setSection('');
      setMobile('');
    } catch (error) {
      console.error('Error adding teacher: ', error);
      Alert.alert('त्रुटी आली', error.message);
    }
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-center mb-4">शिक्षक जोडा</Text>

      <TextInput
        placeholder="शिक्षकाचे नाव"
        value={name}
        onChangeText={setName}
        className="border border-gray-300 rounded px-3 py-2 mb-3"
      />
      <TextInput
        placeholder="इयत्ता (उदा. 5)"
        value={className}
        onChangeText={setClassName}
        className="border border-gray-300 rounded px-3 py-2 mb-3"
      />
      <TextInput
        placeholder="तुकडी (उदा. अ)"
        value={section}
        onChangeText={setSection}
        className="border border-gray-300 rounded px-3 py-2 mb-3"
      />
      <TextInput
        placeholder="मोबाईल क्रमांक"
        value={mobile}
        onChangeText={setMobile}
        keyboardType="numeric"
        className="border border-gray-300 rounded px-3 py-2 mb-3"
      />

      <TouchableOpacity onPress={handleAddTeacher} className="bg-blue-500 p-3 rounded">
        <Text className="text-white text-center text-lg">शिक्षक जोडा</Text>
      </TouchableOpacity>
    </View>
  );
}
