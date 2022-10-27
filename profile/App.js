import React,{Component} from 'react';
import { Ionicons } from '@expo/vector-icons';
import {Text, View, Image, StyleSheet} from 'react-native';

//import HomeScreen from './pages/HomeScreen';
//import DetailsScreen from './pages/DetailsScreen';
//import ProfileScreen from './pages/ProfileScreen';
//import SettingsScreen from './pages/SettingsScreen';

//const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View 
      style= {{
        backgroundColor: 'white', 
        height: '100%'
      }}
    >
      <View 
        style= {{
          height: '5%', 
          justifyContent: 'top', 
          alignItems: 'center'
        }}
      >
      <Text 
        style = {{
          fontSize: 14,
          fontWeight: 'bold',
          marginTop: 10
        }}
      > 
        rangga
      </Text>
    </View>



    <View 
      style = {{
        height: '15%', 
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-start' 
      }}
    >

      <Image
        source = {require('./assets/images/rangga.png')}
        style = {{
          height: 75, 
          width: 75,
          marginLeft: 20,
        }}
      >
      </Image>

      <View 
        style = {{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 15
        }}
        >
        <Text 
          style = {{
            fontSize: 14,
            fontWeight: 'bold'
          }}
        > 
          1.500
        </Text>
        <Text 
          style = {{
            fontSize: 12
          }}
        > 
          posts
        </Text>
      </View>

      <View 
        style = {{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 15
        }}
        >
        <Text 
          style = {{
            fontSize: 14,
            fontWeight: 'bold'
          }}
        > 
          100k
        </Text>
        <Text 
          style = {{
            fontSize: 12
          }}
        > 
          followers
        </Text>
      </View>

      <View 
        style = {{
          flexDirection: 'column',
          alignItems: 'center',
          marginRight: 30,
          marginTop: 15
        }}
        >
        <Text 
          style = {{
            fontSize: 14,
            fontWeight: 'bold'
          }}
        > 
          500
        </Text>
        <Text 
          style = {{
            fontSize: 12,
          }}
        > 
          following
        </Text>
      </View>
    </View>


    <View
      style = {{
        height: '18%', 
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 20,
        marginBottom: 10
      }}
    >

      <Text 
        style = {{
          fontSize: 15,
          fontWeight: 'bold'
        }}
      >
        Rangga Prabaswara
      </Text>

      <Text 
        style = {{
          fontSize: 13
        }}
      >
        Politeknik Negeri Semarang
      </Text>
    
      <Text 
        style = {{
          fontSize: 13
        }}
      >
        D3 - Teknik Informatika
      </Text>

    </View>


    <View 
      style= {{
        backgroundColor: 'white',
        borderTopWidth: 1,
        height: '10%', 
        justifyContent: 'space-between', 
        flexDirection: 'row'
      }}
    >

      <Image
        source = {require('./assets/feed.jpg')}
        style = {{
          height: 50, 
          width: 50,
          alignSelf: 'center',
          marginLeft: 30
        }}
      >
      </Image>

      <Image
        source = {require('./assets/igtv.jpg')}
        style = {{
          height: 50, 
          width: 50,
          alignSelf: 'center',
        }}
      >
      </Image>

      <Image
        source = {require('./assets/tag.jpg')}
        style = {{
          height: 50, 
          width: 50,
          alignSelf: 'center',
          marginRight: 30
        }}
      >
      </Image>
    </View>



      <View 
        style= {{
          backgroundColor: 'white',
          height: '40%', 
          justifyContent: 'space-evenly', 
          flexDirection: 'column'
        }}
      >

        <View 
          style= {{
            backgroundColor: 'white',
            justifyContent: 'space-evenly', 
            flexDirection: 'row',
          }}
        >
        


          <Image
            source = {require('./assets/images/alone.png')}
            style = {{
              height: 100, 
              width: 100
            }}
          >
          </Image>
          <Image
            source = {require('./assets/images/alone.png')}
            style = {{
              height: 100, 
              width: 100
            }}
          >
          </Image>
          <Image
            source = {require('./assets/images/alone.png')}
            style = {{
              height: 100, 
              width: 100
            }}
          >
          </Image>
        </View>


        <View 
          style= {{
            backgroundColor: 'white',
            justifyContent: 'space-evenly', 
            alignItems: 'flex-end',
            flexDirection: 'row',
          }}
        >

          <Image
            source = {require('./assets/images/alone.png')}
            style = {{
              height: 100, 
              width: 100
            }}
          >
          </Image>

          <Image
            source = {require('./assets/images/alone.png')}
            style = {{
              height: 100, 
              width: 100
            }}
          >
          </Image>

          <Image
            source = {require('./assets/images/alone.png')}
            style = {{
              height: 100, 
              width: 100
            }}
          >
          </Image>
        </View>


      <View 
        style= {{
          backgroundColor: 'white',
          justifyContent: 'space-evenly', 
          flexDirection: 'row',
          height: 30
        }}
      >

        <Image
          source = {require('./assets/images/alone.png')}
          style = {{
            height: 100, 
            width: 100
          }}
        >
        </Image>

        <Image
          source = {require('./assets/images/alone.png')}
          style = {{
            height: 100, 
            width: 100
          }}
        >
        </Image>

        <Image
          source = {require('./assets/images/alone.png')}
          style = {{
            height: 100, 
            width: 100
          }}
        >
        </Image>
      </View>
    </View>



      <View 
        style= {{
          backgroundColor: 'white',
          borderTopWidth: 1,
          height: '10%', 
          justifyContent: 'space-between', 
          flexDirection: 'row'
        }}
      >

        <Image
          source = {require('./assets/home.jpg')}
          style = {{
            height: 30, 
            width: 30,
            marginLeft: 20,
            alignSelf: 'center'
          }}
        >
        </Image>

        <Image
          source = {require('./assets/search.jpg')}
          style = {{
            height: 35, 
            width: 30,
            alignSelf: 'center'
          }}
        >
        </Image>

        <Image
          source = {require('./assets/plus.jpg')}
          style = {{
            height: 40, 
            width: 45,
            alignSelf: 'center'
          }}
        >
        </Image>

        <Image
          source = {require('./assets/like.jpg')}
          style = {{
            height: 30, 
            width: 35,
            alignSelf: 'center'
          }}
        >
        </Image>

        <Image
          source = {require('./assets/profile.jpg')}
          style = {{
            height: 40, 
            width: 30,
            marginRight: 20,
            alignSelf: 'center'
          }}
        >
        </Image>
      </View>
    </View>
  );
}


