import React from 'react';
import { Header, Icon, Button} from 'semantic-ui-react'

class Home extends React.Component{
  handlelogin = () => {
    this.props.history.push('/login');
  };
  handleregister = () => {
    this.props.history.push('/register');
  };
  handleteam = () => {
    this.props.history.push('/view-team');
  };
  
  render(){
    return(
      <div style={{marginTop:80,marginLeft:-15,marginBottom:-15}}>
      <Header as='h2' icon textAlign='center'>
        <Icon name='users' circular />
        <Header.Content>Snickr</Header.Content>
        <div style={{marginTop:50}}>
        <Button onClick={this.handlelogin} style={{marginRight:50}} primary>Login</Button>
        <Button onClick={this.handleregister} primary>Register</Button>
        </div>
        <Button style={{marginTop:50}} 
          positive
          onClick={this.handleteam}
        ><h2 style={{textAlign:"center"}}>My Team</h2></Button>
      </Header>

    </div>
    )
  }
}
// const Home = ({ data: { allUsers = [] } }) => allUsers.map(u => <h1 key={u.id}>{u.email}</h1>);

// const allUsersQuery = gql`
//   {
//     allUsers {
//       id
//       email
//     }
//   }
// `;

// export default graphql(allUsersQuery)(Home);
export default Home
