import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Image, Animated, Easing } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A7E1F3",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    position: "absolute",
    width: 1000,
    height: 900,
    resizeMode: "contain",
  },
  OverlayImage: {
    position: "absolute",
    width: 500,
    height: 800,
    resizeMode: "contain",
    // Adjust the position as needed
    top: 80,
    left: 20,
  },
});

const Splash = () => {
  const [imagePositions, setImagePositions] = useState([
    { x: 50, y: -200 },
    { x: -100, y: 200 },
    { x: 100, y: 200 },
  ]);

  const image1Position = useRef(new Animated.ValueXY()).current;
  const image2Position = useRef(new Animated.ValueXY()).current;
  const image3Position = useRef(new Animated.ValueXY()).current;

  const animateImages = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(image1Position, {
          toValue: { x: imagePositions[1].x, y: imagePositions[1].y },
          duration: 5000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
        Animated.timing(image2Position, {
          toValue: { x: imagePositions[2].x, y: imagePositions[2].y },
          duration: 5000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
        Animated.timing(image3Position, {
          toValue: { x: imagePositions[0].x, y: imagePositions[0].y },
          duration: 5000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
      Animated.delay(2000),
      Animated.parallel([
        Animated.timing(image1Position, {
          toValue: { x: imagePositions[2].x, y: imagePositions[2].y },
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(image2Position, {
          toValue: { x: imagePositions[0].x, y: imagePositions[0].y },
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(image3Position, {
          toValue: { x: imagePositions[1].x, y: imagePositions[1].y },
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
    ]).start(() => {
      animateImages(); // Recursive call to achieve continuity
    });
  };

  useEffect(() => {
    animateImages(); // Initial call to start the animation
  }, []);

  const images = [
    require("./assets/Vector1.png"),
    require("./assets/Vector2.png"),
    require("./assets/Vector3.png"),
  ];

  const OverlayImage = require("./assets/OverlayImage.png");

  return (
    <View style={styles.container}>
      <Animated.Image
        source={images[0]}
        style={[
          styles.image,
          {
            transform: [
              { translateX: image1Position.x },
              { translateY: image1Position.y },
            ],
          },
        ]}
      />
      <Animated.Image
        source={images[1]}
        style={[
          styles.image,
          {
            transform: [
              { translateX: image2Position.x },
              { translateY: image2Position.y },
            ],
          },
        ]}
      />
      <Animated.Image
        source={images[2]}
        style={[
          styles.image,
          {
            transform: [
              { translateX: image3Position.x },
              { translateY: image3Position.y },
            ],
          },
        ]}
      />
      <Image source={OverlayImage} style={styles.OverlayImage} />
    </View>
  );
};

export default Splash;