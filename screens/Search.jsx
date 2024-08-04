import { View,SafeAreaView, Text, StatusBar, KeyboardAvoidingView, TouchableNativeFeedback } from 'react-native'
import React from 'react'
export default function Search() {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <StatusBar/>
        <TouchableNativeFeedback>
          <Text>
            Hello
          </Text>
        </TouchableNativeFeedback>
      </KeyboardAvoidingView>
  </SafeAreaView>
  )
}