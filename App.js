// import React, { useEffect, useState } from "react"
// import {
//   LogBox,
//   Platform,
//   SafeAreaView,
//   StatusBar,
//   View,
// } from "react-native"
// import "react-native-gesture-handler"
// // import Toast from "react-native-simple-toast"
// import {
//   registerDevice,
// } from "./api/auth"
// import RootStackNav from "./navigation/RootStackNav"
// // import { MenuProvider } from "react-native-popup-menu"
// import { StripeProvider } from "@stripe/stripe-react-native"
// import { COLORS } from "./constants"
// import { request, PERMISSIONS } from "react-native-permissions"
// import { store } from "./store"
// import { Provider } from 'react-redux';
// import messaging from '@react-native-firebase/messaging';
// import PushNotification from 'react-native-push-notification';
// import PushNotificationIOS from "@react-native-community/push-notification-ios"
// import { GetFCMToken } from "./utils/notification"
// // import mobileAds from "react-native-google-mobile-ads"
// function App() {
//   LogBox.ignoreAllLogs()
//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     PushNotification.createChannel({
//       channelId: 'com.haroof',
//       channelName: 'com.haroof'
//     })
//     messaging()
//       .getInitialNotification()
//       .then(remoteMessage => {
//         setTimeout(() => {
//           if (remoteMessage?.notification?.title) {
//           }
//         }, 2000)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//     messaging().onNotificationOpenedApp(async remoteMessage => {
//       console.log('Message handled in the background!', remoteMessage)
//     })

//     const unsubscribe = messaging().onMessage(async remoteMessage => {
//       var localNotification = {
//         id: 0,
//         title: remoteMessage.notification.title,
//         message: remoteMessage.notification.body
//         // data: remoteMessage.data
//       }

//       Platform.OS == 'android' &&
//         (localNotification = {
//           ...localNotification,
//           channelId: 'com.haroof'
//         })
//       PushNotification.localNotification(localNotification)
//       const handleNotification = (data, notification) => {
//         console.info("Handling notification:", data, notification);
//         // Toast.show(`Notification received: ${notification?.title}`);
//       };
//       GetFCMToken(handleNotification);
//       PushNotification.configure({
//         onRegister: function (token) {
//           console.warn('TOKEN:', token)
//         },
//         onNotification: function (notification) {
//           const { data, title } = notification
//           notification.finish(PushNotificationIOS.FetchResult.NoData)
//         },
//         onRegistrationError: function (err) {
//           console.warn(err.message, err)
//         },
//         senderID: '368076200148',
//         permissions: {
//           alert: true,
//           badge: true,
//           sound: true
//         },
//         popInitialNotification: true,
//         requestPermissions: true
//       })
//       console.log("A new FCM message arrived!", JSON.stringify(remoteMessage))
//       if (remoteMessage?.notification) {
//         // Toast.show(`${remoteMessage?.notification?.title}: ${remoteMessage?.notification?.body}`);
//       }
//     })
//     messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//       console.info("Background message received:", remoteMessage);

//       // Show local notification
//       if (remoteMessage.notification) {
//         PushNotification.localNotification({
//           channelId: "com.haroof",
//           title: remoteMessage.notification.title || "Default Title",
//           message: remoteMessage.notification.body || "Default Body",
//           userInfo: remoteMessage.data,
//         });
//       }
//     });

//     // Cleanup
//     return unsubscribe
//   }, [])

//   const STATUSBAR_HEIGHT = StatusBar.currentHeight

//   const MyStatusBar = ({ backgroundColor, ...props }) => (
//     <View style={[{ height: STATUSBAR_HEIGHT, backgroundColor }]}>

//       <StatusBar translucent backgroundColor={backgroundColor} {...props} />

//     </View>
//   )

//   return (
//     <Provider store={store}>

//       <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
//         <MyStatusBar
//           backgroundColor={COLORS.white}
//           barStyle="dark-content"
//         />
//         <RootStackNav />
//       </SafeAreaView>

//     </Provider>
//   )
// }
// export default App

import {StyleSheet} from 'react-native';
import React from 'react';
import StackNavigation from './src/routers/StackNavigation';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/screens/redux/store';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
