import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView,TouchableNativeFeedback } from 'react-native'
import React from 'react'

export default function Download() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <KeyboardAvoidingView>
        <TouchableNativeFeedback>
          <Text>
            Hello
          </Text>
        </TouchableNativeFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}