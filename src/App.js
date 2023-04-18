import React, { useState } from 'react';
import { Button, Grid, GridItem, Tabs, TabList, TabPanels, TabPanel, useColorModeValue, Tab, Box, Input, Center } from '@chakra-ui/react';

import { useTodoStore } from './context/todoContext';

import { Observer } from 'mobx-react';
import TodoList from './components/todoList';
import IncompletedTodo from './components/incompletedTodo';
import CompletedTodo from './components/completedTodo';


const App = () => {
  const todoStore = useTodoStore();

  const [value, setValue] = useState('');

  const colors = useColorModeValue(['#a4ac86', '#b6ad90', ]);

  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];

  return (
    <Observer>
      {() => (
        <div className="App" bg='gray.100' >
          <Center display='flex' flexDirection='column' height='100%' p='20'>
            <Box w='100%' display='flex' flexDirection='row'>
              <Input
                placeholder="Enter your todo" value={value}
                onChange={(e) => setValue(e.target.value.trim())}
              />
              <Button
                bg='#a7c957'
                onClick={() => {
                  if (value !== '') {
                    todoStore.addTodo(value);
                  }
                  setValue('');
                }}
              >Add Todo</Button>
            </Box>
            <Grid templateColumns="repeat(2, 1fr)" height='100%' width='100%'>
              <GridItem>
                <TodoList />
              </GridItem>
              <GridItem>
                <Tabs onChange={(index) => setTabIndex(index)} index={tabIndex} bg={bg}>
                  <TabList>
                    <Tab>Completed</Tab>
                    <Tab>Incompleted</Tab>
                  </TabList>
                  <TabPanels height='100%'>
                    <TabPanel>
                      <CompletedTodo />
                    </TabPanel>
                    <TabPanel>
                      <IncompletedTodo />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </GridItem>
            </Grid>
          </Center>
        </div>
      )}
    </Observer>
  );
}

export default App;
