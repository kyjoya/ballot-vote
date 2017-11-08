import React from 'react';
import '../stylesheets/app.scss';
import CandidateTile from '../components/CandidateTile';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let candidates = this.props.data.map((candidate) => {
      return (
        <CandidateTile
          key={candidate.id}
          name={candidate.name}
        />
      )
    })
    return (
      <div id="ballot">
        {candidates}
      </div>
    );
  }
}

export default App;
