import React from 'react'
import Page from '../components/page/Page'
import CreateEditForm from '../profile/components/CreateEditForm'
import { useTranslation } from '../translations/Translations'
import AddForm from './components/AddForm'

const AddClient = () => {
  const { translate } = useTranslation()
  return (
<Page>
      
      {/* <div>{  translate("add-new-client")}</div> */}
      <AddForm type="create" />
</Page>
    
  )
}

export default AddClient