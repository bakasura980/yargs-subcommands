const Option = require('../option');

class MessageOption extends Option {
    constructor() {
        super(
            'message',
            {
                "describe": "Something",
                "type": "string",
            }
        );
    }

    process (optionValue) {
        console.log(optionValue);
    }
}

module.exports = new MessageOption();
