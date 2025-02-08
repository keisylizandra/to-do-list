import React from "react";
import CheckboxesGroup from '../CheckboxesGroup/CheckboxesGroup';
import { Grid } from '@mui/material'

export default function Planner() {
    return(
    
    <Grid container>

        <Grid item lg={3} md={6} xs={12}>  
        <CheckboxesGroup 
        label="Things to Plan" 
        items={[
            { name: "Research about the destination", checked: false },
            { name: "Set a budget", checked: false },
            { name: "Secure flights", checked: false },
            { name: "Apply for visas", checked: false },
            { name: "Book accommodations", checked: false },
            { name: "Create itinerary", checked: false },
            { name: "Choose tours and activities", checked: false },
            { name: "Find out about local transportation", checked: false }
          ]}
        labelColor={"#15648b"}
        boxBgColor={"#93ccdc"}
        formItemsBgColor={"#eafaff"}
      />
        </Grid>

        <Grid item lg={3} md={6} xs={12}>  
        <CheckboxesGroup 
        label="Activities To Do" 
        items={[
            { name: "Visit historical locations", checked: false },
            { name: "Drop by the museum", checked: false },
            { name: "Go to the zoo", checked: false },
            { name: "Have lunch at the park", checked: false },
            { name: "Try local delicacies", checked: false },
            { name: "Shop until you drop", checked: false },
            { name: "Enjoy a day in a theme park", checked: false },
            { name: "Get a relaxing massage", checked: false }
        ]}
        labelColor={"#3f3656"}
        boxBgColor={"#d0c3f1"}
        formItemsBgColor={"#f9f6ff"}
      />
        </Grid>

        <Grid item lg={3} md={6} xs={12}>  
        <CheckboxesGroup 
        label="Essentials To Bring" 
        items={[
            { name: "Passport", checked: false },
            { name: "Flight tickets", checked: false },
            { name: "Visas", checked: false },
            { name: "Money in local and foreign currency", checked: false },
            { name: "Credit cards", checked: false },
            { name: "Valid IDs", checked: false },
            { name: "Vaccination records", checked: false },
            { name: "Travel Insurance", checked: false }
          ]}
        labelColor={"#3a4b14"}
        boxBgColor={"#c3d798"}
        formItemsBgColor={"#faffef"}
      />
        </Grid>
        
        <Grid item lg={3} md={6} xs={12}>  
        <CheckboxesGroup 
        label="Items To Pack" 
        items={[
            { name: "Clothes", checked: false },
            { name: "Shoes", checked: false },
            { name: "Accessories", checked: false },
            { name: "Toiletries", checked: false },
            { name: "First aid", checked: false },
            { name: "Medicines", checked: false },
            { name: "Gadgets", checked: false },
            { name: "Chargers", checked: false }
          ]}          
        labelColor={"#522f1d"}
        boxBgColor={"#faddca"}
        formItemsBgColor={"#fff6f1"}
        border={"border"}
      />
        </Grid>

    </Grid>

    )
} 