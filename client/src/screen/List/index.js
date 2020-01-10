import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material'

import { AgGridReact } from 'ag-grid-react'
import ErrorBoundary from '@molecule/ErrorBoundary'
import { Query } from 'react-apollo'
import React from 'react'
import Text from '@atom/Text'
import View from '@atom/View'
import gql from 'graphql-tag'
import styled from '@styler'

const Table = styled(View)(({ theme }) => ({
  height: '50vh',
  width: 800,
  boxShadow: theme.shadows[1],
}))

const Title = styled(Text)({
  margin: '30px 0px',
})

const FEED_QUERY = gql`
  {
    feed {
      id
      description
      url
    }
  }
`

export default () => {
  const columnDefs = [
      {
        headerName: 'ID',
        field: 'id',
        width: 200,
        rowDrag: true,
        filter: false,
      },
      {
        headerName: 'Description',
        field: 'description',
      },
      {
        headerName: 'URL',
        field: 'url',
      },
    ],
    gridOptions = {
      defaultColDef: {
        sortable: true,
        filter: true,
        width: 300,
      },
      rowDragManaged: true,
      columnDefs: columnDefs,
      animateRows: true,
      floatingFilter: true,
      pagination: true,
      paginationPageSize: 8,
    }

  return (
    <ErrorBoundary>
      <View flex={1} align={'center'}>
        <Title variant={'h3'}>List Page</Title>
        <Query query={FEED_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <Text variant={'h3'}>Fetching List</Text>
            if (error) return <Text variant={'h3'}>{error}</Text>

            const { feed } = data
            return (
              <Table className="ag-theme-material">
                <AgGridReact
                  columnDefs={columnDefs}
                  gridOptions={gridOptions}
                  rowData={feed}
                ></AgGridReact>
              </Table>
            )
          }}
        </Query>
      </View>
    </ErrorBoundary>
  )
}
