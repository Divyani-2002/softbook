const sendmessages = (req, res) => {
    //business logic for sending a message
    res.send('message send successfully ');
}

const getallmessages = (req, res) => {
    //business logic for getting a single message
    res.send('list of all message reterived successfully ');
}

const getmessages = (req, res) => {
    // business logic for getting a single message
    res.send('one message reterived successfully');
}

const deletemessages = (req, res) => {
    //business logic for deleting a message 
    res.send('message deleted successfully');
}

const unsendmessages = (req, res) => {
    //business logic for unsending a message 
    res.send('message unsend successfully');
}

const readmessages = (req, res) => {
    //business logic for marking a message as read
    res.send('message read successfully');
}

export { sendmessages, getallmessages, getmessages, deletemessages, unsendmessages, readmessages }
