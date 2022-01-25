export const AddressFields =[
     {name:"FirstName", type:"text", title:"First Name", id:"AddressFirst" ,validate:["isNameValid"]},
     {name:"LastName", type:"text", title:"Last Name", id:"AddressLast",validate:["isNameValid"]},
     {name:"AddressLine1", type:"text", title:"Address Line 1", id:"Address1",validate:["isNaN"]},
     {name:"AddressLine2", type:"text", title:"Address Line 2", id:"Address2",validate:["isNaN"]},
     {name:"City", type:"text", title:"City", id:"AddressCity",validate:["isNaN"]},
     {name:"Pin", type:"number", title:"Pin Code", id:"AddressPin",validate:["isNaN"]},
     {name:"State", type:"text", title:"State", id:"AddressState",validate:["isNaN"]},
     {name:"Phone", type:"number", title:"Phone ", id:"AddressPhone",validate:["isNaN"]},
     {name:"Email", type:"email", title:"Email ", id:"AddressEmail",validate:["isEmailValid","isNameValid"]},
];