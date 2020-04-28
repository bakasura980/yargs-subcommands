const Option = require('../../../option');

class MessageOption extends Option {
    constructor() {
        super(
            'message',
            {
                "describe": "Something A",
                "type": "string",
            }
        );
    }

    process (optionValue) {
        return optionValue;
    }
}

module.exports = new MessageOption();
