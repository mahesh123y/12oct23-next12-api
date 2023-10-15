// Import Area


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//2. Define Area
function laptopDetail(req, res) {
    // Function serialization
    //2.1 object.method().method(actualArgument)
    // {property : value} is js object
    res.status(200).json({
                                  msg1:`Hello ${req.query.Sales_Package}`,
                                  msg2:`Hello ${req.query.Model_Number}`,
                                  msg3:`Hello ${req.query.Laptop_Name}`,
                                  msg4:`Hello ${req.query.Price}`,
                                  msg5:`Hello ${req.query.Series}`,
  
                                    // object.property.property
                                  testKey: req.query
                         });
  }
  
  
  //3. Export Area
  // 3.1 Export Default
  export default laptopDetail;