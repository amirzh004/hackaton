import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    safeAreaContainer: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: Platform.OS === "ios" ? 0 : 0,
    },
    mini_container: {
        height: "30%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        width: "100%",
        bottom: 0,
        backgroundColor: "white",
        position: "absolute",
    },
    mini_images: {
        height: "100%",
        width: "100%",
        borderRadius: 20,
    },
    roundBigImage: {
        height: 140,
        width: 140,
        borderRadius: 70,
    },
    heading: {
        fontSize: 24,
        // fontFamily: "Montserrat-SemiBold",
    },
    description: {
        fontSize: 16,
        // fontFamily: "Montserrat-Regular",
        color: '#5c5c5c',
    },
    fullScreen: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    inrow: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    mapButtons: {
        backgroundColor: "#223681",
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 10
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    scrollByXView: {
        maxHeight: 300, // Adjust as needed
    },
    eventContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    eventsImage: {
        width: 150,
        height: 150,
        backgroundColor: 'gray', // Placeholder for event image
        marginRight: 10,
    },
    iconText: {
        marginTop: 10,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
      input: {
        width: '90%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        alignItems: "center",
        fontSize: 16,
      },
    // montserratRegular: {
    //     fontFamily: 'Montserrat-Regular',
    // },
    // montserratThin: {
    //     fontFamily: 'Montserrat-Thin',
    // },
    // montserratBold: {
    //     fontFamily: 'Montserrat-Bold',
    // },
    // montserratSemiBold: {
    //     fontFamily: 'Montserrat-SemiBold',
    // },
    // montserratExtraBold: {
    //     fontFamily: 'Montserrat-ExtraBold',
    // },
});