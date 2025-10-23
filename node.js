

function createNode(value = null) {

    let left = null;
    let right = null;

    return {
        get left() {
            return left;
        },

        set left(node) {
            left = node;
        },

        get right() {
            return right;
        },

        set right(node) {
            right = node;
        },

        get value() {
            return value;
        }
    }
}

export { createNode }