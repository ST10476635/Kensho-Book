import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>📚 Kensho Books!</Text>
      <Text style={styles.subtitle}>Discover your next enlightening read</Text>
      <Text style={styles.text}>
        Kensho helps you find books that enlighten, inspire, and transform. 
        Begin your reading journey with us today.
      </Text>
    </View>
  );
};

const BooksScreen = () => {
  // Sample book data with placeholder images (you would replace with actual images)
  const books = [
    {
      id: 1,
      title: "The Art of Mindfulness",
      author: "Elena Rivers",
      image: "https://placehold.co/300x400/2E8B57/FFFFFF?text=The+Art+of+Mindfulness",
      description: "A practical guide to cultivating mindfulness in everyday life."
    },
    {
      id: 2,
      title: "Forest Wisdom",
      author: "Marcus Green",
      image: "https://placehold.co/300x400/3CB371/FFFFFF?text=Forest+Wisdom",
      description: "Ancient knowledge from forests around the world."
    },
    {
      id: 3,
      title: "Path to Enlightenment",
      author: "Sophia Zhang",
      image: "https://placehold.co/300x400/228B22/FFFFFF?text=Path+to+Enlightenment",
      description: "Discover your inner peace through meditation and reflection."
    },
    {
      id: 4,
      title: "Nature's Healing",
      author: "David Oakheart",
      image: "https://placehold.co/300x400/32CD32/FFFFFF?text=Nature's+Healing",
      description: "How connecting with nature can transform your wellbeing."
    }
  ];

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Upcoming Books</Text>
      <ScrollView contentContainerStyle={styles.bookList}>
        {books.map(book => (
          <View key={book.id} style={styles.bookCard}>
            <Image 
              source={{ uri: book.image }} 
              style={styles.bookImage}
              resizeMode="cover"
            />
            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>{book.title}</Text>
              <Text style={styles.bookAuthor}>by {book.author}</Text>
              <Text style={styles.bookDescription}>{book.description}</Text>
            </View>
          </View>
        ))}
        <View style={styles.comingSoon}>
          <Text style={styles.comingSoonText}>More Books Coming Soon</Text>
          <Text style={styles.text}>
            Our book collection is being curated with care. Please check back later!
          </Text>
        </View>
      </ScrollView>
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
      <StatusBar backgroundColor="#2E8B57" barStyle="light-content" />
      
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
            color={activeTab === 'home' ? '#2E8B57' : '#8FBC8F'} 
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
            color={activeTab === 'books' ? '#2E8B57' : '#8FBC8F'} 
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
            color={activeTab === 'reports' ? '#2E8B57' : '#8FBC8F'} 
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
    backgroundColor: '#F8FFF8', // Very light green background
  },
  header: {
    backgroundColor: '#2E8B57', // Forest green
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
    color: '#2E8B57', // Forest green
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#3CB371', // Medium sea green
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
    marginTop: 20,
  },
  comingSoonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E8B57',
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
    backgroundColor: '#E8F5E8', // Very light green
  },
  navText: {
    fontSize: 14,
    color: '#8FBC8F', // Dark pastel green
    marginTop: 5,
  },
  activeNavText: {
    color: '#2E8B57', // Forest green
    fontWeight: 'bold',
  },
  bookList: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  bookCard: {
    flexDirection: 'row',
    backgroundColor: '#F8FFF8',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    width: '100%',
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 5,
    marginRight: 15,
  },
  bookInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginBottom: 5,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#3CB371',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  bookDescription: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});

