{
    /**
     * Called synchronously when about to call fork.
     *
     * @this {object} - Object allowing you to store state for use in onLeave.
     * @param {function} log - Call this function with a string to be presented to the user.
     * @param {array} args - Function arguments represented as an array of NativePointer objects.
     * For example use Memory.readUtf8String(args[0]) if the first argument is a pointer to a C string encoded as UTF-8.
     * It is also possible to modify arguments by assigning a NativePointer object to an element of this array.
     * @param {object} state - Object allowing you to keep state across function calls.
     * Only one JavaScript function will execute at a time, so do not worry about race-conditions.
     * However, do not use this to store function arguments across onEnter/onLeave, but instead
     * use "this" which is an object for keeping state local to an invocation.
     */
    onEnter: function (log, args, state) {
        log("fork(" + "" + ")");
        Java.perform(function() {

            bClass = Java.use("sg.vantagepoint.uncrackable2.MainActivity");
            bClass.a.overload('java.lang.String').implementation = function(v) {
                console.log("[*] onClick called.");
            }
            console.log("[*] onClick handler modified");

        });
    },

    /**
     * Called synchronously when about to return from fork.
     *
     * See onEnter for details.
     *
     * @this {object} - Object allowing you to access state stored in onEnter.
     * @param {function} log - Call this function with a string to be presented to the user.
     * @param {NativePointer} retval - Return value represented as a NativePointer object.
     * @param {object} state - Object allowing you to keep state across function calls.
     */
    onLeave: function (log, retval, state) {
    }
}
