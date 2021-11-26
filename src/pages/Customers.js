import { useState, useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'

import CustomerCard from "../components/CustomerCard"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        margin: '50px',
        background: 'red',
    }
}))

const Customers = () => {
    const classes = useStyles()
    const [customers, setCustomers] = useState([])
    

    useEffect(() => {
        axios('https://reqres.in/api/users')
            .then((response) => {
                const {data} = response.data

                setCustomers(data)
            })
    }, [])

    return (
            <Grid container spacing={6} >
                {
                    customers.map(item => (
                        <Grid item xs={12} md={4} key={item.id}>
                            <CustomerCard 
                                name={item.first_name}
                                lastname={item.last_name}
                                email={item.email}
                                avatar={item.avatar}
                                classsName={classes.card}
                            />
                        </Grid>
                    ))
                }
            </Grid>
    )
  }
  
  export default Customers
  