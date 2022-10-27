import React,{Component} from 'react';
import { Ionicons } from '@expo/vector-icons';
import {Text, View, Image, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View 
      style= {{
        backgroundColor: 'white', 
        height: '100%'
      }}
    >
      
      <View 
        style = {{
          height: '12%', 
          justifyContent: 'flex-start',
          flexDirection: 'row',
          alignItems: 'flex-start', 
          borderTopWidth: 1,
          marginTop: 20
        }}
      >

        <Image
          source = {require('./assets/images/rangga.png')}
          style = {{
            height: 50, 
            width: 50,
            marginLeft: 10,
            marginTop: 10
          }}
        >
        </Image>

        <View 
          style = {{
            justifyContent: 'column',
            alignItems: 'center',
            marginTop: 25,
            marginLeft: 10
          }}
          >
          <Text 
            style = {{
              fontSize: 14,
              fontWeight: 'bold',
            }}
          > 
            rangga
          </Text>
        </View>

        <Image
          source = {require('./assets/dot3.jpg')}
          style = {{
            height: 20, 
            width: 20,
            marginLeft: 128,
            alignSelf: 'center',
          }}
        >
        </Image>
      </View>



      <View
        style = {{
          height: '50%',
          alignItems: 'center'
        }}
      >
        <Image
            source = {require('./assets/images/alone.png')}
            style = {{
              height:330,
              width: 330,
            }}
          >
        </Image>
      </View>




      <View
        style = {{
          height: 50,
          alignItems: 'center',
          marginTop: 5
        }}
      >

        <View
          style = {{
            height: 40,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10
          }}
        >
          <Image
            source = {require('./assets/likered.jpg')}
            style = {{
              height: 40,
              width: 40,
            }}
          >
          </Image>

          <Image
            source = {require('./assets/comment.jpg')}
            style = {{
              height: 40,
              width: 35,
            }}
          >
          </Image>

          <Image
            source = {require('./assets/share.jpg')}
            style = {{
              height: 25,
              width: 25,
              marginTop: 5,
              marginLeft: 5
            }}
          >
          </Image>

          <Image
            source = {require('./assets/keep.jpg')}
            style = {{
              height: 35,
              width: 35,
              marginLeft: 180,
            }}
          >
          </Image>
        </View>
      </View>


      <View
        style = {{
          height: 100, 
          justifyContent: 'space-between',
          flexDirection: 'row'
        }}
      >
        <View
          style = {{
            height: 100, 
            justifyContent: 'space-evenly',
            flexDirection: 'column',
            marginLeft: 20
          }}
        >

          <Text
            style = {{
              fontSize: 14,
              fontWeight: 'bold'
            }}
          >
            6969 Likes
          </Text>

          <View
            style = {{
              flexDirection: 'row',
              justifyContent: 'flex-start'
            }}
          >
            <Text 
              style = {{
                fontSize: 14,
                fontWeight: 'bold'
              }}
            >
              rangga
            </Text>
            <Text 
              style = {{
                fontSize: 14,
                marginLeft: 10,
              }}
            >
              alone
            </Text>
            <Text 
              style = {{
                fontSize: 14,
                color: 'blue',
                marginLeft: 5,
              }}
            >
              #dewewani
            </Text>
          </View>
        
          <Text 
            style = {{
              fontSize: 10
            }}
          >
            4 jam yang lalu
          </Text>
        </View>

               <View
          style = {{
            flexDirection: 'row',
          }}
        >
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


