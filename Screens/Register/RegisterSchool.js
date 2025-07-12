import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RegisterSchool() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    schoolName: '',
    udise: '',
    address: '',
    pin: '',
    headmaster: '',
    mobile: '',
    dob: '',
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    const { schoolName, udise, address, pin, headmaster, mobile, dob } = form;

    if (!schoolName || udise.length !== 11 || pin.length !== 6 || mobile.length !== 10 || !dob) {
      Alert.alert('त्रुटी', 'कृपया सर्व माहिती बरोबर भरा.');
      return;
    }

    // 👉 येथे Firebase logic टाकायचा आहे

    Alert.alert('नोंदणी यशस्वी!', 'लॉगिनसाठी मुख्याध्यापक युजर वापरा.');
    navigation.navigate('LoginOptions');
  };

  return (
    <ScrollView className="flex-1 bg-white px-4 pt-10">
      <Text className="text-xl font-bold text-center mb-6">शाळा नोंदणी फॉर्म</Text>

      {[
        { label: 'शाळेचे नाव', key: 'schoolName' },
        { label: 'UDISE क्रमांक (11 अंक)', key: 'udise', keyboard: 'number-pad' },
        { label: 'पत्ता', key: 'address' },
        { label: 'PIN कोड (6 अंक)', key: 'pin', keyboard: 'number-pad' },
        { label: 'मुख्याध्यापकाचे नाव', key: 'headmaster' },
        { label: 'मोबाईल नंबर (10 अंक)', key: 'mobile', keyboard: 'number-pad' },
        { label: 'मुख्याध्यापक DOB (dd-mm-yyyy)', key: 'dob' },
      ].map(({ label, key, keyboard }) => (
        <View key={key} className="mb-4">
          <Text className="mb-1">{label}</Text>
          <TextInput
            className="border border-gray-300 rounded px-3 py-2"
            keyboardType={keyboard || 'default'}
            onChangeText={(value) => handleChange(key, value)}
            value={form[key]}
          />
        </View>
      ))}

      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-blue-700 py-3 mt-4 rounded-lg"
      >
        <Text className="text-white text-center font-bold">नोंदणी करा</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
