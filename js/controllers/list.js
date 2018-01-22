app.controller('ListController', function() {
  this.dummyData = 'hello world';

  this.search = '';
  this.quizActive = false;
  this.activeFact = {};
  this.activateQuiz = () => {
  this.quizActive = true;
  };
  this.changeActiveFact = (index) => {
    this.activeFact = index;
    console.log('btn works');
  };

  this.fbFactz = [
    {
      type: 'Celebration Factz',
      img_url: 'http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2014/02/02/hangover-excuses.jpg',
      fact1: '1.5 million will call in sick the Monday after the Super Bowl. Wonder why that is? Maybe sickness spreads quickly on parties or…',
      fact2: 'According to a few sources, Americans slug 325.5 million gallons of beer on Super Bowl Sunday. Whether this is a reasonable number is up to some debate, but we’ll leave that up to you to decide.',
      fact3: 'This celebration is actually ranked second for most food consumed throughout the year, right after Thanksgiving!'
    },
    {
      type: 'Commercial Factz',
      img_url: 'http://blog.doctoroz.com/wp-content/uploads/2013/05/television-watching.jpg',
      fact1: 'We all know how expensive commercials are, but did you know they’re actually $166,000 per second?  That one second could also buy 16,600,000 rubber ducks. All for a tiny slice of air time.',
      fact2: 'So they’re expensive… are they worth it? 90% of people are unlikely to buy something they saw in a Super Bowl commercial! And it might even be more unlikely given those beer stats.',
      fact3: 'When surveyed, 25% of Americans do consider commercials to be the most important part of the game though.  Pressure from the Puppy Bowl fans?'
    },
    {
      type: '“Let’s Talk Money” Facts',
      img_url: 'https://openpalmlaw.com/wp-content/uploads/2015/02/Money-talks.png',
      fact1: 'It’s estimated that the NFL collects around $620 million of revenue from this event, which is the highest in history for a one-day sporting event.',
      fact2: 'NBC is expected to collect $500 million from ads.',
      fact3: 'That number surpassed the total expenditure on the Super Bowl in the 1960s, 70s and 80s combined.'
    }
  ]
});
