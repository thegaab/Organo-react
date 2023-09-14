import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name: 'Full stack development',
      primaryColor: '#D9F7E9',
      secondaryColor: '#57C278'
    },
    {
      name: 'Front end',
      primaryColor: '#E8F8FF',
      secondaryColor: '#82CFFA'
    },
    {
      name: 'Mobile',
      primaryColor: '#F0F8E2',
      secondaryColor: '#A6D157'
    },
    {
      name: 'Data Science',
      primaryColor: '#FDE7E8',
      secondaryColor: '#E06B69'
    },
    {
      name: 'DevOps',
      primaryColor: '#FAE9F5',
      secondaryColor: '#D86EBF'
    },
    {
      name: 'QA',
      primaryColor: '#FFF5D9',
      secondaryColor: '#FFBA05'
    },
    {
      name: 'UX Design',
      primaryColor: '#FFEEDF',
      secondaryColor: '#FF8A29'
    },
    {
      name: 'Inovation',
      primaryColor: '#e8ebf7',
      secondaryColor: '#ACBED8'
    }
]


  const [collaborators, setCollaborators] = useState([])

  const newCollaboratorCreated = (collaborator) =>{
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner/>
      <Form teams={teams.map(team => team.name)} collaboratorCreated={collaborator => newCollaboratorCreated(collaborator)}/> 
      {teams.map(team => <Team 
      key={team.name} 
      name={team.name} 
      primaryColor={team.primaryColor} 
      secondaryColor={team.secondaryColor}
      collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
      />)}
    
    </div>
  );
}

export default App;
