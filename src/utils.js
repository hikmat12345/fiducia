import Cookies from "universal-cookie";
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const cookies = new Cookies();

//empty-object
export const objectIsEmpty = (obj) => {
    return  Object?.keys((obj !==undefined && obj !==undefined) ?obj:{} )?.length === 0 ? true : false;
};

//set-cookie
export const setCookies = (name, value, expires) => {
  var date = new Date();
  date.setTime(date.getTime() + expires * 10000);
  cookies.set(name, value, {
    path: "/",
    expires: date,
  });
};

//get-cookie
export const getCookies = (name) => {
  return cookies.get(name);
};

//remove-cookies
export const removeCookies = (name) => {
  cookies.remove(name, { path: "/" });
};

//setLocalStorageStringified
export const setLocalStorageStringified = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

//getLocalStorageParsed
export const getLocalStorageParsed = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

//setSessionStorageStringified
export const setSessionStorageStringified = (name, value) => {
  sessionStorage.setItem(name, JSON.stringify(value));
};

//getSessionStorageParsed
export const getSessionStorageParsed = (name) => {
  return JSON.parse(sessionStorage.getItem(name));
};

//setLocalStorage
export const setLocalStorage = (name, value) => {
  localStorage.setItem(name, value);
};

//getLocalStorage
export const getLocalStorage = (name) => {
  return localStorage.getItem(name);
};

//setSessionStorage
export const setSessionStorage = (name, value) => {
  sessionStorage.setItem(name, value);
};

//getSessionStorage
export const getSessionStorage = (name) => {
  return sessionStorage.getItem(name);
};

//getImageOrVideoFromPublicFolder
export const getFileSrcFromPublicFolder = (name) => {
  return `${process.env.PUBLIC_URL}/assets/images/${name}`;
}; 
//validate-input
export const validateInput = (regex, value) => {
  return new RegExp(regex).test(value);
};

//get-unique-data-array
export const getUniqueData = (array, key) => {
  if (typeof key !== "function") {
    const property = key;
    key = function (item) {
      return item[property];
    };
  }
  return Array.from(
    array
      .reduce(function (map, item) {
        const k = key(item);
        if (!map.has(k)) map.set(k, item);
        return map;
      }, new Map())
      .values()
  );
};
// replace all symbole by space 
export const  replaceSymbolToSpace=(string, value)=>{
  const pattren= /([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\%\?\|\<\>\-\&])/g
 var filterString= string.replace(pattren,value )
 return filterString
}
//replace spaces
export const replaceSpaces = (string, value) => {
  return string?.replaceAll(" ", value);
};

//add spaces
export const addSpaces = (string, value) => {
  return string?.replaceAll(value, " ");
};
  
// toaster  
export const TPToaster=({
    toaster="success",
    message,
    position= "bottom-right",
    autoClose= 5000
})=>{
  if(toaster=="success"){
        toast.success(`${message}`, {
             position: position,
             autoClose: autoClose,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
          })
      } else if(toaster=="error"){
        toast.error(message, {
            position: position,
            autoClose: autoClose,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
      }
    }

    // capitialize 
 export   const capitialize=(string)=>{ 
   const completeLine=   string?.split(" ")?.map((eachString)=>{
    return  eachString?.charAt()?.toUpperCase()+eachString?.slice(1)
     }) 
      return  completeLine?.toString()?.replaceAll(",", " ")
    }
 
    
   export function formatAMPM(hour, minute) {
      var hours = hour;
      var minutes = minute;
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }