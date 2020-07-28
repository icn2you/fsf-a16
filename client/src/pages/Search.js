import React, { useReducer } from 'react'
import { Grid } from '@material-ui/core'
import { 
  DataContext, Header, Main, Footer, SearchForm, SearchResult 
} from '../components'

const reducer = (state, action) => {
  if (action.type === 'update') {
      return { 
        bookData: action.data, 
        queryStr: action.query,
        userMsg: action.message
      }
  } else {
      return new Error(
        'Your reducer attempted to perform an undefined operation.')
  }
}

const Search = () => {
  // state variables
  const [state, dispatch] = 
    useReducer(reducer, { bookData: [], queryStr: '', userMsg: '' })

  return (
    <>
      <Header />
      <Main alignItems="center">
        <DataContext.Provider value={{ state, dispatch }}>
          <Grid>
            <Grid item xs={12}>
              <SearchForm />
            </Grid>
            <Grid item xs={12}>
              <SearchResult />          
            </Grid>
          </Grid>
        </DataContext.Provider>
      </Main>
      <Footer />
    </>
  )
}

export default Search
