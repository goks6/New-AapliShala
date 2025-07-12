import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

export default function AddStudent() {
  const [form, setForm] = useState({
    srNo: '',
    regNo: '',
    studentName: '',
    fatherName: '',
    motherName: '',
    dob: '',
    admissionDate: '',
    admittedClass: '',
    pen: '',
    studentId: '',
    aadhar: '',
    standard: ''
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    if (!form.studentName || !form.dob) {
      Alert.alert('कृपया विद्यार्थ्याचे नाव आणि जन्मदिनांक भरा');
      return;
    }

    try {
      await addDoc(collection(db, 'students'), form);
      Alert.alert('विद्यार्थी यशस्वीरित्या नोंदवला गेला');
      setForm({
        srNo: '',
        regNo: '',
        studentName: '',
        fatherName: '',
        motherName: '',
        dob: '',
        admissionDate: '',
        admittedClass: '',
        pen: '',
        studentId: '',
        aadhar: '',
        standard: ''
      });
    } catch (error) {
      Alert.alert('त्रुटी आली', error.message);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold text-center mb-4">विद्यार्थी जोडा</Text>

      {[
        { name: 'srNo', label: 'अ. क्र.' },
        { name: 'regNo', label: 'जनरल रजि. क्र.' },
        { name: 'studentName', label: 'विद्यार्थ्याचे नाव *' },
        { name: 'fatherName', label: 'वडिलांचे नाव' },
        { name: 'motherName', label: 'आईचे नाव' },
        { name: 'dob', label: 'जन्म दिनांक *' },
        { name: 'admissionDate', label: 'प्रवेश दिनांक' },
        { name: 'admittedClass', label: 'प्रवेश वर्ग' },
        { name: 'pen', label: 'PEN' },
        { name: 'studentId', label: 'Student ID' },
        { name: 'aadhar', label: 'आधार क्रमांक' },
        { name: 'standard', label: 'इयत्ता' }
      ].map((field) => (
        <TextInput
          key={field.name}
          placeholder={field.label}
          value={form[field.name]}
          onChangeText={(value) => handleChange(field.name, value)}
          className="border border-gray-300 rounded px-3 py-2 mb-3"
        />
      ))}

      <TouchableOpacity onPress={handleSubmit} className="bg-green-500 p-3 rounded">
        <Text className="text-white text-center text-lg">विद्यार्थी जोडा</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
