import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
  const [url, setUrl] = useState('');
  const [qrValue, setQrValue] = useState('');

  const generate = () => {
    const trimmed = url.trim();
    if (trimmed.length === 0) return;
    setQrValue(trimmed);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.flex}
      >
        <Text style={styles.title}>URL → QR Code</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter a URL (e.g. https://example.com)"
          placeholderTextColor="#888"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="url"
          value={url}
          onChangeText={setUrl}
          onSubmitEditing={generate}
          returnKeyType="done"
        />

        <TouchableOpacity style={styles.button} onPress={generate}>
          <Text style={styles.buttonText}>Generate QR Code</Text>
        </TouchableOpacity>

        <View style={styles.qrWrapper}>
          {qrValue.length > 0 ? (
            <QRCode value={qrValue} size={220} backgroundColor="white" color="black" />
          ) : (
            <Text style={styles.placeholder}>Your QR code will appear here</Text>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  flex: {flex: 1, padding: 24, justifyContent: 'flex-start'},
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 14,
    color: '#000'
  },
  button: {
    backgroundColor: '#111',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {color: '#fff', fontSize: 16, fontWeight: '600'},
  qrWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 240,
  },
  placeholder: {color: '#999', fontSize: 14},
});
