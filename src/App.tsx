import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import PublicationModel from './publication/Publication.Model';
import Publication from './publication/Publication.Component';
import { Box, Tabs, Tab, AppBar, Toolbar, Typography, Button } from '@mui/material';
import TabPanel from './TabPanel';

interface State {
  value?: number;
}

class App extends React.Component<{}, State>{
  constructor() {
    super({});

    this.state = {
      value: 0
    };
  }

  public get publications() : PublicationModel[] {
    return [
      {
        authors: [
          "Quentin Gautier",
          "Alric Althoff",
          "Christopher L. Crutchfield",
          "Ryan Kastner"
        ],
        title: "Sherlock: A Multi-Objective Design Space Exploration Framework",
        titleHref: "http://kastner.ucsd.edu/wp-content/uploads/2022/04/admin/todaes22-sherlock.pdf",
        journal: "ACM Transactions on Design Automation Electronic Systems",
        volume: 27,
        issue: 4,
        article: 33,
        month: 3,
        year: 2022
      },
      {
        authors: [
          "Emily M. Wong",
          "Isabella Humphrey",
          "Scott Switzer",
          "Christopher L. Crutchfield",
          "Nathan Hui",
          "Curt Schurgers",
          "Ryan Kastner"
        ],
        title: "Underwater Depth Calibration Using a Commercial Depth Camera",
        titleHref: "http://kastner.ucsd.edu/wp-content/uploads/2022/11/admin/wuwnet22-underwater-depth.pdf",
        conference: "International Conference on Underwater Networks & Systems",
        month: 11,
        year: 2022
      },
      {
        authors: [
          "Christopher L. Crutchfield",
          "Jake Sutton",
          "Anh Ngo",
          "Emmanuel Zadorian",
          "Gabrielle Hourany",
          "Dylan Nelson",
          "Alvin Wang",
          "Fiona McHenry-Crutchfield",
          "Deborah Forster",
          "Shirley C. Strum",
          "Ryan Kastner",
          "Curt Schurgers"
        ],
        title: "Baboons on the Move: Enhancing Understanding of Collective Decision Making through Automated Motion Detection from Aerial Drone Footage",
        titleHref: "http://kastner.ucsd.edu/wp-content/uploads/2020/10/admin/crutchfield2020baboons.pdf",
        conference: "International Conference on Methods and Techniques in Behavioral Research (Measuring Behavior)",
        month: 10,
        year: 2020
      }
    ]
  }

  private getPublicationElements() {
    return this.publications
      .sort((a, b) => {
        let aDate = new Date();
        let bDate = new Date();

        aDate.setFullYear(a.year, a.month);
        bDate.setFullYear(b.year, b.month);

        return  bDate.valueOf() - aDate.valueOf();
      })
      .map(
        p => (
          <Publication
            authors={p.authors}
            title={p.title}
            titleHref={p.titleHref}
            journal={p.journal}
            conference={p.conference}
            volume={p.volume}
            issue={p.issue}
            article={p.article}
            month={p.month}
            year={p.year}
          />
        )
      );
  }

  private handleTabChange(event: React.SyntheticEvent, newValue: number) {
    this.setState({
      value: newValue
    });
  }

  render(): React.ReactNode {
    const publications = this.getPublicationElements();

    return (
      <div>
        <AppBar>
          <Toolbar>
            <Typography>Christopher L. Crutchfield</Typography>

            <Box>
              <Button>Blog</Button>
              <Button>Publications</Button>
              <Button>About</Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Tabs value={this.state.value} onChange={this.handleTabChange.bind(this)}>
          <Tab label="Blog" />
          <Tab label="Publications" />
          <Tab label="About" />
        </Tabs>

        <TabPanel 
          value={this.state.value} 
          index={0}>
          <p>Blog Panel</p>
        </TabPanel>
        <TabPanel
          value={this.state.value}
          index={1}>
          {publications}
        </TabPanel>
        <TabPanel
          value={this.state.value}
          index={2}>
          <p>About Panel</p>
        </TabPanel>
      </div>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.tsx</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
