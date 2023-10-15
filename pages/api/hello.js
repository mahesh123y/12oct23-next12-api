// Import Area


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//2. Define Area
function handler(req, res) {
  // Function serialization
  //2.1 object.method().method(actualArgument)
  // {property : value} is js object
  res.status(200).json({
                                msg1:`Hello ${req.query.name}`,
                                msg2:`Hello`,
                                msg3:`Hello`,
                                msg4:`Hello ${req.query.surname}`,

                                  // object.property.property
                                testKey: req.query
                       });
}


//3. Export Area
// 3.1 Export Default
export default handler;