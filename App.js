import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Cards from './components/Cards';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const containerStyle = isDarkMode ? styles.containerDark : styles.container;
  const headerStyle = isDarkMode ? styles.headerDark : styles.header;
  const titleStyle = isDarkMode ? styles.titleDark : styles.title;
  const subtitleStyle = isDarkMode ? styles.subtitleDark : styles.subtitle;
  const instagramStyle = isDarkMode ? styles.instagramDark : styles.instagram;
  const linkedinStyle = isDarkMode ? styles.linkedinDark : styles.linkedin;
  const githubStyle = isDarkMode ? styles.githubDark : styles.github;

  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/drianodev/')
  };

  const openLinkedin = () => {
    Linking.openURL('https://www.linkedin.com/in/drianodev/')
  };

  const openGithub = () => {
    Linking.openURL('https://github.com/drianodev')
  };

  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={toggleDarkMode} style={styles.mode}>
        <Ionicons name={isDarkMode ? 'sunny' : 'moon'} color={isDarkMode ? 'orange' : 'black'} size={24} />
      </TouchableOpacity>
      <View style={headerStyle}>
        <Text style={titleStyle}>Book Explorer</Text>
        <Text style={subtitleStyle}>Developed by Adriano</Text>
        <View style={styles.icons}>
          <TouchableOpacity onPress={openInstagram}>
            <Ionicons name="logo-instagram" size={24} style={instagramStyle}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={openLinkedin}>
            <Ionicons name="logo-linkedin" size={24} style={linkedinStyle}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={openGithub}>
            <Ionicons name="logo-github" size={24} style={githubStyle} />
          </TouchableOpacity>
        </View>
      </View>
      <Cards isDarkMode={isDarkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  containerDark: {
    flex: 1,
    padding: 20,
    backgroundColor: '#212121',
  },
  mode: {
    flexDirection: 'row-reverse',
    marginTop: 20
  },
  header: {
    alignItems: 'center',
    marginBottom: 25,
  },
  headerDark: {
    alignItems: 'center',
    marginBottom: 25,
    // backgroundColor: '#333',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  titleDark: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
    color: 'black',
  },
  subtitleDark: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
    color: 'white',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  instagram: {
    marginRight: 16,
    color: '#C13584',
  },
  instagramDark: {
    marginRight: 16,
    color: 'white',
  },
  linkedin: {
    marginRight: 16,
    color: '#0077B5',
  },
  linkedinDark: {
    marginRight: 16,
    color: 'white',
  },
  github: {
    color: 'black',
  },
  githubDark: {
    color: 'white',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});