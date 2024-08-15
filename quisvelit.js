if (name) {
    for (i = item; i; i = i.mark.group) {
        // Perform some operation with i
        console.log(i);
    }
}
