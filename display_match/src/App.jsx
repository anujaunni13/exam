import React from 'react';
const matches=[

  {
    id: 1,
    teamA:'India',
    teamB:'China',
    winner:'India'
  },
  {
    id: 2,
    teamA:'Team A',
    teamB:'Team B',
    winner:'Team B'
  },
  {
    id: 3,
    teamA:'Argentina',
    teamB:'Brazil',
    winner:'Argentina'
  }
];

function CricketMatch() { return (
  <div>
<h1>Cricket Match</h1>
{matches.map((match)=>

(<li key= {match.id}>
<span style ={{fontWeight:match.winner===match.teamA ? 'bold':'normal'}}>{match.teamA}</span>
{'vs'}
<span style ={{fontWeight:match.winner===match.teamB ? 'bold':'normal'}}>{match.teamB}</span>
</li>)

)}
  </div>
)
};
export default CricketMatch;