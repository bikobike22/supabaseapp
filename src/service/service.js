import { supabase } from '../config/client'


export const fetchPosts = async () => {
    const { data } = await supabase.from('customer').select()

    return data;
}

export const fetchAllCustomesWithOrders = async () => {

    const { data, error } = await supabase
        .from('customer')
        .select('*, order(*)')

    console.log('res relation: ', data,)

    return data;
}

export const fetchOneCustomer = async (id) => {

    const { data, error } = await supabase
        .from('customer')
        .select()
        .eq('id', id)

    console.log('res relation: ', data,)

    return data;
}

export const fetchOnePreferenceByCustomerID = async (customer_id) => {

    const { data, error } = await supabase
        .from('preferences')
        .select()
        .eq('customer_id', customer_id)

    console.log('res relation: ', data,)

    return data;
}

//
export const fetchAllCustomersWithPreferences = async () => {

    const { data, error } = await supabase
        .from('customer')
        .select('*, preferences(*)')
        .order('id', {ascending: true})
        

    console.log('res relation pref: ', data, error)

    return data;
}

export const fetchOneCustomerWithPreferences = async (id) => {

    const { data, error } = await supabase
        .from('customer')
        .select('*, prefences(*)')
        .eq('id', id)

    console.log('res relation: ', data,)

    return data;
}

//
export const getTheLastRowInCustomer = async () => {
    const { data, error } = await supabase
        .from('customer')
        .select()
        .order('id', { ascending: false })
        .limit(1)
        
    if (error) {
        return error
    }

    return data


}
//

export const createCustomer = async (body) => {

    console.log("body: ", body)

    const { data, error } = await supabase
        .from('customer')
        .insert([body])
        .single()

if (error) {
        return false;
    }

    return data ? true : false
      

} 

export const updateCustomer = async (id, body) => {

    console.log("updateCustomer: ", id, body)
    const { data, error } = await supabase
        .from('customer')
        .update(body)
        .match({ 'id': id })
    
    return data
}

export const updatePreferencesByCustomerID = async (cust_id, body) => {

    //const hasPref = CheckfetchOnePreferenceByCustomerID(cust_id)

     const { data, error } = await supabase
            .from('preferences')
         .update(body)
         .eq('customer_id', cust_id)
           // .match({ 'customer_id': cust_id })
        if(error) return error
        return data

    // const { data_, error_ } = await supabase
    //     .from('preferences')
    //     .match({ 'customer_id': cust_id })
    //  if(error_) return error_
    
    // if (data_) {
    //     const { data, error } = await supabase
    //         .from('preferences')
    //         .update(body)
    //         .match({ 'customer_id': cust_id })
    //     if(error) return error
    //     return data
    // } else {
    //      createPreferencesByCustomerID(cust_id, body)
    // }


    // if (hasPref) {
    //     const { data, error } = await supabase
    //         .from('preferences')
    //         .update(body)
    //         .match({ 'customer_id': cust_id })
    // } else {
    //     // create pref
    //     createPreferencesByCustomerID(cust_id, body)

    // }



}

export const CheckfetchOnePreferenceByCustomerID = async (cust_id) => {
    const { data, error } = await supabase
        .from('preferences')
        .match({ 'customer_id': cust_id })

    if (error) {
        return false;
    }

    return data ? true : false


}


export const createPreferencesByCustomerID = async (cust_id, body) => {

    // body.customer_id = cust_id

    console.log("createPreferencesByCustomerID: ", cust_id, body)

    try {
        const { data, error } = await supabase
        .from('preferences')
        .insert([body])
            .single()
       return data 

    } catch (error) {
         return error;
    }
    


    
      

}






export const createOrder = () => {

}



export const removeOrder = () => {

}


