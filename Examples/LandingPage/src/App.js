/**
 * Sample React Omni App
 * https://github.com/brianneisler/react-omni
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Display,
  Divider,
  Drawer,
  Para,
  Avatar,
  Subheader,
  Badge,
  ListItem,
  ScrollView,
  Button,
  Navbar,
  TextField
} from '../../../dist'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.onPress = this.onPress.bind(this)
  }

  onPress() {
    this.context.router.transitionTo('/hello')
  }

  render() {
    return (
      <Drawer content={
        <View>
          <Subheader style={{backgroundColor: 'transparent'}}>Typography</Subheader>
          <ListItem heading={'Display'}/>
          <ListItem heading={'Paragraph'}/>
          <Divider inset={0} />
          <Subheader style={{backgroundColor: 'transparent'}}>Components</Subheader>
          <ListItem heading={'Avatar'}/>
          <ListItem heading={'Badges'}/>
          <ListItem heading={'Buttons'}/>
          <ListItem heading={'Divider'}/>
          <ListItem heading={'TextField'}/>
        </View>
      }>
        <Navbar title={'React Omni'}>
          <ScrollView style={styles.container}>
            <View>
              <Subheader>Typography</Subheader>
              <Display size={1}>Display 1</Display>
              <Display size={2}>Display 2</Display>
              <Display size={3}>Display 3</Display>
              <Display size={4}>Display 4</Display>
              <Para lead={true}>This is a leading paragraph.</Para>
              <Para>This is a normal paragraph.</Para>
              <Para align={'center'}>This is a center aligned paragraph.</Para>
              <Para align={'right'}>This is a right aligned paragraph.</Para>
            </View>
            <Subheader>Avatars</Subheader>
            <View style={styles.inline}>
              <Avatar size={60} source={{uri: 'https://cdn.applysquare.net/storage/tmp/qa/thread/DmMz5AkpU.jpg'}} style={styles.avatar}/>
              <Avatar size={40} source={{uri: 'https://cdn.applysquare.net/storage/tmp/qa/thread/DmMz5AkpU.jpg'}} style={styles.avatar}/>
              <Avatar placeholder={'CC'} style={styles.avatar}/>
            </View>
            <Subheader>Badges</Subheader>
            <View style={styles.inline}>
              <Badge style={styles.badge}>default</Badge>
              <Badge style={styles.badge} color={'primary'}>Primary</Badge>
              <Badge style={styles.badge} color={'positive'}>Positive</Badge>
              <Badge style={styles.badge} color={'negative'}>Negative</Badge>
            </View>
            <Button title='Block Button' style={{marginBottom: 10}} onPress={this.onPress} />
            <View style={styles.inline}>
              <Button title='XL Button' style={styles.button} size={'xl'} />
              <Button title='LG Button' color={'secondary'} style={styles.button} size={'lg'} />
              <Button title='Normal Button' color={'positive'} style={styles.button} />
              <Button title='SM Button' color={'negative'} style={styles.button} size={'sm'} />
              <Button title='XS Button' color={'#2196F3'} style={styles.button} size={'xs'} />
            </View>
            <Subheader>Divider</Subheader>
            <Divider />
            <Subheader>TextField</Subheader>
            <TextField label={'Field Label'} />
          </ScrollView>
        </Navbar>
      </Drawer>
    )
  }
}

App.contextTypes = {router: React.PropTypes.object}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  inline: {
    flexDirection: 'row',
    marginBottom: 10,
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  avatar: {
    marginRight: 10
  },
  badge: {
    marginRight: 10
  },
  button: {
    marginRight: 10,
    marginBottom: 10
  }
})
