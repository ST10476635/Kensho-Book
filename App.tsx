import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>📚Kensho Books!</Text>
      <Text style={styles.subtitle}>Discover your next enlightening read</Text>
      <Text style={styles.text}>
        Kensho helps you find books that enlighten, inspire, and transform. 
        Begin your reading journey with us today.
      </Text>
    </View>
  );
};

const BooksScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Books Collection</Text>
      <View style={styles.comingSoon}>
        <Text style={styles.comingSoonText}>Page is Coming</Text>
        <Text style={styles.text}>
          Our book collection is being curated with care. Please check back later!
        </Text>
      </View>
    </View>
  );
};

const ReportsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Reading Reports</Text>
      <Text style={styles.subtitle}>Reports page is still in progress</Text>
    </View>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    switch(activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'books':
        return <BooksScreen />;
      case 'reports':
        return <ReportsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4b2e2e" barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Kensho</Text>
      </View>
      
      {/* Main Content */}
      <View style={styles.content}>
        {renderScreen()}
      </View>
      
      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        <TouchableOpacity 
          style={[styles.navItem, activeTab === 'home' && styles.activeNavItem]}
          onPress={() => setActiveTab('home')}
        >
          <Ionicons 
            name="home-outline" 
            size={24} 
            color={activeTab === 'home' ? '#4b2e2e' : '#7a5c58'} 
          />
          <Text style={[styles.navText, activeTab === 'home' && styles.activeNavText]}>
            Home
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navItem, activeTab === 'books' && styles.activeNavItem]}
          onPress={() => setActiveTab('books')}
        >
          <Ionicons 
            name="book-outline" 
            size={24} 
            color={activeTab === 'books' ? '#4b2e2e' : '#7a5c58'} 
          />
          <Text style={[styles.navText, activeTab === 'books' && styles.activeNavText]}>
            Books
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navItem, activeTab === 'reports' && styles.activeNavItem]}
          onPress={() => setActiveTab('reports')}
        >
          <Ionicons 
            name="bar-chart-outline" 
            size={24} 
            color={activeTab === 'reports' ? '#4b2e2e' : '#7a5c58'} 
          />
          <Text style={[styles.navText, activeTab === 'reports' && styles.activeNavText]}>
            Reports
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f5f2',
  },
  header: {
    backgroundColor: '#4b2e2e',
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4b2e2e',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#7a5c58',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 24,
  },
  comingSoon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  comingSoonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4b2e2e',
    marginBottom: 15,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  activeNavItem: {
    backgroundColor: '#f0e6e0',
  },
  navText: {
    fontSize: 14,
    color: '#7a5c58',
    marginTop: 5,
  },
  activeNavText: {
    color: '#4b2e2e',
    fontWeight: 'bold',
  },
});

