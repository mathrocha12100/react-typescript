import React, { useState } from 'react';
import { ApplicationState } from '../../store';
import { connect, useDispatch } from 'react-redux';
import { loadRequest } from '../../store/ducks/repositories/actions';
import { Container, Card, CardHeader, CardContent } from './styles';
import { Repository } from '../../store/ducks/repositories/types';

interface Props {
  repositories?: Repository[];
}

const RepositoryList: React.FC<Props> = ({ repositories }) => {
  const [newRepo, setNewRepo] = useState([]);
  const dispatch = useDispatch();

  function findRepo() {
    dispatch(loadRequest());
  }

  console.log(repositories);

  return (
    <Container>
      <Card>
        <CardHeader>
        <button onClick={findRepo}>Buscar repo</button>
        <input placeholder="Buscar usuário especifico" defaultValue="mathrocha12100" />
      </CardHeader>
      <CardContent>
      <ul>
        {repositories?.map(repo => <li key={repo.id}>{repo.name}</li>)}
      </ul>
      </CardContent>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
})

export default connect(mapStateToProps)(RepositoryList);
