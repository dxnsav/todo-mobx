import React, { useState } from 'react';
import { Button, Grid, GridItem, Tabs, TabList, TabPanels, TabPanel, useColorModeValue, Tab, Box, Input, Center, Kbd } from '@chakra-ui/react';

import { useTodoStore } from './context/todoContext';

import { Observer } from 'mobx-react';
import TodoList from './components/todoList';
import IncompletedTodo from './components/incompletedTodo';
import CompletedTodo from './components/completedTodo';

import './App.css';


const App = () => {
  const todoStore = useTodoStore();

  const [value, setValue] = useState('');

  const colors = useColorModeValue(['#a4ac86', '#b6ad90', ]);

  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];

  return (
    <Observer>
      {() => (
        <div className="App" >
          <Center display='flex' flexDirection='column' height='100%' p='20' bg='gray.100' gap='5'>
            <Box w='100%' display='flex' flexDirection='row' bg='#edede9' gap='2' p='1.5' borderRadius='10px' >
              <Input
                placeholder="Enter your todo" value={value}
                onChange={(e) => setValue(e.target.value.trim())}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    if (value !== '') {
                      todoStore.addTodo(value);
                    }
                    setValue('');
                  }
                }}
                marginRight='3'
              />
              <Button
                bg='green.500'
                type='submit'
                onClick={() => {
                  if (value !== '') {
                    todoStore.addTodo(value);
                  }
                  setValue('');
                }}
              >
                Add Todo
              </Button>
              <span className='kbd'>or&nbsp;<Kbd>Enter</Kbd></span>
            </Box>
            <Grid templateColumns="repeat(2, 1fr)" height='100%' width='100%' >
              <GridItem bg='gray.300' borderLeftRadius='xl'>
                <TodoList />
              </GridItem>
              <GridItem>
                <Tabs onChange={(index) => setTabIndex(index)} index={tabIndex} bg={bg} height='100%' borderRightRadius='xl'>
                  <TabList>
                    <Tab>Incompleted</Tab>
                    <Tab>Completed</Tab>
                  </TabList>
                  <TabPanels>
                  <TabPanel>
                      <IncompletedTodo />
                    </TabPanel>
                    <TabPanel>
                      <CompletedTodo />
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
