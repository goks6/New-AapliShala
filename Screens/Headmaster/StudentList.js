// /screens/Headmaster/StudentList.js
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Picker } from '@react-native-picker/picker';

const dummyStudents = [
  {
    id: 'S001',
    name: 'Rahul Patil',
    fatherName: 'Suresh Patil',
    motherName: 'Meena Patil',
    dob: '2012-04-10',
    class: '5',
    section: 'A',
    aadhaar: '123456789012',
    pen: 'PEN123456',
  },
  {
    id: 'S002',
    name: 'Sneha Jadhav',
    fatherName: 'Ramesh Jadhav',
    motherName: 'Lata Jadhav',
    dob: '2012-06-15',
    class: '5',
    section: 'A',
    aadhaar: '987654321098',
    pen: 'PEN654321',
  },
];

const allTabs = [
  { key: 'name', label: 'विद्यार्थ्याचे नाव' },
  { key: 'fatherName', label: 'वडिलांचे नाव' },
  { key: 'motherName', label: 'आईचे नाव' },
  { key: 'dob', label: 'जन्म दिनांक' },
  { key: 'aadhaar', label: 'आधार क्र.' },
  { key: 'pen', label: 'PEN' },
  { key: 'id', label: 'Student ID' },
];

export default function StudentList() {
  const [selectedClass, setSelectedClass] = useState('5');
  const [selectedSection, setSelectedSection] = useState('A');
  const [selectedTabs, setSelectedTabs] = useState(['name', 'dob']);

  const toggleTab = (key) => {
    setSelectedTabs((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const filteredStudents = dummyStudents.filter(
    (s) => s.class === selectedClass && s.section === selectedSection
  );

  return (
    <ScrollView className="p-4 bg-white h-full">
      <Text className="text-xl font-bold text-center mb-4">विद्यार्थी यादी</Text>

      {/* Class Picker */}
      <View className="mb-3">
        <Text className="mb-1">इयत्ता निवडा:</Text>
        <Picker
          selectedValue={selectedClass}
          onValueChange={(itemValue) => setSelectedClass(itemValue)}
        >
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
        </Picker>
      </View>

      {/* Section Picker */}
      <View className="mb-3">
        <Text className="mb-1">तुकडी निवडा:</Text>
        <Picker
          selectedValue={selectedSection}
          onValueChange={(itemValue) => setSelectedSection(itemValue)}
        >
          <Picker.Item label="A" value="A" />
          <Picker.Item label="B" value="B" />
        </Picker>
      </View>

      {/* Tab Selection */}
      <View className="mb-4">
        <Text className="font-semibold mb-2">माहिती टॅब निवडा:</Text>
        {allTabs.map((tab) => (
          <View key={tab.key} className="flex-row items-center mb-1">
            <Checkbox
              value={selectedTabs.includes(tab.key)}
              onValueChange={() => toggleTab(tab.key)}
              color={selectedTabs.includes(tab.key) ? '#2563EB' : undefined}
            />
            <Text className="ml-2">{tab.label}</Text>
          </View>
        ))}
      </View>

      {/* Student List */}
      <View className="border border-gray-300 rounded p-2 bg-gray-50">
        {filteredStudents.map((student) => (
          <View key={student.id} className="border-b border-gray-300 pb-2 mb-2">
            {selectedTabs.map((tab) => (
              <Text key={tab} className="text-sm">
                <Text className="font-semibold">{allTabs.find(t => t.key === tab)?.label}:</Text> {student[tab]}
              </Text>
            ))}
          </View>
        ))}
      </View>

      {/* Print Button */}
      <TouchableOpacity className="mt-4 bg-blue-600 p-3 rounded items-center">
        <Text className="text-white font-semibold">प्रिंट करा</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
