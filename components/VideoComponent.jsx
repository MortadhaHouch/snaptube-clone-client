import { View,Text, Button,TouchableOpacity, ActivityIndicator,StyleSheet } from 'react-native'
import React,{useRef,useState} from 'react'
import {Video} from "expo-av"
import {stylesheet} from "../utils/stylesheet"
import {Entypo, FontAwesome} from "@expo/vector-icons"
export default function VideoComponent() {
    let [isLooping,setIsLooping] = useState(false);
    let [isPlayed,setIsPlayed] = useState(false);
    let [isMuted,setIsMuted] = useState(false);
    let [videoDuration,setVideoDuration] = useState(0);
    let [isLoading,setIsLoading] = useState(true);
    let videoRef = useRef(null);
    return (
        <View style={stylesheet.videoContainer}>
            {
                isLoading?(
                    <View style={stylesheet.loadingScreen}>
                        <ActivityIndicator color="red" size={25} style={StyleSheet.absoluteFillObject}/>
                    </View>
                ):(
                <View style={stylesheet.toolbox}>
                    <TouchableOpacity onPress={async()=>{
                        setIsPlayed((val)=>!val);
                        if(isPlayed){
                            await videoRef.current.pauseAsync();
                        }else{
                            await videoRef.current.playAsync();
                        }
                    }}>
                        {
                            isPlayed?(
                                <FontAwesome name="play" size={20}/>
                            ):(
                                <FontAwesome name="pause" size={20}/>
                            )
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={async()=>{
                        setIsMuted((val)=>!val);
                        videoRef.current.setIsMutedAsync();
                    }}>
                        {
                            isMuted?(
                                <Entypo name="sound" size={20}/>
                            ):(
                                <Entypo name="sound-mute" size={20}/>
                            )
                        }
                    </TouchableOpacity>
                    <TouchableOpacity  
                        onPress={async()=>{
                            setIsLooping((val)=>!val);
                            videoRef.current.setIsLoopingAsync();
                        }}>
                        {
                            isLooping?(
                                <FontAwesome name="repeat" size={20}/>
                            ):(
                                <FontAwesome name="repeat" size={20}/>
                            )
                        }
                    </TouchableOpacity>
                </View>
                )
            }
            <Video
                style={stylesheet.video}
                ref={videoRef}
                shouldPlay={isPlayed}
                source={props.videoUrl}
                isLooping={isLooping}
                isMuted={isMuted}
                onPlaybackStatusUpdate={(e)=>{setIsLoading(e.isLoaded)}}
                volume={{}}
                positionMillis={5000}
                progressUpdateIntervalMillis={2000}
                shouldCorrectPitch={true}
            />
        </View>
    )
}