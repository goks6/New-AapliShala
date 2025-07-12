import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const features = [
  { label: 'शाळा कॅलेंडर', route: 'Calendar' },
  { label: 'शिक्षक जोडा', route: 'AddTeacher' },
  { label: 'उपस्थिती', route: 'Attendance' },
  { label: 'पालकांना सूचना', route: 'Notifications' },
  { label: 'परिपाठ', route: 'Paripath' },
  { label: 'निकाल', route: 'ResultView' },
  { label: 'पोषण आहार', route: 'MidDayMeal' },
  { label: 'पासवर्ड बदला', route: 'ChangePassword' },
  { label: 'शिक्षक पासवर्ड Reset', route: 'ResetPassword' },
];

export default function HeadmasterDashboard() {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-center my-4">मुख्याध्यापक डॅशबोर्ड</Text>

      {features.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(item.route)}
          className="bg-blue-500 p-4 rounded mb-3"
        >
          <Text className="text-white text-lg text-center">{item.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
