import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material'

import { Checkbox, FormControlLabel } from '@material-ui/core'

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
  boxShadow: theme.shadows[2],
}))

const Title = styled(Text)({
  margin: '30px 0px',
})

const FEED_QUERY = gql`
  {
    visitors {
      id
      dateTime
      ip
      device
    }
  }
`

export default () => {
  const [orderable, setOrderable] = React.useState(false)
  const toggleOrderable = () => setOrderable(!orderable)
  const columnDefs = [
      {
        headerName: 'ID',
        field: 'id',
        width: 200,
        rowDrag: orderable,
        filter: false,
      },
      {
        headerName: 'Date',
        field: 'dateTime',
      },
      {
        headerName: 'IP',
        field: 'ip',
      },
      {
        headerName: 'Device',
        field: 'device',
      },
    ],
    gridOptions = {
      defaultColDef: {
        sortable: true,
        width: 300,
        filter: true,
      },
      supressMenuHide: true,
      columnDefs: columnDefs,
      animateRows: true,
      floatingFilter: true,
      rowDragManaged: orderable,
      pagination: !orderable,
      paginationPageSize: 8,
    }

  return (
    <ErrorBoundary>
      <View flex={1} align={'center'}>
        <Title variant={'h3'}>List Page</Title>
        <FormControlLabel
          control={
            <Checkbox
              checked={Boolean(orderable)}
              onChange={toggleOrderable}
              value={orderable}
              color="secondary"
            />
          }
          label={'Toggle orderable feature'}
        />
        <Query query={FEED_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <Text variant={'h3'}>Fetching List</Text>
            if (error) return <Text variant={'h3'}>{error}</Text>

            const { visitors } = data
            return (
              <Table className="ag-theme-material" key={orderable.toString()}>
                <AgGridReact
                  columnDefs={columnDefs}
                  gridOptions={gridOptions}
                  rowData={visitors}
                ></AgGridReact>
              </Table>
            )
          }}
        </Query>
      </View>
    </ErrorBoundary>
  )
}
