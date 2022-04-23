import React from 'react'
import Page from '../components/page/Page'
import CreateEditForm from '../profile/components/CreateEditForm'
import AddForm from './components/AddForm'

const AddClient =() => {
  return (
<Page>
      
      <div>AddClient</div>
      <AddForm type="create" />
</Page>
    
  )
}

export default AddClient