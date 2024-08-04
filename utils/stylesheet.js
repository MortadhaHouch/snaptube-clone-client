import {Dimensions, StyleSheet} from "react-native"
export const stylesheet = StyleSheet.create({
    videoContainer:{
        width:"auto",
        height:"auto",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        position:"relative"
    },
    video:{
        width: Dimensions.get("window"),
        height: 300,
    },
    toolbox:{
        width: "100%",
        height:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        top:0,
        left:0,
        zIndex:10
    },
    loadingScreen:{
        width: "100%",
        height:"100%",
        position:"absolute",
        top:0,
        left:0,
        zIndex:10
    }
})