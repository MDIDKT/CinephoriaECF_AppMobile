import {SafeAreaView, StyleSheet, Text, View} from "react-native"
import {Link} from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen. Modi</Text>
      <Link href="/about">A propos</Link>
        <Link href="/avis"></Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex:1
  },
});