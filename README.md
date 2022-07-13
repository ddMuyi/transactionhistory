# About Meeting Graphql
Meeting graphql is based on an online mental health counselling service. Meetings are sscheduled between counsellors and clients.

## Stacks used
I am using React.js, tailwind.css and Graphql for this project. I was having issues with picking express-graphql and apollo-server, but I went with the later because I find it easy to flow with. I used lodash(to make instances of a certain number), casual and faker to create the fake API.

## problems encountered

### Filtering by date
From the requirements of the project, there is supposed to be a specific number of dates (5). Hence, I started looking for possibilities of using graphql to filter meetings by the scheduled date, but then it's going to affect the views on the web, since the default categorising is by dates. Because of this, I opted to write scripts at the front side to group the meetings to date immediately after query sends back the data. This might change as the projects goes on

### Presenting the data
Although the wireframe presented oon the figma is in form of cards, but I decided to go with table presentatin because of space and ease of assessing datas. In case users want to view more details about a certain meeting, I added a click event listener to show a popup of the remainder details of the meeting.
But with table, comes the difficulty of presenting data on the mobile screen. I had the option of splitting ech row into two lines, but then it wouldn't work as data are still overflowing, so I had to remove some columns in the table on the mobile screen as well

### Filtering with queries
After a couple of trials, the got a hand of the queries, but I needed a way to unite my search queries into one query request. Doing so, I encountered a type problem because most of variables require String type but one is a Bolean and another is a Integer type. To fix this issue, I had to resort back to using String type for everything. This fixed the issue. I'll modify the code if there is enough time

### Pagination
After studying the nature of the tasks, I realise that there won't be a need to paginate the page considering that the first instance of the data I'll be fetching must beloong to one of 5 different dates. Paginating the data might result to some part of the dates going to next page thereby obstructing usability of the app
