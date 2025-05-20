import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

export function TestScreen() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  // Custom Input Toolbar
  const renderCustomInputToolbar = props => {
    return (
      <View style={styles.inputContainer}>
        {/* Link Icon */}
        <Fontisto name="link" color="rgba(163, 163, 163, 1)" size={22} style={{ bottom: 7 }} />

        {/* Text Input */}
        <View style={styles.customInput}>
          <TextInput
            style={styles.textInput}
            value={inputMessage}
            onChangeText={setInputMessage}
            placeholder="Type a message..."
            placeholderTextColor="rgba(163, 163, 163, 1)"
            multiline
          />

          {/* Send Button */}
          <TouchableOpacity onPress={() => handleSendMessage(props)}>
            <Feather name="send" size={18} color={'white'} style={{ top: 1, right:3 }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // Handle Send Message
  const handleSendMessage = props => {
    if (inputMessage.trim().length > 0) {
      const newMessage = {
        _id: Math.random().toString(),
        text: inputMessage,
        createdAt: new Date(),
        user: {
          _id: 1,
        },
      };
      onSend([newMessage]);
      setInputMessage('');
    }
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    //   renderInputToolbar={renderCustomInputToolbar} // Custom toolbar
    />
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222', // Dark background
    padding: 10,
    borderTopColor: '#444',
    paddingVertical:20
  },
  customInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333', // Input box color
    borderRadius: 20,
    paddingHorizontal: 10,
    flex: 1,
    marginLeft: 10,
    bottom:5
  },
  textInput: {
    flex: 1,
    color: 'white',
    paddingVertical: 5,
  },
});


// {/* <TouchableWithoutFeedback onPress={() => setOptionsVisible(false)}> */}

import { RNFetchBlobSession } from "rn-fetch-blob";

// {
//   (message?.image) ? (
//     <>
//       {
//         message?.image?.name === 'image.jpg' ? <>

//           <View style={{
//             alignItems:'center',
//             marginVertical: 3, flexDirection: 'row', justifyContent: message.sentBy === profileInfo?.profileData?.userID?._id ? 'flex-end' : 'flex-start', backgroundColor: optionsVisible && longPress === message?.id ? 'rgba(220, 219, 219, 0.3)' : 'transparent',
//           }}>
//             {
//               message.sentBy === profileInfo?.profileData?.userID?._id && (
//                 <TouchableOpacity style={{ top: 10, right: 8, }} onPress={() => handleLongPress(message?.id)}>
//                   <Image source={require('../../../../assets/images/Home/chat-emoji.png')} resizeMode='contain' style={{ width: 20, height: 20 }} />
//                 </TouchableOpacity>
//               )
//             }
//             <View>

//               {
//                 optionsVisible && longPress === message?.id ?
//                   <>
//                     <View style={{ width: 250, backgroundColor: 'rgba(51, 51, 55, 1)', borderRadius: 20, alignSelf: message.sentBy === profileInfo?.profileData?.userID?._id ? 'flex-end' : 'flex-start', zIndex: 9999999, alignItems: 'center', flexDirection: 'row', paddingVertical: 3, justifyContent: 'space-between', paddingHorizontal: 8, marginRight: message.sentBy === profileInfo?.profileData?.userID?._id ? 15 : 0, left:message.sentBy === profileInfo?.profileData?.userID?._id ? 0 : 15 }}>
//                       {defaultEmojis.map((emoji, index) => (
//                         <TouchableOpacity key={index} onPress={() => handleEmojiSelect(emoji, message.id)}
//                         >
//                           <Text style={{ fontSize: 20, }}>{emoji}</Text>
//                         </TouchableOpacity>
//                       ))}
//                       <TouchableOpacity onPress={() => setModalVisible5(true)}>
//                         <Feather name='chevron-down' size={22} color={'rgba(255, 255, 255, 0.5)'} />
//                       </TouchableOpacity>
//                     </View>

//                     <Modal visible={modalVisible5} animationType="slide" transparent={false}>
//                       <View style={{ height: height, width: '100%', backgroundColor: COLORS.backgroundColor, paddingTop: 20 }}>
//                         <TouchableOpacity
//                           onPress={() => setModalVisible5(false)}
//                           style={{ alignSelf: 'flex-end', padding: 6, backgroundColor: 'rgba(51, 51, 55, 1)', borderRadius: 20, right: 10 }}
//                         >
//                           <Feather name="x" size={24} color="white" />
//                         </TouchableOpacity>
//                         <EmojiSelector
//                           onEmojiSelected={(emoji) => {
//                             setSelectedEmoji(prev => ({
//                               ...prev,
//                               [longPress]: emoji,
//                             }));
//                             setModalVisible5(false);
//                             setOptionsVisible(false);
//                           }}

//                           showHistory
//                           showSearchBar={false}
//                           showTabs
//                           theme='dark'
//                           columns={8}

//                         />
//                       </View>
//                     </Modal>
//                   </>
//                   : <></>
//               }

//               <TouchableOpacity onLongPress={() => handleLongPress(message?.id)} onPress={() => {
//                 handleImageView(message?.image?.uri),
//                   setOptionsVisible(false)
//               }
//               }
//                 style={[{
//                   alignSelf: message.sentBy === profileInfo?.profileData?.userID?._id ? 'flex-end' : 'flex-start',
//                   // backgroundColor: optionsVisible && longPress === message?.id ? 'rgba(220, 219, 219, 0.3)' : 'transparent',
//                   width: optionsVisible && longPress === message?.id ? '100%' : 200,
//                   paddingRight: optionsVisible && longPress === message?.id ? 20 : 0,
//                   paddingLeft: optionsVisible && longPress === message?.id && message.sentBy != profileInfo?.profileData?.userID?._id ? 20 : 0
//                 }]}>
//                 <Image
//                   source={{ uri: message?.image?.uri }}
//                   resizeMode="cover"
//                   style={[
//                     {
//                       width: 200,
//                       height: 300,
//                       borderWidth: 2,
//                       borderColor:
//                         message.sentBy === profileInfo?.profileData?.userID?._id
//                           ? 'rgba(51, 51, 55, 1)'
//                           : 'white',
//                       marginVertical: 6,
//                       borderRadius: 14,
//                     },
//                     message.sentBy === profileInfo?.profileData?.userID?._id
//                       ? styles.sentMessage
//                       : styles.receivedMessage,
//                   ]}
//                 />
//               </TouchableOpacity>


//               <Text
//                 style={{
//                   color: 'rgb(56, 53, 53)',
//                   fontSize: 10,
//                   fontFamily: 'Roboto-Regular',
//                   alignSelf: message.sentBy === profileInfo?.profileData?.userID?._id ? 'flex-end' : 'flex-start',
//                   bottom: 30,
//                   left: message.sentBy === profileInfo?.profileData?.userID?._id ? -10 : 160
//                 }}
//               >
//                 {/* {formattedTime} */}
//               </Text>
//               {selectedEmoji[message.id] && (
//                 <Text style={{ fontSize: 18, alignSelf: message.sentBy === profileInfo?.profileData?.userID?._id ? 'flex-end' : 'flex-start', bottom: 34 }}>
//                   {selectedEmoji[message.id]}
//                 </Text>
//               )}
//             </View>
//             {
//               message.sentBy !== profileInfo?.profileData?.userID?._id && (
//                 <TouchableOpacity style={{ top: 10, left: 5 }}
//                 // onPress={() => handleLongPress(message?.id)}
//                 >
//                   <Image source={require('../../../../assets/images/Home/reply-arrow.png')} resizeMode='contain' style={{ width: 20, height: 20 }} />
//                 </TouchableOpacity>
//               )
//             }
//             {
//               message.sentBy !== profileInfo?.profileData?.userID?._id && (
//                 <TouchableOpacity style={{ top: 10, left: 8 }} onPress={() => handleLongPress(message?.id)}>
//                   <Image source={require('../../../../assets/images/Home/chat-emoji.png')} resizeMode='contain' style={{ width: 20, height: 20 }} />
//                 </TouchableOpacity>
//               )
//             }



//           </View>

//         </>
//           :
//           <></>
//         // <>
//         //   <Video
//         //     source={{ uri: message?.image?.uri }}
//         //     paused={true}
//         //     ref={videoRef}
//         //     resizeMode="cover"
//         //     onBuffer={onBuffer}

//         //     // repeat={true}
//         //     // muted={true}
//         //     // controls={message.sentBy === profileInfo?.profileData?.userID?._id || downloadedFile2 === message?.image?.uri ? true : false}
//         //     controlsStyles={{}}
//         //     // controls={false}
//         //     style={[
//         //       {
//         //         width: 200,
//         //         height: 300,
//         //         borderWidth: 3,
//         //         borderColor:
//         //           message.sentBy === profileInfo?.profileData?.userID?._id
//         //             ? 'rgba(51, 51, 55, 1)'
//         //             : 'white',
//         //         marginVertical: 6,
//         //         borderRadius: 4,
//         //         overflow: 'hidden'
//         //       },
//         //       message.sentBy === profileInfo?.profileData?.userID?._id
//         //         ? styles.sentMessage
//         //         : styles.receivedMessage,
//         //     ]}
//         //   />
//         //   {
//         //     message.sentBy === profileInfo?.profileData?.userID?._id ? <>
//         //       <TouchableOpacity style={{
//         //         alignSelf: 'flex-end', bottom: 160,
//         //         left: -90
//         //       }}
//         //         onPress={() => handleVideoView(message?.image?.uri)}>
//         //         <AntDesign name='play' color={'rgba(51, 51, 55, 1)'} size={30} />
//         //       </TouchableOpacity>
//         //     </>
//         //       :
//         //       loading2 === message?.image?.uri ?
//         //         <ActivityIndicator size="small" color="rgba(163, 163, 163, 1)" style={{ bottom: 10 }} />
//         //         :
//         //         <TouchableOpacity style={{
//         //           alignSelf: 'flex-start', bottom: 160,
//         //           left: 90
//         //         }}
//         //           onPress={() => downloadVideo(message?.image?.uri)} >
//         //           <AntDesign name='download' color={'white'} size={30} />
//         //         </TouchableOpacity>

//         //   }
//         //   <Text
//         //     style={{
//         //       color: 'rgb(56, 53, 53)',
//         //       fontSize: 10,
//         //       fontFamily: 'Roboto-Regular',
//         //       alignSelf: message.sentBy === profileInfo?.profileData?.userID?._id ? 'flex-end' : 'flex-start',
//         //       bottom: 60,
//         //       left: message.sentBy === profileInfo?.profileData?.userID?._id ? -10 : 160
//         //     }}
//         //   >
//         //     {formattedTime}
//         //   </Text>
//         //   {/* {isBuffering && (
//         //     <View style={{ bottom: 20 }}>
//         //       <ActivityIndicator size="small" color="#fff" />
//         //     </View>
//         //   )} */}


//         //   {
//         //     message.sentBy === profileInfo?.profileData?.userID?._id ? null :
//         //       // downloadedFile === message?.document?.uri ? null :
//         //       loading2 === message?.image?.uri ? <>
//         //         <ActivityIndicator size="small" color="rgba(163, 163, 163, 1)" style={{ bottom: 10 }} />
//         //       </> : <>
//         //         <TouchableOpacity style={{ bottom: 10, left: 5 }} onPress={() => downloadVideo(message?.image?.uri)}>
//         //           <Feather name='download' size={16} color={'rgba(163, 163, 163, 1)'} />
//         //         </TouchableOpacity>
//         //       </>
//         //   }
//         // </>
//       }
//     </>
//   ) : message.text ? (

//     <>


//       <View style={{ backgroundColor: optionsVisible && longPress === message?.id ? 'rgba(255, 255, 255, 0.3)' : 'transparent', marginVertical: 3, flexDirection: 'row', justifyContent: message.sentBy === profileInfo?.profileData?.userID?._id ? 'flex-end' : 'flex-start', }}>
//         {
//           message.sentBy === profileInfo?.profileData?.userID?._id && (
//             <TouchableOpacity style={{ top: 10, right: 8 }} onPress={() => handleLongPress(message?.id)}>
//               <Image source={require('../../../../assets/images/Home/chat-emoji.png')} resizeMode='contain' style={{ width: 20, height: 20 }} />
//             </TouchableOpacity>
//           )
//         }

//         <TouchableOpacity onLongPress={() => handleLongPress(message?.id)} style={{ alignSelf: message.sentBy === profileInfo?.profileData?.userID?._id ? 'flex-end' : 'flex-start', 
//           // paddingRight: optionsVisible && longPress === message?.id ? 20 : 0, paddingLeft: optionsVisible && longPress === message?.id && message.sentBy != profileInfo?.profileData?.userID?._id ? 20 : 0 
//           }} onPress={() => setOptionsVisible(false)}>


//           {
//             optionsVisible && longPress === message?.id ?
//               <>
//                 <View style={{ width: 250, backgroundColor: 'rgba(51, 51, 55, 1)', borderRadius: 20, alignSelf: message.sentBy === profileInfo?.profileData?.userID?._id ? 'flex-end' : 'flex-start', zIndex: 9999999, alignItems: 'center', flexDirection: 'row', paddingVertical: 3, justifyContent: 'space-between', paddingHorizontal: 8, marginVertical: 5 }}>
//                   {defaultEmojis.map((emoji, index) => (
//                     <TouchableOpacity key={index} onPress={() => handleEmojiSelect(emoji, message.id)}
//                     >
//                       <Text style={{ fontSize: 20, }}>{emoji}</Text>
//                     </TouchableOpacity>
//                   ))}
//                   <TouchableOpacity onPress={() => setModalVisible5(true)}>
//                     <Feather name='chevron-down' size={22} color={'rgba(255, 255, 255, 0.5)'} />
//                   </TouchableOpacity>
//                 </View>

//                 <Modal visible={modalVisible5} animationType="slide" transparent={false}>
//                   <View style={{ height: height, width: '100%', backgroundColor: COLORS.backgroundColor, paddingTop: 20 }}>
//                     <TouchableOpacity
//                       onPress={() => setModalVisible5(false)}
//                       style={{ alignSelf: 'flex-end', padding: 6, backgroundColor: 'rgba(51, 51, 55, 1)', borderRadius: 20, right: 10 }}
//                     >
//                       <Feather name="x" size={24} color="white" />
//                     </TouchableOpacity>
//                     <EmojiSelector
//                       onEmojiSelected={(emoji) => {
//                         setSelectedEmoji(prev => ({
//                           ...prev,
//                           [longPress]: emoji,
//                         }));
//                         setModalVisible5(false);
//                         setOptionsVisible(false);
//                       }}

//                       showHistory
//                       showSearchBar={false}
//                       showTabs
//                       theme='dark'
//                       columns={8}

//                     />
//                   </View>
//                 </Modal>
//               </>
//               : <></>
//           }

//           <View style={[{
//             backgroundColor: message.sentBy === profileInfo?.profileData?.userID?._id ? 'rgba(51, 51, 55, 1)' : 'white',
//             borderBottomRightRadius: message.sentBy === profileInfo?.profileData?.userID?._id ? 0 : 16,
//             borderBottomLeftRadius: message.sentBy !== profileInfo?.profileData?.userID?._id ? 0 : 16,
//             maxWidth: '100%',
//             marginBottom: 10,
//             padding: 10,
//             borderRadius: 15,
//           },


//           ]}>

//             <Text
//               style={{
//                 color:
//                   message.sentBy === profileInfo?.profileData?.userID?._id
//                     ? 'white'
//                     : 'black',
//                 fontSize: 14,
//                 fontFamily: 'Roboto-Regular',
//               }}
//             >
//               {message.text}
//             </Text>
//             <Text
//               style={{
//                 color: 'rgba(163, 163, 163, 1)',
//                 fontSize: 10,
//                 fontFamily: 'Roboto-Regular',
//                 marginTop: 10,
//                 alignSelf: 'flex-end',
//               }}
//             >
//               {formattedTime}
//             </Text>
//           </View>
//           {selectedEmoji[message.id] && (
//             <Text style={{ fontSize: 18, alignSelf: message.sentBy === profileInfo?.profileData?.userID?._id ? 'flex-end' : 'flex-start', bottom: 20 }}>
//               {selectedEmoji[message.id]}
//             </Text>
//           )}
//         </TouchableOpacity>
//         {
//           message.sentBy !== profileInfo?.profileData?.userID?._id && (
//             <TouchableOpacity style={{ top: 10, left: 5 }}
//             // onPress={() => handleLongPress(message?.id)}
//             >
//               <Image source={require('../../../../assets/images/Home/reply-arrow.png')} resizeMode='contain' style={{ width: 20, height: 20 }} />
//             </TouchableOpacity>
//           )
//         }
//         {
//           message.sentBy !== profileInfo?.profileData?.userID?._id && (
//             <TouchableOpacity style={{ top: 10, left: 8 }} onPress={() => handleLongPress(message?.id)}>
//               <Image source={require('../../../../assets/images/Home/chat-emoji.png')} resizeMode='contain' style={{ width: 20, height: 20 }} />
//             </TouchableOpacity>
//           )
//         }
//       </View>
//     </>
//   ) : message.replyText ? (

//     <>

//       <View style={{ backgroundColor: optionsVisible && longPress === message?.id ? 'rgba(255, 255, 255, 0.3)' : 'transparent', marginVertical: 3 }}>
//         <TouchableOpacity onLongPress={() => handleLongPress(message?.id)} style={{ alignSelf: message.sentBy === profileInfo?.profileData?.userID?._id ? 'flex-end' : 'flex-start', paddingRight: optionsVisible && longPress === message?.id ? 20 : 0, paddingLeft: optionsVisible && longPress === message?.id && message.sentBy != profileInfo?.profileData?.userID?._id ? 20 : 0 }} onPress={() => setOptionsVisible(false)}>


//           {
//             optionsVisible && longPress === message?.id ?
//               <>
//                 <View style={{ width: 250, backgroundColor: 'rgba(51, 51, 55, 1)', borderRadius: 20, alignSelf: message.sentBy === profileInfo?.profileData?.userID?._id ? 'flex-end' : 'flex-start', zIndex: 9999999, alignItems: 'center', flexDirection: 'row', paddingVertical: 3, justifyContent: 'space-between', paddingHorizontal: 8, marginVertical: 5 }}>
//                   {defaultEmojis.map((emoji, index) => (
//                     <TouchableOpacity key={index} onPress={() => handleEmojiSelect(emoji, message.id)}
//                     >
//                       <Text style={{ fontSize: 20, }}>{emoji}</Text>
//                     </TouchableOpacity>
//                   ))}
//                   <TouchableOpacity onPress={() => setModalVisible5(true)}>
//                     <Feather name='chevron-down' size={22} color={'rgba(255, 255, 255, 0.5)'} />
//                   </TouchableOpacity>
//                 </View>

//                 <Modal visible={modalVisible5} animationType="slide" transparent={false}>
//                   <View style={{ height: height, width: '100%', backgroundColor: COLORS.backgroundColor, paddingTop: 20 }}>
//                     <TouchableOpacity
//                       onPress={() => setModalVisible5(false)}
//                       style={{ alignSelf: 'flex-end', padding: 6, backgroundColor: 'rgba(51, 51, 55, 1)', borderRadius: 20, right: 10 }}
//                     >
//                       <Feather name="x" size={24} color="white" />
//                     </TouchableOpacity>
//                     <EmojiSelector
//                       onEmojiSelected={(emoji) => {
//                         setSelectedEmoji(prev => ({
//                           ...prev,
//                           [longPress]: emoji,
//                         }));
//                         setModalVisible5(false);
//                         setOptionsVisible(false);
//                       }}

//                       showHistory
//                       showSearchBar={false}
//                       showTabs
//                       theme='dark'
//                       columns={8}

//                     />
//                   </View>
//                 </Modal>
//               </>
//               : <></>
//           }

//           <View
//             key={idx}
//             style={[
//               {
//                 maxWidth: '80%',
//                 marginBottom: 10,
//                 borderRadius: 15,
//               },
//               message.sentBy === profileInfo?.profileData?.userID?._id
//                 ? styles.sentMessage
//                 : styles.receivedMessage,
//             ]}
//           >
//             <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', borderTopRightRadius: 16, borderTopLeftRadius: 16, paddingHorizontal: 8, paddingVertical: 5 }}>
//               <Text style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{message?.replyText?.sender}</Text>
//               <Text style={{ fontSize: 11 }}>{message?.replyText?.recieved}</Text>
//             </View>

//             <Text
//               style={{
//                 color:
//                   message.sentBy === profileInfo?.profileData?.userID?._id
//                     ? 'white'
//                     : 'black',
//                 fontSize: 13,
//                 fontFamily: 'Roboto-Regular',
//                 paddingHorizontal: 8,
//                 paddingVertical: 4
//               }}
//             >
//               {message?.replyText?.reply}
//             </Text>
//             <Text
//               style={{
//                 color: 'rgba(163, 163, 163, 1)',
//                 fontSize: 10,
//                 fontFamily: 'Roboto-Regular',
//                 marginTop: 0,
//                 alignSelf: 'flex-end',
//                 paddingHorizontal: 8,
//               }}
//             >
//               {formattedTime}
//             </Text>
//           </View>
//           {selectedEmoji[message.id] && (
//             <Text style={{ fontSize: 18, alignSelf: message.sentBy === profileInfo?.profileData?.userID?._id ? 'flex-end' : 'flex-start', bottom: 20 }}>
//               {selectedEmoji[message.id]}
//             </Text>
//           )}
//         </TouchableOpacity>
//       </View>
//     </>
//   ) : message?.document ? (
//     <>


//       <View style={{ backgroundColor: optionsVisible && longPress === message?.id ? 'rgba(255, 255, 255, 0.3)' : 'transparent', marginVertical: 3, flexDirection: 'row', justifyContent: message.sentBy === profileInfo?.profileData?.userID?._id ? 'flex-end' : 'flex-start', flex: 1}}>
//         {
//           message.sentBy === profileInfo?.profileData?.userID?._id && (
//             <TouchableOpacity style={{ top: 10, right: 8 }} onPress={() => handleLongPress(message?.id)}>
//               <Image source={require('../../../../assets/images/Home/chat-emoji.png')} resizeMode='contain' style={{ width: 20, height: 20 }} />
//             </TouchableOpacity>
//           )
//         }
//         <TouchableOpacity onLongPress={() => handleLongPress(message?.id)} 
//         style={{ alignSelf: message.sentBy === profileInfo?.profileData?.userID?._id ? 'flex-end' : 'flex-start', paddingRight: optionsVisible && longPress === message?.id ? 20 : 0, paddingLeft: optionsVisible && longPress === message?.id && message.sentBy != profileInfo?.profileData?.userID?._id ? 20 : 0 }} 
//         onPress={() => setOptionsVisible(false)}>
//           {
//             optionsVisible && longPress === message?.id ?
//               <>
//                 <View style={{ width: 250, backgroundColor: 'rgba(51, 51, 55, 1)', borderRadius: 20, alignSelf: message.sentBy === profileInfo?.profileData?.userID?._id ? 'flex-end' : 'flex-start', zIndex: 9999999, alignItems: 'center', flexDirection: 'row', paddingVertical: 3, justifyContent: 'space-between', paddingHorizontal: 8, marginVertical: 5 }}>
//                   {defaultEmojis.map((emoji, index) => (
//                     <TouchableOpacity key={index} onPress={() => handleEmojiSelect(emoji, message.id)}
//                     >
//                       <Text style={{ fontSize: 20, }}>{emoji}</Text>
//                     </TouchableOpacity>
//                   ))}
//                   <TouchableOpacity onPress={() => setModalVisible5(true)}>
//                     <Feather name='chevron-down' size={22} color={'rgba(255, 255, 255, 0.5)'} />
//                   </TouchableOpacity>
//                 </View>

//                 <Modal visible={modalVisible5} animationType="slide" transparent={false}>
//                   <View style={{ height: height, width: '100%', backgroundColor: COLORS.backgroundColor, paddingTop: 20 }}>
//                     <TouchableOpacity
//                       onPress={() => setModalVisible5(false)}
//                       style={{ alignSelf: 'flex-end', padding: 6, backgroundColor: 'rgba(51, 51, 55, 1)', borderRadius: 20, right: 10 }}
//                     >
//                       <Feather name="x" size={24} color="white" />
//                     </TouchableOpacity>
//                     <EmojiSelector
//                       onEmojiSelected={(emoji) => {
//                         setSelectedEmoji(prev => ({
//                           ...prev,
//                           [longPress]: emoji,
//                         }));
//                         setModalVisible5(false);
//                         setOptionsVisible(false);
//                       }}
//                       showHistory
//                       showSearchBar={false}
//                       showTabs
//                       theme='dark'
//                       columns={8}

//                     />
//                   </View>
//                 </Modal>
//               </>
//               : <></>
//           }
//           <View style={[{
//             flexDirection: 'row', alignItems: 'center',
//             backgroundColor: message.sentBy === profileInfo?.profileData?.userID?._id ? 'rgba(51, 51, 55, 1)' : 'white',
//             borderBottomRightRadius: message.sentBy === profileInfo?.profileData?.userID?._id ? 0 : 16,
//             borderBottomLeftRadius: message.sentBy !== profileInfo?.profileData?.userID?._id ? 0 : 16,
//             maxWidth: '100%',
//             marginBottom: 10,
//             padding: 10,
//             borderRadius: 15,
//           },


//           ]}>
//             <Image
//               source={require('../../../../assets/images/Home/DoksIcon.png')}
//               resizeMode="cover"
//               style={{
//                 width: 40,
//                 height: 40,
//                 alignSelf:
//                   message.sentBy === profileInfo?.profileData?.userID?._id
//                     ? 'flex-end'
//                     : 'flex-start',
//                 bottom: message.sentBy === profileInfo?.profileData?.userID?._id ? 6 : 0
//               }}
//             />
//             <View>

//               <TouchableOpacity
//                 onPress={() => downloadedFile === message?.document?.uri ? fileView() : downloadFile(message?.document?.uri)}
//                 style={{
//                   padding: 6,
//                   borderRadius: 6,
//                   alignSelf: 'flex-start',
//                   bottom: message.sentBy === profileInfo?.profileData?.userID?._id ? 0 : 3,
//                 }}
//               >
//                 <Text
//                   style={{
//                     color: message.sentBy === profileInfo?.profileData?.userID?._id ? COLORS.heading : 'black',
//                     fontSize: 12,
//                     fontFamily: 'Roboto-Regular',
//                   }}
//                 >
//                   {message?.document?.name}
//                 </Text>
//               </TouchableOpacity>
//               <Text
//                 style={{
//                   color: 'rgba(163, 163, 163, 1)',
//                   fontSize: 10,
//                   fontFamily: 'Roboto-Regular',
//                   alignSelf: 'flex-start',
//                   bottom: message.sentBy === profileInfo?.profileData?.userID?._id ? 6 : 9,
//                   left: 8
//                 }}
//               >
//                 {formattedTime}
//               </Text>
//             </View>
//             {
//               message.sentBy === profileInfo?.profileData?.userID?._id ? null :
//                 downloadedFile === message?.document?.uri ? null :
//                   loading === message?.document?.uri ? <>
//                     <ActivityIndicator size="small" color="rgba(163, 163, 163, 1)" style={{ bottom: 10 }} />
//                   </> : <>
//                     <TouchableOpacity style={{ bottom: 10, left: 3 }} onPress={() => downloadFile(message?.document?.uri)}>
//                       <Feather name='download' size={16} color={'rgba(163, 163, 163, 1)'} />
//                     </TouchableOpacity>
//                   </>
//             }

//           </View>
//           {selectedEmoji[message.id] && (
//             <Text style={{ fontSize: 18, alignSelf: message.sentBy === profileInfo?.profileData?.userID?._id ? 'flex-end' : 'flex-start', bottom: 24, }}>
//               {selectedEmoji[message.id]}
//             </Text>
//           )}
//         </TouchableOpacity>
//         {
//           message.sentBy !== profileInfo?.profileData?.userID?._id && (
//             <TouchableOpacity style={{ top: 10, left: 5 }}
//             // onPress={() => handleLongPress(message?.id)}
//             >
//               <Image source={require('../../../../assets/images/Home/reply-arrow.png')} resizeMode='contain' style={{ width: 20, height: 20 }} />
//             </TouchableOpacity>
//           )
//         }
//         {
//           message.sentBy !== profileInfo?.profileData?.userID?._id && (
//             <TouchableOpacity style={{ top: 10, left: 8 }} onPress={() => handleLongPress(message?.id)}>
//               <Image source={require('../../../../assets/images/Home/chat-emoji.png')} resizeMode='contain' style={{ width: 20, height: 20 }} />
//             </TouchableOpacity>
//           )
//         }
//       </View>

//     </>
//   ) : null}
// {/* </TouchableWithoutFeedback> */}