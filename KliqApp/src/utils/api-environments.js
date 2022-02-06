/**
 * API ENVIRONMENTS
 */
 import axios from 'axios';
//  import config from 'react-native-ultimate-config';

const baseURL = 'http://54.92.198.116:5000'
 axios
   .get(baseURL)
   .then(res => {})
   .catch(error => {
     if (error.message && error.message !== 'Network Error') {
     }
   });

 /**
  * dev URL
  */

 const google_api = 'https://maps.googleapis.com/maps/api/geocode/json';

 /**
  *  To bind version of API for common APIs.
  */
 const API_VERSION = 'v1';

 export function getBaseURL() {
   return `${baseURL}`;
 }

 export function getGoogleAPIURL() {
   return `${google_api}`;
 }