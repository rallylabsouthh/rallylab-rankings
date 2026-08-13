// RALLYLAB DATA — edit this file to update rankings.
const RALLYLAB_DATA = {
  points: {
    champion: 500,
    runnerUp: 350,
    semifinal: 250,
    quarterfinal: 150,
    round16: 100,
    participation: 50,
    openPlayWin: 25,
    openPlayLoss: 10,
    openPlayAttendance: 5
  },

  players: [
    {id:1,name:"Mark Robin",class:"B1",points:1285,wins:19,losses:7,movement:3},
    {id:2,name:"Sandeep",class:"B1",points:1210,wins:18,losses:8,movement:1},
    {id:3,name:"Alex",class:"B2",points:1155,wins:17,losses:9,movement:2},
    {id:4,name:"John",class:"B2",points:1040,wins:15,losses:10,movement:-2},
    {id:5,name:"Mike",class:"C",points:930,wins:14,losses:11,movement:4},
    {id:6,name:"Daniel",class:"C",points:875,wins:12,losses:12,movement:-1},
    {id:7,name:"Chris",class:"D",points:790,wins:11,losses:13,movement:1},
    {id:8,name:"Paolo",class:"D",points:720,wins:9,losses:14,movement:-3}
  ],

  matches: [
    {date:"2026-08-09",tournament:"RallyLab Open Play",p1:"Mark Robin",p2:"John",score:"4–2",winner:"Mark Robin"},
    {date:"2026-08-09",tournament:"RallyLab Open Play",p1:"Sandeep",p2:"Alex",score:"4–3",winner:"Sandeep"},
    {date:"2026-08-02",tournament:"RallyLab Invitational",p1:"Mike",p2:"Daniel",score:"4–1",winner:"Mike"},
    {date:"2026-08-02",tournament:"RallyLab Invitational",p1:"Chris",p2:"Paolo",score:"4–3",winner:"Chris"},
    {date:"2026-07-26",tournament:"RallyLab Open",p1:"Mark Robin",p2:"Sandeep",score:"4–3",winner:"Mark Robin"},
    {date:"2026-07-26",tournament:"RallyLab Open",p1:"Alex",p2:"John",score:"4–2",winner:"Alex"}
  ]
};
