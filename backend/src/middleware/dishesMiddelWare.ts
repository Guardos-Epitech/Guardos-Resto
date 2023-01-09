import {IdishesCommunication} from '../models/communicationInterfaces';

export function checkIfNameExists(req: IdishesCommunication) {
    if (!req.name) {
        console.log('Missing name');
        return false;
    }
    return true;
}

