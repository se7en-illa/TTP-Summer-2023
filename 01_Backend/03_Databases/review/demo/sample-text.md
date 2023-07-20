// Table follows {
//   following_user_id integer
//   followed_user_id integer
//   created_at timestamp 
// }

// Table users {
//   id integer [primary key]
//   email varchar
//   username varchar
//   password varchar
// }

// Table profiles {
//   id integer [primary key]
//   firstName varchar
//   lastName varchar
//   birthDate datetime
//   sex varchar
//   userId integer
// }

// Ref: users.id - profiles.userId

// Table orders {
//   id integer [primary key]
//   fulfilled boolean
//   userId integer
// }

// Ref: users.id < orders.userId

// Table orderProducts {
//   quantity integer
//   orderId integer
//   productId integer
// }

// Table products {
//   id integer [primary key]
//   name varchar
//   price money
// }


// Ref: orders.id < orderProducts.orderId
// Ref: products.id < orderProducts.productId

// Ref: orders.id <> products.id