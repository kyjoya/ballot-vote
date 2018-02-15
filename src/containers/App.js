import React from 'react';
import '../stylesheets/app.scss';
import CandidateTile from '../components/CandidateTile';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let ballotInformation = this.props.data;

    let candidates = ballotInformation.map((candidate) => {
      return (
        <CandidateTile
          key={candidate.id}
          name={candidate.name}
        />
      )
    })
    return (
      <div>
        <div id="ballot">
          {candidates}
        </div>
      </div>
    );
  }
}

export default App;
