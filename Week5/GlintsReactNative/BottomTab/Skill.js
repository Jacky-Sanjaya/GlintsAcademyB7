import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Skill() {
  const [data1, setData] = useState([
    {
      id: '1',
      skillName: 'React Native',
      category: 'Library',
      categoryName: 'Framework / Library',
      logoUrl: '',
      iconType: 'MaterialCommunityIcons',
      iconName: 'react',
      percentageProgress: '50%',
    },
    {
      id: '2',
      skillName: 'Laravel',
      category: 'Library',
      categoryName: 'Framework / Library',
      logoUrl: '',
      iconType: 'MaterialCommunityIcons',
      iconName: 'laravel',
      percentageProgress: '100%',
    },
    {
      id: '3',
      skillName: 'JavaScript',
      category: 'Language',
      categoryName: 'Bahasa Pemrograman',
      logoUrl: '',
      iconType: 'MaterialCommunityIcons',
      iconName: 'language-javascript',
      percentageProgress: '30%',
    },
    {
      id: '4',
      skillName: 'Python',
      category: 'Language',
      categoryName: 'Bahasa Pemrograman',
      logoUrl: '',
      iconType: 'MaterialCommunityIcons',
      iconName: 'language-python',
      percentageProgress: '70%',
    },
    {
      id: '5',
      skillName: 'Git',
      category: 'Technology',
      categoryName: 'Teknologi',
      logoUrl: '',
      iconType: 'MaterialCommunityIcons',
      iconName: 'git',
      percentageProgress: '75%',
    },
    {
      id: '6',
      skillName: 'Gitlab',
      category: 'Technology',
      categoryName: 'Teknologi',
      logoUrl: '',
      iconType: 'MaterialCommunityIcons',
      iconName: 'gitlab',
      percentageProgress: '60%',
    },
  ]);

  const List = (props) => {
    return (
      <View style={styles.container}>
        <MaterialCommunityIcons name={props.icon} size={60} />
        <View>
          <Text>{props.text}</Text>
          <Text>{props.category1}</Text>
        </View>
        <Text style={styles.percentage}>{props.percentage}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data1}
        renderItem={({item}) => (
          <List
            text={item.skillName}
            icon={item.iconName}
            category1={item.categoryName}
            percentage={item.percentageProgress}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    padding: 30,
  },

  percentage: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
