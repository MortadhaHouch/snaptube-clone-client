import {SafeAreaView, View, Text, StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
export default function Profile() {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <StatusBar/>
        <TouchableWithoutFeedback>
          <Text>
            Hello
          </Text>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}