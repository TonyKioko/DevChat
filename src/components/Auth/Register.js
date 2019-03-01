import React, { Component } from 'react'
import {Grid,Form,Segment,Button,Header,Message,Icon} from'semantic-ui-react'
import {Link} from 'react-router-dom'
import firebase from '../../firebase'

class Register extends Component {

    state = {
      username:'',
      email:'',
      password:'',
      passwordConfirmation:''

    }

    handleChange = (event) => {

    this.setState({
      [event.target.name]:event.target.value
    })  
    }

      handleSubmit=(event)=>{
        event.preventDefault()
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email,this.state.password)
          .then(createdUser => {
            console.log(createdUser)
          })
          .catch(err => {
            console.errror(err)
          })
      }

  render() {

    const { username,email,password,passwordConfirmation}=this.state;

    return (
      <div>
          <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column style={{maxWidth:450}}>

                <Header as="h2" icon color="orange" textAlign="center">
                <Icon name="puzzle piece" color="orange" />
                Register for DevChat
                </Header>
                <Form size="large" onSubmit={this.handleSubmit}>
                    <Segment stacked>
                    <Form.Input fluid name="username" icon="user" iconPosition="left" placeholder="Username" onChange={this.handleChange} value={username} />

                    <Form.Input fluid name="email" icon="mail" iconPosition="left" placeholder="Email Address" onChange={this.handleChange} value={email} />


                    <Form.Input fluid name="password" icon="lock" iconPosition="left" placeholder="password" type="password" onChange={this.handleChange} value={password} />


                    <Form.Input fluid name="passwordConfirmation" icon="repeat" iconPosition="left" placeholder="password conformation" type="password" onChange={this.handleChange} value={passwordConfirmation} />

                        <Button color="orange" fluid size="large">Submit</Button>
                    
                    
                    </Segment>

                </Form>

<Message>Already a user?
    <Link to="/login">Login</Link>
</Message>

            </Grid.Column>

          </Grid>
          <h2>Register</h2>
        
      </div>
    )
  }
}

export default Register;