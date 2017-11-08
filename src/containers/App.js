import React from 'react';
import '../stylesheets/app.scss';
import CandidateTile from '../components/CandidateTile';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choice: null
    }

    this.chosenCandidate = this.chosenCandidate.bind(this);
  }

  chosenCandidate(id) {
    this.setState({
      choice: id
    })
  }

  render() {
    let candidateName = ""

    let candidates = this.props.data.map((candidate) => {
      let handleChoice = () => { this.chosenCandidate(candidate.id) }

      if (this.state.choice === candidate.id){
        candidateName = candidate.name
      }

      return (
        <CandidateTile
          key={candidate.id}
          name={candidate.name}
          clickHandler={handleChoice}
        />
      )
    })
    return (
      <div id="ballot">
        <h1>{candidateName}</h1>
        {candidates}
      </div>
    );
  }
}

export default App;
