import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import IosCalendar from 'react-native-ios-calendar';

const updateEvents = async () => {
  try {
    var events = await IosCalendar.findEvents();
    console.warn(events);
  } catch (e) {
    console.error(e);
  }
};

export default function App() {
  React.useEffect(() => {
    IosCalendar.addEvent('Birthday Party', {
      location: '4 Privet Drive, Surrey',
      time: Date.now(),
      description: 'Everyone invited!',
    });
    updateEvents();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
