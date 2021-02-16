// Global variables
const media_base = "https://www.bluecity.dk/media/wysiwyg/";

deb_status = true; // Debugging status
const debuggy = (msg, type) => {
    let format_string = `Debuggy: ${msg}`;
    if (deb_status) {
        switch (type) {
            case 0:
                console.log(format_string);
                break;
            
            case 1:
                console.warn(format_string);
                break;
            
            case 2:
                console.error(format_string);
                break;

            default:
                console.error(`Debuggy - type paramter given: ${type}, is non-valid.`);

        }
    }
}

const ID_to_DOM = (id_list = []) => {
    let dom_list = []; let failed = 0;
    if (id_list.length != 0) {
        for (let i = 0; i < id_list.length; i++) {
            if (document.getElementById(id_list[i]) !== null) {
                dom_list.push(document.getElementById(id_list[i]));
            } else {
                failed++;
                debuggy(`ID['${id_list[i]}'] didn't correspond to a DOM-element`, 1);
            }
        }
        debuggy(`${id_list.length-failed}/${id_list.length} of the IDs, succesfully grabbd.`, 0);
    } else {
        debuggy("Zero length array given.", 1);
    }

    return dom_list;
}

let elements = ID_to_DOM(["one", "two", "three", "four"]);
let elements2 = ID_to_DOM();