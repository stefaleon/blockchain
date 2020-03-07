## [Build a Blockchain and a Cryptocurrency from Scratch](https://www.udemy.com/course/build-blockchain/)

Created by [David Joseph Katz](https://www.udemy.com/user/54cd8dd54e49b/)

## Set env vars in various terminals to test connections between peers

- In one command line tab:
  `$ npm run dev`
- In another command line tab, reset the environment variables and run the app:

  `$ HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev`

  Expect ‘socket connected’ to print in both tabs.

- In a third command line tab:

  `$ HTTP_PORT=3003 P2P_PORT=5003 PEERS=ws://localhost:5001,ws://localhost:5002 npm run dev`

  Expect ‘socket connected’ to be printed two times in each tab.
