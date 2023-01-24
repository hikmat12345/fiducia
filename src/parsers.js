import history from "./history";
import {   replaceSpaces } from "./utils";
  
// all services for home page parser
export const faeAllServicesParser =(data)=>{ 
 
  const allServicesData=data?.map(
    ({imagePath,  
    serviceName, 
  }) => ({
    name: serviceName,
    src: imagePath, 
    // onClick: () =>
    //   history.push({
    //     pathname: 
    //       `/services/${replaceSpaces(serviceName, "-")}`,
    //   }),
   }) 
  );
  return allServicesData 
}
