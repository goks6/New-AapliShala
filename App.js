// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HeadmasterDashboard from './src/screens/HeadmasterDashboard';
import AddTeacher from './src/screens/AddTeacher';
import AddStudent from './src/screens/AddStudent';
import StudentList from './src/screens/StudentList';
import TodayAttendance from './src/screens/TodayAttendance';
import TodayPrayer from './src/screens/TodayPrayer';
import MidDayMeal from './src/screens/MidDayMeal';
import ViewResult from './src/screens/ViewResult';
import ResetPassword from './src/screens/ResetPassword';
import ChangePassword from './src/screens/ChangePassword';
import Notifications from './src/screens/Notifications';
import Events from './src/screens/Events';
import Holidays from './src/screens/Holidays';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HeadmasterDashboard" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="HeadmasterDashboard" component={HeadmasterDashboard} options={{ title: 'मुख्याध्यापक डॅशबोर्ड' }} />
        <Stack.Screen name="AddTeacher" component={AddTeacher} options={{ title: 'शिक्षक जोडा' }} />
        <Stack.Screen name="AddStudent" component={AddStudent} options={{ title: 'विद्यार्थी जोडा' }} />
        <Stack.Screen name="StudentList" component={StudentList} options={{ title: 'विद्यार्थी यादी' }} />
        <Stack.Screen name="TodayAttendance" component={TodayAttendance} options={{ title: 'आजची उपस्थिती' }} />
        <Stack.Screen name="TodayPrayer" component={TodayPrayer} options={{ title: 'परिपाठ' }} />
        <Stack.Screen name="MidDayMeal" component={MidDayMeal} options={{ title: 'पोषण आहार' }} />
        <Stack.Screen name="ViewResult" component={ViewResult} options={{ title: 'निकाल पहा' }} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ title: 'पासवर्ड रीसेट करा' }} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ title: 'पासवर्ड बदला' }} />
        <Stack.Screen name="Notifications" component={Notifications} options={{ title: 'सूचना' }} />
        <Stack.Screen name="Events" component={Events} options={{ title: 'कार्यक्रम' }} />
        <Stack.Screen name="Holidays" component={Holidays} options={{ title: 'सुट्ट्या' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
