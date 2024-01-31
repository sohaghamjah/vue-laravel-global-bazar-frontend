import moment from "moment";

export function dateFormat(value){
    return moment(String(value)).format('LLL');
}