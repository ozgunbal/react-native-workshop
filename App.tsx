import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';

import Form from './Form';

/*
  Add navigation and move another page after login
*/
const App = () => {
  const { t } = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: "white",
  };

  return (
    <I18nextProvider i18n={i18n}>
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              {t('welcome_message')}
            </Text>
          </View>
          <Form />
      </ScrollView>
    </SafeAreaView>
    </I18nextProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
