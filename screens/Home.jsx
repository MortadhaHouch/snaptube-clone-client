import {SafeAreaView, View, Text, StatusBar, KeyboardAvoidingView, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import VideoComponent from '../components/VideoComponent'

export default function Home() {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <StatusBar/>
        <TouchableNativeFeedback>
          <VideoComponent/>
        </TouchableNativeFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}