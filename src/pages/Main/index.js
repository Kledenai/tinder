import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../../assets/logo.png';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';

import api from '../../services/api';

export default function Main() {
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
      async function loadUsers(){
          const response = await api.get('/devs', {
              headers: { user: match.params.id, }
          })

          setUsers(response.data);
      }

      loadUsers();
  }, [match.params.id]);

  async function handleLike(id) {
      await api.post(`/devs/${id}/likes`, null, {
          headers: { user: match.params.id }
      });

      setUsers(users.filter(user => user._id != id));
  }

  async function handleDislike(id) {
      await api.post(`/devs/${id}/dislikes`, null, {
          headers: { user: match.params.id },
      });

      setUsers(users.filter(user => user._id != id));
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />

      <View style={styles.cardContainer}>
        <View style={[styles.cards, {zIndex: 3}]}>
          <Image style={styles.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/861751?v=4'}} />
          <View style={styles.footer}>
            <Text style={styles.name}>Bruno Rocha</Text>
            <Text style={styles.bio} numberOfLines={3}>Ceo da piririm pom pom piririm pom pom</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={dislike} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={like} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 500,
  },
  cards: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 7,
    margin: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  avatar: {
    flex: 1,
    height: 300,
  },
  footer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  bio: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    lineHeight: 20,
  },
  logo: {
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 30,

  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    }
  }
});