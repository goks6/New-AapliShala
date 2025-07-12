// src/screens/ResetPassword.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase'; // 🔥 Import your Firestore config here
import tw from 'twrnc';

const ResetPassword = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'teachers'));
      const teacherList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTeachers(teacherList);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  const handleResetPassword = async (teacher) => {
    Alert.alert(
      'Confirm Reset',
      `Do you want to reset password for ${teacher.name} to their mobile number?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Reset',
          onPress: async () => {
            try {
              const teacherRef = doc(db, 'teachers', teacher.id);
              await updateDoc(teacherRef, {
                password: teacher.mobile,
              });
              Alert.alert('Success', `${teacher.name}'s password has been reset!`);
            } catch (error) {
              console.error('Reset Error:', error);
              Alert.alert('Error', 'Failed to reset password.');
            }
          },
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={tw`bg-white p-4 m-2 rounded shadow`}>
      <Text style={tw`text-lg font-bold`}>{item.name}</Text>
      <Text style={tw`text-gray-700`}>Mobile: {item.mobile}</Text>
      <Text style={tw`text-gray-700`}>Class: {item.class || 'N/A'}</Text>
      <TouchableOpacity
        onPress={() => handleResetPassword(item)}
        style={tw`mt-2 bg-blue-500 px-4 py-2 rounded`}
      >
        <Text style={tw`text-white text-center`}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <Text style={tw`text-xl font-bold text-center mt-4`}>Reset Teacher Password</Text>
      <FlatList
        data={teachers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={tw`p-4`}
      />
    </View>
  );
};

export default ResetPassword;
