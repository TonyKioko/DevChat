import React, { Component } from 'react'
import { Grid,Header,Icon,Dropdown} from 'semantic-ui-react'
import { spawn } from 'child_process';
import { auth } from 'firebase';
import firebase from '../firebase'
import {connect} from 'react-redux'



class UserPanel extends Component {

    state ={
        user:this.props.currentUser
    }


    // componentWillReceiveProps(nextProps){
    //     this.setState({user:nextProps.currentUser})
    // }
    dropdownOptions = () => [
{

    key:'user',
    text:<span>Signed in as <strong>{this.state.user.displayName}</strong></span>,
    disabled:true
},
{

    key:'avatar',
    text:<span>Change Avatar</span>,
},
{

    key:'signout',
    text:<span onClick={this.handleSingout}>Sign Out</span>,
},


    ]

    handleSingout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => console.log('signed out'))

    }
    
  render() {
      console.log(this.props.currentUser)
    return (
      <div>
      <Grid style={{backgrouns:'#4c3c4c'}}>
      <Grid.Column>

      <Grid.Row style={{padding:'1.2rem',margin:0}}>

        <Header inverted floated="left" as="h2">

        <Icon name='code' />

        <Header.Content>DevChat</Header.Content>
        </Header>


    </Grid.Row>

        <Header style={{padding:'0.25rem'}} as="h4" inverted>
        <Dropdown trigger={
            <span>{this.state.user.displayName}</span>
        } options={this.dropdownOptions()}>



        </Dropdown>

        </Header>
      


        </Grid.Column>



      </Grid>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
    currentUser:state.user.currentUser
})
export default connect(mapStateToProps)(UserPanel);