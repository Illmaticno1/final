app.controller('ListController', function() {
  // this.dummyData = 'hello world';

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
}); //end of ListController

app.controller('quizCtrl', function() {
  this.activeQuestion = 0;
  this.error = false;
  this.finalize = false;
  let numQuestionAnswered = 0;

  this.selectAnswer = (index) => {
    this.quizQuestions[this.activeQuestion].selected = index;
  }

  this.finalizeAnswers = () => {
    this.finalize = false;
    numQuestionAnswered = 0;
    this.activeQuestion = 0;
    quizMetrics.markQuiz()
  }

  this.setActiveQuestion = (index) => {
    if (index === undefined) {
      let breakOut = false;
      let quizLength = this.quizQuestions.length - 1;
      while (!breakOut) {
        this.activeQuestion = this.activeQuestion < quizLength?++this.activeQuestion:0;
        if (this.activeQuestion === 0) {
          this.error = true;
        }
        if (this.quizQuestions[this.activeQuestion].selected === null) {
          breakOut = true;
        }
      }
    } else {
      this.activeQuestion = index;
    }
  }

  this.questionAnswered = () => {
    let quizLength = this.quizQuestions.length;

    if (this.quizQuestions[this.activeQuestion].selected !== null) {
      numQuestionAnswered++;
      if (numQuestionAnswered >= quizLength) {
        // finalize quiz
        for (let i = 0; i < quizLength; i++) {
          if (this.quizQuestions[i].selected === null) {
            this.setActiveQuestion(i);
            return;
          }
        }
      }
      this.error = false;
      this.finalize = true;
      return;
    }
    this.setActiveQuestion();
  }

  this.quizQuestions = [
    {
      type: 'text',
      text: 'How much revenue does the NFL collect on average from the superbowl?',
      possibilities: [
        {
          answer: '$620 million'
        },
        {
          answer: '$920 million'
        },
        {
          answer: '$120 million'
        },
        {
          answer: '$1 billion'
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: 'text',
      text: 'How much is NBC expected to collect from ads?',
      possibilities: [
        {
          answer: '$450 million'
        },
        {
          answer: '$500 million'
        },
        {
          answer: '$80 million'
        },
        {
          answer: '$200 million'
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: 'text',
      text: 'what percentage of people are likely to buy something they saw in a superbowl commercial?',
      possibilities: [
        {
          answer: '90%'
        },
        {
          answer: '60%'
        },
        {
          answer: '20%'
        },
        {
          answer: '10%'
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: 'text',
      text: 'How much does ad time cost per second during the superbowl?',
      possibilities: [
        {
          answer: '$188,000 per second'
        },
        {
          answer: '$166,000 per second'
        },
        {
          answer: '$199,000 per second'
        },
        {
          answer: '$100,000 per second'
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: 'text',
      text: 'what percentage of Americans consider commercials to be the most important part of the game?',
      possibilities: [
        {
          answer: '1%'
        },
        {
          answer: '99%'
        },
        {
          answer: '25%'
        },
        {
          answer: '50%'
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: 'text',
      text: 'On average how many people will call in sick the Monday after the Super Bowl?',
      possibilities: [
        {
          answer: '1.5 million'
        },
        {
          answer: '10.5 million'
        },
        {
          answer: '$.5 million'
        },
        {
          answer: '$300 billion'
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: 'text',
      text: 'How much beer does Americans consume on Super Bowl Sunday?',
      possibilities: [
        {
          answer: '635.5 million gallons'
        },
        {
          answer: '325.5 million gallons'
        },
        {
          answer: '500 million gallons'
        },
        {
          answer: '225.5 million gallons'
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: 'text',
      text: 'Amongs day where Americans consume the most food, where does Super Bowl Sunday rank?',
      possibilities: [
        {
          answer: '1st'
        },
        {
          answer: '2nd'
        },
        {
          answer: '3rd'
        },
        {
          answer: '4th'
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: 'image',
      text: 'which team lost 4 consecutive superbowls?',
      possibilities: [
        {
          answer: 'http://www.stilettosetsports.com/wp-content/uploads/2009/01/nfc-champs.jpg'
        },
        {
          answer: 'http://static.nfl.com/static/content//public/image/getty/2009/09000d5d81079cbb_gallery_600.jpg'
        },
        {
          answer: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/04/12/104400168-leads_his_team.600x400.jpg?v=1492007209'
        },
        {
          answer: 'https://www.sikids.com/sites/default/files/sikids/pages/images/cms/imce/users/dantec/2014/02/super-bowl-xlviii-photos-15.jpg'
        }
      ],
      selected: null,
      correct: null
    }


  ]
}); //end of quizCtrl
