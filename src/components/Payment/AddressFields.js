export const AddressFields =[
     {name:"FirstName", type:"text", title:"First Name", id:"AddressFirst" ,validate:(data)=>isNaN(data)},
     {name:"LastName", type:"text", title:"Last Name", id:"AddressLast",validate:(data)=>isNaN(data)},
     {name:"AddressLine1", type:"text", title:"Address Line 1", id:"Address1",validate:(data)=>isNaN(data)},
     {name:"AddressLine2", type:"text", title:"Address Line 2", id:"Address2",validate:(data)=>isNaN(data)},
     {name:"City", type:"text", title:"City", id:"AddressCity",validate:(data)=>isNaN(data)},
     {name:"Pin", type:"number", title:"Pin Code", id:"AddressPin",validate:(data)=>isNaN(data)},
     {name:"State", type:"text", title:"State", id:"AddressState",validate:(data)=>isNaN(data)},
     {name:"Phone", type:"number", title:"Phone ", id:"AddressPhone",validate:(data)=>isNaN(data)},
     {name:"Email", type:"email", title:"Email ", id:"AddressEmail",validate:(data)=>isNaN(data)},
];