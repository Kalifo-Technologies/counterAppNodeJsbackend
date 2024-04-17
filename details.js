// add goal method : post
// request
// =======================
// {
//   "userId":"121",
//   "selectDhikr": "dat119",
//   "setAmount": 14,
//   "note": "sosadmethsxzczcfgdgdsfsdinaadfadsgdsfsfdssdasgfdffdsfsfs"
// }
// response
// =================================
// {
//   "status": "success",
//   "message": "Goal created successfully",
//   "goal": {
//     "selectDhikr": "vvissdaddat119",
//     "setAmount": 14,
//     "note": "sosadmethsxzczcfgdgdsfsdinaadfadsgdsfsfdssdasgfdffdsfsfs"
//   }
// }
// {
//   "status": "error",
//   "message": "The provided note already exists",
//   "code": "DUPLICATE_GOAL"
// }
// "http://localhost:2030/api/v1/addGoal"

// add dhikr method : post
// request
// =======================
// {
//   "status": "success",
//   "message": "Dhikr created successfully",
//   "dhikr": {
//     "dhikr": "vvdcfzxzxsfxczzxczxfxzcit",
//     "notes": "sosaddsssdsczxzxmdvxvsxzething"
//   }
// }
// {
//   "status": "error",
//   "message": "The provided title already exists",
//   "code": "DUPLICATE_DHIKR"
// }
// "http://localhost:2030/api/v1/addDhikr/"

// increment count method  : post
// request
// =======================
// {
//   "userId":"121",
//   "quantity":2
// }

// response
// =================================

// {
//   "status": "success",
//   "message": "Item added to list successfully"
// }
// "http://localhost:2030/api/v1/increment/"

// get latest qty method : get
// request
// =======================
// {
//   "userId":"121"
// }

// response
// =================================
// {
//   "status": "success",
//   "message": "Latest quantity retrieved successfully",
//   "quantity": 2
// }
// "http://localhost:2030/api/v1/increment/get-Counts/"


// remove all items from the list method : delete
// request
// ======================
// {
//   "userId":"121"
// }
// response
// =================================
// {
//   "status": "success",
//   "message": "All items removed from the cart"
// }
// http://localhost:2030/api/v1/increment/remove-all/




// ==============================================================
// get goals method :get
// "http://localhost:2030/api/v1/addGoal"


// {
//     "userId":"133"
//   }

// {
//     "status": "success",
//     "message": "Goals retrieved successfully",
//     "goals": [
//       {
//         "selectDhikr": "xyzzsaz",
//         "note": "xyzsdadzz"
//       },
//       {
//         "selectDhikr": "xysdazzsaz",
//         "note": "xyzsdsaadzz"
//       }
//     ]
//   }