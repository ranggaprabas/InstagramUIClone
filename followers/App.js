import React,{Component} from 'react';
import { Ionicons } from '@expo/vector-icons';
import {Text, View, Image, StyleSheet, Button} from 'react-native';

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
        backgroundColor: 'white', 
        height: 80
        }}
      >

        <View
          style = {{
          backgroundColor: 'white', 
          height: 50,
          borderTopWidth: 1,
          marginTop: 30,
          justifyContent: 'flex-end'
          }}
        >

          <View
            style = {{
              backgroundColor: '#F1F1F1',
              height: 30,
              width: '90%',
              alignSelf: 'center',
              borderRadius: 5,
              marginLeft: 10
            }}
          >
            <View 
              style = {{
                margin: 5,
                flexDirection: 'row',
                alignItems: 'center'           
              }}
            >
              <Ionicons
                name = {'search'} 
                size = {20} 
                color = {'lightgray'}
              >
              </Ionicons>
              <Text 
              style = {{
                color: 'lightgrey',
                fontSize: 14,
                marginLeft: 10
              }}
            >
              Search
            </Text>
            </View>
          </View>
        </View>
      </View>


        <View
          style = {{
            flexDirection: 'row',
            justifyContent: 'flex-start'
          }}
        >
          <Image
            source = {require('./assets/pp.jpg')}
            style = {{
              height: 70, 
              width: 70,
              marginLeft: 10,
            }}
          >
          </Image>

          <View 
            style = {{
              justifyContent: 'column',
              marginTop: 20
            }}
            >
            <Text 
              style = {{
                fontSize: 14,
                fontWeight: 'bold',
              }}
            > 
              User Name
            </Text>
            <Text 
              style = {{
                fontSize: 12,
                color: 'grey',
              }}
            > 
              Name
            </Text>
          </View>

          <View
            style = {{
              flexDirection: 'row',
              height: 25,
              alignItems: 'center',
              marginTop: 20,
              marginLeft: 30
            }}
          >
            <Button
                title = "     Add     "
            >
            </Button>

            <Image
              source = {require('./assets/dot3.jpg')}
              style = {{
                height: 20, 
                width: 20,
                marginLeft: 10,
                alignSelf: 'center',
              }}
            >
            </Image>
          </View>
        </View>

        <View
          style = {{
            flexDirection: 'row',
            justifyContent: 'flex-start'
          }}
        >
          <Image
            source = {require('./assets/pp.jpg')}
            style = {{
              height: 70, 
              width: 70,
              marginLeft: 10,
            }}
          >
          </Image>

          <View 
            style = {{
              justifyContent: 'column',
              marginTop: 20
            }}
            >
            <Text 
              style = {{
                fontSize: 14,
                fontWeight: 'bold',
              }}
            > 
              User Name
            </Text>
            <Text 
              style = {{
                fontSize: 12,
                color: 'grey',
              }}
            > 
              Name
            </Text>
          </View>

          <View
            style = {{
              flexDirection: 'row',
              height: 25,
              alignItems: 'center',
              marginTop: 20,
              marginLeft: 30
            }}
          >
            <Button
                title = "     Add     "
            >
            </Button>

            <Image
              source = {require('./assets/dot3.jpg')}
              style = {{
                height: 20, 
                width: 20,
                marginLeft: 10,
                alignSelf: 'center',
              }}
            >
            </Image>
          </View>
        </View>

        <View
          style = {{
            flexDirection: 'row',
            justifyContent: 'flex-start'
          }}
        >
          <Image
            source = {require('./assets/pp.jpg')}
            style = {{
              height: 70, 
              width: 70,
              marginLeft: 10,
            }}
          >
          </Image>

          <View 
            style = {{
              justifyContent: 'column',
              marginTop: 20
            }}
            >
            <Text 
              style = {{
                fontSize: 14,
                fontWeight: 'bold',
              }}
            > 
              User Name
            </Text>
            <Text 
              style = {{
                fontSize: 12,
                color: 'grey',
              }}
            > 
              Name
            </Text>
          </View>

          <View
            style = {{
              flexDirection: 'row',
              height: 25,
              alignItems: 'center',
              marginTop: 20,
              marginLeft: 30
            }}
          >
            <Button
                title = "     Add     "
            >
            </Button>

            <Image
              source = {require('./assets/dot3.jpg')}
              style = {{
                height: 20, 
                width: 20,
                marginLeft: 10,
                alignSelf: 'center',
              }}
            >
            </Image>
          </View>
        </View>

        <View
          style = {{
            flexDirection: 'row',
            justifyContent: 'flex-start'
          }}
        >
          <Image
            source = {require('./assets/pp.jpg')}
            style = {{
              height: 70, 
              width: 70,
              marginLeft: 10,
            }}
          >
          </Image>

          <View 
            style = {{
              justifyContent: 'column',
              marginTop: 20
            }}
            >
            <Text 
              style = {{
                fontSize: 14,
                fontWeight: 'bold',
              }}
            > 
              User Name
            </Text>
            <Text 
              style = {{
                fontSize: 12,
                color: 'grey',
              }}
            > 
              Name
            </Text>
          </View>

          <View
            style = {{
              flexDirection: 'row',
              height: 25,
              alignItems: 'center',
              marginTop: 20,
              marginLeft: 30
            }}
          >
            <Button
                title = "     Add     "
            >
            </Button>

            <Image
              source = {require('./assets/dot3.jpg')}
              style = {{
                height: 20, 
                width: 20,
                marginLeft: 10,
                alignSelf: 'center',
              }}
            >
            </Image>
          </View>
        </View>

        <View
          style = {{
            flexDirection: 'row',
            justifyContent: 'flex-start'
          }}
        >
          <Image
            source = {require('./assets/pp.jpg')}
            style = {{
              height: 70, 
              width: 70,
              marginLeft: 10,
            }}
          >
          </Image>

          <View 
            style = {{
              justifyContent: 'column',
              marginTop: 20
            }}
            >
            <Text 
              style = {{
                fontSize: 14,
                fontWeight: 'bold',
              }}
            > 
              User Name
            </Text>
            <Text 
              style = {{
                fontSize: 12,
                color: 'grey',
              }}
            > 
              Name
            </Text>
          </View>

          <View
            style = {{
              flexDirection: 'row',
              height: 25,
              alignItems: 'center',
              marginTop: 20,
              marginLeft: 30
            }}
          >
            <Button
                title = "     Add     "
            >
            </Button>

            <Image
              source = {require('./assets/dot3.jpg')}
              style = {{
                height: 20, 
                width: 20,
                marginLeft: 10,
                alignSelf: 'center',
              }}
            >
            </Image>
          </View>
        </View>

        <View
          style = {{
            flexDirection: 'row',
            justifyContent: 'flex-start'
          }}
        >
          <Image
            source = {require('./assets/pp.jpg')}
            style = {{
              height: 70, 
              width: 70,
              marginLeft: 10,
            }}
          >
          </Image>

          <View 
            style = {{
              justifyContent: 'column',
              marginTop: 20
            }}
            >
            <Text 
              style = {{
                fontSize: 14,
                fontWeight: 'bold',
              }}
            > 
              User Name
            </Text>
            <Text 
              style = {{
                fontSize: 12,
                color: 'grey',
              }}
            > 
              Name
            </Text>
          </View>

          <View
            style = {{
              flexDirection: 'row',
              height: 25,
              alignItems: 'center',
              marginTop: 20,
              marginLeft: 30
            }}
          >
            <Button
                title = "     Add     "
            >
            </Button>

            <Image
              source = {require('./assets/dot3.jpg')}
              style = {{
                height: 20, 
                width: 20,
                marginLeft: 10,
                alignSelf: 'center',
              }}
            >
            </Image>
          </View>
        </View>

                <View
          style = {{
            flexDirection: 'row',
            justifyContent: 'flex-start'
          }}
        >
          <Image
            source = {require('./assets/pp.jpg')}
            style = {{
              height: 70, 
              width: 70,
              marginLeft: 10,
            }}
          >
          </Image>

          <View 
            style = {{
              justifyContent: 'column',
              marginTop: 20
            }}
            >
            <Text 
              style = {{
                fontSize: 14,
                fontWeight: 'bold',
              }}
            > 
              User Name
            </Text>
            <Text 
              style = {{
                fontSize: 12,
                color: 'grey',
              }}
            > 
              Name
            </Text>
          </View>

          <View
            style = {{
              flexDirection: 'row',
              height: 25,
              alignItems: 'center',
              marginTop: 20,
              marginLeft: 30
            }}
          >
            <Button
                title = "     Add     "
            >
            </Button>

            <Image
              source = {require('./assets/dot3.jpg')}
              style = {{
                height: 20, 
                width: 20,
                marginLeft: 10,
                alignSelf: 'center',
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
          source = {require('./assets/rangga.png')}
          style = {{
            height: 30, 
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