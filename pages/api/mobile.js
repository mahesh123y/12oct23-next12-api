// Import Area


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//2. Define Area
function mobileDetail(req, res) {
    // Function serialization
    //2.1 object.method().method(actualArgument)
    // {property : value} is js object
    res.status(200).json({
                                  msg1:`Hello ${req.query.mname}`,
                                  msg2:`Hello`,
                                  msg3:`Hello`,
                                  msg4:`Hello ${req.query.price}`,
                                  msg4:`Hello ${req.query.model}`,
  
                                    // object.property.property
                                  testKey: req.query
                         });
  }
  
  
  //3. Export Area
  // 3.1 Export Default
  export default mobileDetail;